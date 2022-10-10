import { buffer } from 'micro'
import nodemailer from 'nodemailer'
import Stripe from 'stripe'

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const endpointSecret = 'whsec_4GZuTKO7MA0xd2WhAmDiwlHSWl5R9AfB'
// const endpointSecret = 'whsec_a6d2c13640b5t415b7f8a03b7d1deef1eetad64b331f6d0b61024e72tf5038777f3'

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

        console.log('------------------')

        try {
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
        } catch (err) {
            console.log('Error', err.message)
            return res.status(400).send(`Webhook error: ${err.message}`)
        }

        // console.log(event)

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object

            // console.log('Session: ', session)

            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD
                }
            });

            try {
                await transporter.sendMail({
                    from: "paseolosberros@gmail.com",
                    to: "diegoeliseoiovane@gmail.com",
                    subject: `Booking confirmation from Rent Internet `,
                    html: `
                    <p>Compra OK</p><br>
                    <p>Session: ${session.id}</p>
                    <p>Amount: ${session.amount_total / 100}</p>
                    <p>Email: ${session.metadata.email}</p>
                  `
                });
            } catch (error) {
                return res.status(500).json({ error: error.message || error.toString() });
            }

        }
    }
}