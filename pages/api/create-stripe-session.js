import { api } from "../../utils/wocommerce";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {

    const session = await stripe.checkout.sessions.create({
        success_url: 'https://rent-internet/succesful',
        cancel_url: 'https://rent-internet/cancel',
        mode: 'payment',
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: "Modem",
                    },
                    unit_amount: 200 * 100,
                },
                quantity: 1,
            }
        ],
    });

    res.json({ id: session.id });
}

export default CreateStripeSession