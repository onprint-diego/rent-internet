import Stripe from 'stripe'
import { buffer } from 'micro'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method === 'POST') {

        let event

        try {

            const rawBody = await buffer(req);
            const signature = req.headers['stripe-signature'];
            event = stripe.webhooks.constructEvent(
                rawBody.toString(),
                signature,
                process.env.STRIPE_WEBHOOK_SECRET
            )
        } catch (err) {
            console.log(`❌ Error message: ${err.message}`);
            res.status(400).json({ message: `Webhook Error: ${err.message}` });
            return
        }

        // Successfully constructed event
        console.log('✅ Success:', event.id);

        // Handle event type (add business logic here)
        if (event.type === 'checkout.session.completed') {
            console.log(`💰  Payment received!`)


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




        } else {
            console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
        }

        // Return a response to acknowledge receipt of the event.
        res.json({ received: true });

    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).json({ message: 'Method not allowed' });
    }
}

