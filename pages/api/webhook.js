import { buffer } from 'micro'
import nodemailer from 'nodemailer'
import Stripe from 'stripe'

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const endpointSecret = 'whsec_4GZuTKO7MA0xd2WhAmDiwlHSWl5R9AfB'

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

        console.log(req.body, req, payload)

        let event

        try {
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
        } catch(err) {
            console.log('Error', err.message)
            return res.status(400).send(`Webhook error: ${err.message}`)
        }

        if(event.type === 'checkout.session.completed') {
            const session = event.data.object

            console.log('Request: ' + req.headers)

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
                  subject: `Contact form submission from `,
                  html: `<p>You have a contact form submission</p><br>
                    <p><strong>Email: </strong> </p><br>
                    <p><strong>Message: </strong>p><br>
                  `
                });
              } catch (error) {
                return res.status(500).json({ error: error.message || error.toString() });
              }

        }
    }
}