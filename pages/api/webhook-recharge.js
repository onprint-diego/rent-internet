import Stripe from 'stripe'
import sgMail from '@sendgrid/mail'
import { buffer } from 'micro'
import { api } from "../../utils/woocommerce"

sgMail.setApiKey(process.env.SENDGRID_KEY);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPE_RECHARGE_WEBHOOK_SECRET_HEROKU_DEV
// const endpointSecret = "whsec_a6d2c13640b5415b7f8a03b7d1deef1eead64b331f6d0b61024e72f5038777f3"

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
      return res.status(400).send(`Webhook error: ${err.message}`)
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object
      const clientSecret = session.id
      const orderDetails = session.metadata
      let completedOrder = {}
      let itemsList = []
      let wooOrderId

      const order = {
        payment_method: "Pago con tarjeta de crédito",
        payment_method_title: "Pago con tarjeta de crédito",
        set_paid: true,
        email: orderDetails.customerEmail,
        billing: {
          first_name: orderDetails.customerEmail,
          email: orderDetails.customerEmail,
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
            quantity: 1,
            product_id: id,
            name: item.price.product.name,
            total: item.amount_total / 100,
          }

        })

        completedOrder = { ...order, line_items: formatedItems }

      } catch (error) {
        return res.json({ message: 'Error listing items as to place woocommerce order' })
      }

      try {
        wooOrderId = await api.post("orders", completedOrder)

        const html = `<div>hola</div>`

        const msg = {
          to: completedOrder.email,
          from: 'rent@rent-internet.com',
          subject: 'Confirmación de reserva de módem Rent Internet - v2',
          html: html,
        }
  
        try {
          await sgMail.send(msg);
          return res.status(200).json({ message: 'Email has been sent' })
        } catch (error) {
          return res.status(500).json({ error: 'Error sending email' })
        }

        // res.status(200).json({ message: 'Order placed in Woocommerce' })
      } catch (error) {
        return res.json({ message: 'Error setting woo order' })
      }

      // api.post("orders", completedOrder).then(res => console.log('.................................................................', res.data.id))

      // console.log('..................................................................', wooOrderId)

      // const htmlItemsList = completedOrder.line_items.map(item => `<tr><td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">${item.name}</td><td style="border: 1px solid #dfdfe2;text-align: center;padding: 1rem;">${item.quantity}</td><td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">USD ${item.total}</td>`).join('</tr>')

      // const html = `
      //     <div style="width: 75%;background-color: #f7f7f7;padding-bottom: 10rem;margin: 0 auto;border-radius: 4px; overflow: hidden;">
      //       <div style="background-color: #ffffff;width: 90%;max-width: 550px;margin: 0 auto;border-radius: 3px;border;1px solid #e0e0e0;overflow: hidden;">
      //       <div style="background-color: #1966d1;padding: 2rem;color: #ffffff;">
      //           <h1>Gracias por su reserva</h1>
      //       </div>
      //       <div style="padding: 2rem;">
      //           <p>Hemos recibido tu orden de reserva. El número de orden es:</p>
      //           <p style="text-align: center;font-size: 4rem;font-weight: bold;margin: 2rem 0;color: #1966d1;"></p>
      //           <table style="border-collapse: collapse;border-spacing: 0;margin-top: 1rem;width: 95%;border-radius: 4px;">
      //               <thead style="background-color: #dfdfe2;">
      //                   <tr>
      //                       <th style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">Producto</th>
      //                       <th style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">Cantidad</th>
      //                       <th style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">Precio</th>
      //                   </tr>
      //               </thead>
      //               <tbody>
      //                ${htmlItemsList}
      //                   <tr>
      //                       <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;" colspan="2">Total</td>
      //                       <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">USD </td>
      //                   </tr>
      //               </tbody>
      //           </table>
      //           <div style="margin-top: 2rem;">
      //               <p style="font-weight: bold;">Método de pago</p>
      //               <p>${completedOrder.payment_method}</p>
      //           </div>
      //       </div>
      //       <div id="footer>
      //       </div>
      //       </div>
      //   </div>
      // `
      
      // const html = `<div>hola</div>`

      // const msg = {
      //   to: completedOrder.email,
      //   from: 'rent@rent-internet.com',
      //   subject: 'Confirmación de reserva de módem Rent Internet - v2',
      //   html: html,
      // }

      // try {
      //   await sgMail.send(msg);
      //   return res.status(200).json({ message: 'Email has been sent' })
      // } catch (error) {
      //   return res.status(500).json({ error: 'Error sending email' })
      // }
    }
  }
}