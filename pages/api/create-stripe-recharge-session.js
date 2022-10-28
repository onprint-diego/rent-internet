const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

async function CreateStripeSession(req, res) {
    const { cart, products } = req.body;

    const productName = cart.product.name 
    const productPrice = parseInt(cart.product.price) 
    const productMetadata = {'wooId': '132' }

    //FOLLOW STRIPE FORMAT for checkoutSession object
    const items = [{
        price_data: {
            currency: 'usd',
            product_data: {
                name: productName,
                metadata: {
                    'wooId': `${cart.product.id}`
                }
            },
            unit_amount: productPrice * 100,
        },
        quantity: 1,
    }]

    const metadata = {
        'customerEmail': `${cart.customerDetails.email}`,
    }


    const session = await stripe.checkout.sessions.create({
        success_url: 'http://localhost:3000',
        // success_url: 'https://rent-internet.com/success',
        cancel_url: 'https://rent-internet.com/cancel',
        mode: 'payment',
        line_items: items,
        metadata: metadata,
    });

    res.status(200).json({ id: session.id })
}

export default CreateStripeSession