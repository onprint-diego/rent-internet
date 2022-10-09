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

       

        }
    }
}




//////////////////////////////////////////////

// import { buffer } from 'micro'

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

// export default async function handler(req, res) {
//     if (req.method === 'POST') {

//         let event

//         try {

//             const rawBody = await buffer(req);
//             const signature = req.headers['stripe-signature'];
//             event = stripe.webhooks.constructEvent(
//                 rawBody.toString(),
//                 signature,
//                 process.env.STRIPE_WEBHOOK_SECRET
//             )
//         } catch (err) {
//             console.log(`❌ Error message: ${err.message}`);
//             res.status(400).json({ message: `Webhook Error: ${err.message}` });
//             return
//         }

//         // Successfully constructed event
//         console.log('✅ Success:', event.id);

//         // Handle event type (add business logic here)
//         if (event.type === 'checkout.session.completed') {
//             console.log(`💰  Payment received!`)
            
//         } else {
//             console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
//         }

//         // Return a response to acknowledge receipt of the event.
//         res.json({ received: true });

//     } else {
//         res.setHeader('Allow', 'POST');
//         res.status(405).json({ message: 'Method not allowed' });
//     }
// }

