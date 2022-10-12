import { buffer } from 'micro'
import { api } from '../../utils/wocommerce'
import nodemailer from 'nodemailer'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const endpointSecret = 'whsec_4GZuTKO7MA0xd2WhAmDiwlHSWl5R9AfB'
// const endpointSecret = 'whsec_a6d2c13640b5415b7f8a03b7d1deef1eead64b331f6d0b61024e72f5038777f3'

export const config = {
    api: {
        bodyParser: false,
    },
}

const prepareHtml = ( session, products ) => {
    const productsHtml = products.map(product => `<p>${product.description} - u$d${product.price.unit_amount * 100}</p>`).join('<br>')

    const htmlBody = `
        <h2 style="color:blue;font-size:46px;">TEST Hemos recibido tu pago!</h2><br>
        <p>Tu id de compra es: ${session.id}</p><br>
        <p>Total: u$d ${session.amount_total * 100}</p><br>
    `

    return `${htmlBody} ${productsHtml}`
}

const sendConfirmationMail =  async ( session, products ) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    })

    const html = prepareHtml(session, products)

    try {
        await transporter.sendMail({
            from: "rent@rent-internet.com",
            to: session.customer_details.email,
            // from: "paseolosberros@gmail.com",
            // to: "diegoeliseoiovane@gmail.com",
            subject: `Booking confirmation from Rent Internet v7`,
            html: html,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() })
    }
}

const setOrderInWoo = ( session, products ) => {

    console.log('Session', session)
    console.log('Products', products)

    
    const data = {
        payment_method: "Card",
        payment_method_title: "Card",
        set_paid: true,
        billing: {
          first_name: session.metadata.customerName,
          last_name: "Doe",
          address_1: "969 Market",
          address_2: "",
          city: "San Francisco",
          state: "CA",
          postcode: "94103",
          country: "US",
          email: session.metadata.customerEmail,
          phone: "(555) 555-5555"
        },
        shipping: {
          first_name: "John",
          last_name: "Doe",
          address_1: "969 Market",
          address_2: "",
          city: "San Francisco",
          state: "CA",
          postcode: "94103",
          country: "US"
        },
        line_items: [
          {
            product_id: 93,
            quantity: 2
          },
          {
            product_id: 22,
            variation_id: 23,
            quantity: 1
          }
        ],
        shipping_lines: [
          {
            method_id: "flat_rate",
            method_title: "Flat Rate",
            total: "10.00"
          }
        ]
      };
      
      api.post("orders", data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
      
}

// MAIN FUNCTION
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
            let products
            stripe.checkout.sessions.listLineItems(clientSecret)
            .then( res => {
                products = res.data
                sendConfirmationMail(session, products)
                setOrderInWoo(session, products)
            })
        }
    }
}