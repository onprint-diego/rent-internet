import { api } from "../../services/wocommerce";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
    const { item } = req.body;
  
    const response = await api.get("products")
    const price = response.data[0].price * item.qty
    const shippingFee = parseInt(response.data[0].attributes[0].options[0])
    const amount = price + shippingFee

    const session = await stripe.checkout.sessions.create({
        success_url: 'http://localhost:3000',
        cancel_url: 'http://localhost:3000',
        // success_url: 'https://rent-internet/succesful',
        // cancel_url: 'https://rent-internet/cancel',
        mode: 'payment',
        line_items: [{
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                },
                unit_amount: amount * 100,
            },
        quantity: 1,
        }],
    });
    
    res.json({ id: session.id });
}

export default CreateStripeSession