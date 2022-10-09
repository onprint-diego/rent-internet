import { buffer } from 'micro'
import nodemailer from 'nodemailer'


const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const requestBuffer = await buffer(req)
        const payload = requestBuffer.toString()
        const sig = req.headers["stripe-signature"]

        let event

        try {
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
        } catch(err) {
            console.log('Error', err.message)
            return res.status(400).send(`Webhook error: ${err.message}`)
        }

        if(event.type === 'checkout.session.completed') {
            const session = event.data.object

            
            //SEND CONFIRMATION MAIL
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
                    from: "diegoeliseoiovane@gmail.com",
                    to: "diegoeliseoiovane@gmail.com",
                    subject: `Contact form submission from`,
                    html: `<p>You have a contact form submission</p><br>
                    <p><strong>Email: </strong></p><br>
                    <p><strong>Message: </strong> hol</p><br>
                  `
                });
            } catch (error) {
                return res.status(500).json({ error: error.message || error.toString() });
            }
            return res.status(200).json({ error: "" });


        }
    }
}

