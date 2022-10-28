import Stripe from 'stripe'
import sgMail from '@sendgrid/mail'
import { buffer } from 'micro'
import { api } from "../../utils/woocommerce"

sgMail.setApiKey(process.env.SENDGRID_KEY);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const endpointSecret = 'whsec_kVUevKPdbV63xZAz5Tny4zkbGX4iPn9Y'
// const endpointSecret = 'whsec_a6d2c13640b5415b7f8a03b7d1deef1eead64b331f6d0b61024e72f5038777f3'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const reqBuffer = await buffer(req)
    const payload = reqBuffer.toString()
    const sig = req.headers["stripe-signature"]

    let event

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
    } catch (err) {
      console.log('Error', err.message)
      return res.status(400).send(`Webhook error: ${err.message}`)
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object
      const clientSecret = session.id
      const orderDetails = session.metadata
      const stringDates = `Desde ${orderDetails.from} hasta ${orderDetails.to}`
      let completedOrder = {}
      let itemsList = []
      let wooOrderId

      const order = {
        payment_method: "Pago con tarjeta de crédito",
        payment_method_title: "Pago con tarjeta de crédito",
        set_paid: true,
        email: orderDetails.customerEmail,
        billing: {
          first_name: orderDetails.customerName,
          last_name: orderDetails.customerSurname,
          address_1: orderDetails.billingAddress,
          city: orderDetails.billingCity,
          postcode: orderDetails.billingCp,
          country: orderDetails.billingCountry,
          email: orderDetails.customerEmail,
          phone: orderDetails.customerPhone
        },
        shipping: {
          address_1: stringDates,
          city: orderDetails.deliveryCity,
          postcode: orderDetails.deliveryCp,
          country: orderDetails.deliveryCountry,
          address_2: orderDetails.deliveryAddress
        },
      }

      try {

        itemsList = await stripe.checkout.sessions.listLineItems(clientSecret, {
          expand: ['data.price.product']
        })

        //FORMAT ITEMS TO WOOCOMMERCE FORMAT
        const formatedItems = itemsList.data.map(item => {

          // Product metadata ends in item.price.product.metadata)
          const id = parseInt(item.price.product.metadata.wooId)

          return {
            quantity: item.quantity,
            product_id: id, 
          }

        })

        completedOrder = {...order, line_items: formatedItems}

      } catch (error) {
        res.json({ message: 'Error listing items as to place woocommerce order' })
      }


      try {
        wooOrderId = await api.post("orders", completedOrder)
        res.status(200).json({ message: 'Order placed in Woocommerce' })
      } catch (error) {
        res.json({ message: 'Error setting woo order' })
      }

      // SEND MAIL
      const formatedItemsHtml = itemsList.data.map(item => {
        return `<p>${item.description} x${item.quantity} - ${item.amount_total / 100}</p>`
      }).join('<br>')

      const msg = {
        to: session.customer_details.email,
        from: 'rent@rent-internet.com',
        subject: 'Confirmación de reserva de módem Rent Internet',
        html: `
          <h1>Gracias por la reserva</h1>
          <h4>Número de órden: ${wooOrderId.data.id}</h4>
          ${formatedItemsHtml}
          `,
      };

      try {
        await sgMail.send(msg);
        res.status(200).json({message: 'Email has been sent'})
      } catch (error) {
        res.status(500).json({ error: 'Error sending email' })
      }


    }
  }
}

//Response Object for listLineItems
/*
{
  "object": "list",
  "url": "/v1/checkout/sessions/cs_test_a1ccs8sV5Z5tVjD6kSnnkjVP64WFgdzda9rxlDvvNXVfX6a45euhrAmOXj/line_items",
  "has_more": false,
  "data": [
    {
      "id": "li_1LsFRo2wqvxfBLhLnGXqlOim",
      "object": "item",
      "amount_discount": 0,
      "amount_subtotal": 0,
      "amount_tax": 0,
      "amount_total": 0,
      "currency": "chf",
      "description": "test product",
      "price": {
        "id": "price_1KdKDX2wqvxfBLhLd92Pz31t",
        "object": "price",
        "active": true,
        "billing_scheme": "per_unit",
        "created": 1647288611,
        "currency": "chf",
        "custom_unit_amount": null,
        "livemode": false,
        "lookup_key": null,
        "metadata": {},
        "nickname": null,
        "product": "prod_LJy9hMFV56fFUV",
        "recurring": null,
        "tax_behavior": "unspecified",
        "tiers_mode": null,
        "transform_quantity": null,
        "type": "one_time",
        "unit_amount": 1200,
        "unit_amount_decimal": "1200"
      },
      "quantity": 1
    },
    {...},
    {...}
  ]
}
*/