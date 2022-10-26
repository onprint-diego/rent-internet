import Stripe from 'stripe'
import sgMail from '@sendgrid/mail'
import { buffer } from 'micro'
import { api } from "../../utils/woocommerce"
import { CreateWooCommerceCardOrder } from './create-woo-card-order'

sgMail.setApiKey(process.env.SENDGRID_KEY);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const endpointSecret = 'whsec_kVUevKPdbV63xZAz5Tny4zkbGX4iPn9Y'

export const config = {
  api: {
    bodyParser: false,
  },
}

// FUNCTION
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
      //FUNCIONA PERO NO LE LLEGAN LOS DATOS
      // CreateWooCommerceCardOrder(session)

      // SET ORDER IN WOOCOMMERCE
      // const stringTotal = parseInt(session.amount_total / 100)
      // const stringDates = `Desde ${data.from} hasta ${data.to}`
      // const formatedProducts = formatProducts()
  
      const order = {
          payment_method: "Pago con tarjeta de crédito",
          payment_method_title: "Pago con tarjeta de crédito",
          set_paid: true,
          // billing: {
          //     first_name: data.customerDetails.name,
          //     last_name: data.customerDetails.surname,
          //     address_1: data.customerDetails.billingAddress,
          //     city: data.customerDetails.billingCity,
          //     postcode: data.customerDetails.billingCp,
          //     country: data.customerDetails.billingCountry,
          //     email: data.customerDetails.email,
          //     phone: data.customerDetails.phone
          // },
          shipping: {
              address_1: 'address jdfasl',
              city: 'aldsfj',
              // postcode: session.metadata.deliveryCp,
              country: 'dsklfj',
              //use this to send dates information in form of string
              // address_2: stringDates
          },
          // line_items: formatedProducts,
          total: '40',
      }
  
  
      try {
          const response = await api.post("orders", order)
          // return response
      } catch (error) {
          console.log('ERROR placing order in woocommerce', error)
          // return error
      }

      // SEND MAIL
      const msg = {
        to: session.customer_details.email,
        from: 'rent@rent-internet.com',
        subject: 'Confirmación de reserva de módem Rent Internet',
        html: `<h1>hola ${session.customer_details.email}</h1>`,
      };

      try {
        await sgMail.send(msg);
        res.json({ message: `Email has been sent` })
      } catch (error) {
        res.status(500).json({ error: 'Error sending email' })
      }

      // const clientSecret = session.id
      // stripe.checkout.sessions.listLineItems(clientSecret) //Check bottom for structure of response object
      // .then( res => {
      //     products = res.data
      //     sendConfirmationMail(session, products)
      //     setOrderInWoo(session, products)
      // })
    }
  }
}

//THE SESSION OBJECT
// "id": "cs_test_b1TynfVjoTZenP1bHpMPds3fo3HRi5FutYwQt1RnUKpRLK32Jkq4X2Nczo",
// "object": "checkout.session",
// "after_expiration": null,
// "allow_promotion_codes": null,
// "amount_subtotal": 8600,
// "amount_total": 8600,
// "automatic_tax": {
//   "enabled": false,
//   "status": null
// },
// "billing_address_collection": null,
// "cancel_url": "https://rent-internet.com/cancel",
// "client_reference_id": null,
// "consent": null,
// "consent_collection": null,
// "created": 1666008898,
// "currency": "usd",
// "customer": null,
// "customer_creation": "if_required",
// "customer_details": {
//   "address": {
//     "city": null,
//     "country": "CH",
//     "line1": null,
//     "line2": null,
//     "postal_code": null,
//     "state": null
//   },
//   "email": "florencia.bianco@onprint.ch",
//   "name": "florencia prueba",
//   "phone": null,
//   "tax_exempt": "none",
//   "tax_ids": [
//   ]
// },
// "customer_email": null,
// "expires_at": 1666095298,
// "livemode": false,
// "locale": null,
// "metadata": {
//   "deliveryAddress": "independencia",
//   "customerSurname": "bianco",
//   "deliveryCp": "8005",
//   "deliveryCountry": "Germany",
//   "customerName": "florencia",
//   "deliveryCity": "Zurich",
//   "customerEmail": "florencia.bianco@onprint.ch",
//   "customerPhone": "3416120640"
// },
// "mode": "payment",
// "payment_intent": "pi_3LtsEqHieiQtj1QL1b8nxMRA",
// "payment_link": null,
// "payment_method_collection": "always",
// "payment_method_options": {
// },
// "payment_method_types": [
//   "card"
// ],
// "payment_status": "paid",
// "phone_number_collection": {
//   "enabled": false
// },
// "recovered_from": null,
// "setup_intent": null,
// "shipping_address_collection": null,
// "shipping_cost": null,
// "shipping_details": null,
// "shipping_options": [
// ],
// "status": "complete",
// "submit_type": null,
// "subscription": null,
// "success_url": "https://rent-internet.com/succesful",
// "total_details": {
//   "amount_discount": 0,
//   "amount_shipping": 0,
//   "amount_tax": 0
// },
// "url": null
// }

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