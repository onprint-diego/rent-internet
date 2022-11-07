const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

async function CreateStripeSession(req, res) {
    const { cart, products } = req.body;

    const customer = cart.customerDetails
    const modem = products.find(product => product.id === 132)
    const modemPrice = parseInt(modem.price)
    const shippingFee = products.find(product => product.id === 629)
    const shippingFeePrice = parseInt(shippingFee.price)
    const adapter = products.find(product => product.id === 434)
    const adapterPrice = parseInt(adapter.price)
    const powerBank = products.find(product => product.id === 435)
    const powerBankPrice = parseInt(powerBank.price)
    const deposit = products.find(product => product.id === 790)
    const depositPrice = parseInt(deposit.price)

    //FOLLOW STRIPE FORMAT for checkoutSession object
    const items = []
    items.push({
        price_data: {
            currency: 'usd',
            product_data: {
                name: modem.name,
                metadata: {
                    'wooId': '132'
                }
            },
            unit_amount: modemPrice * 100,
        },
        quantity: cart.qty,
    })

    items.push({
        price_data: {
            currency: 'usd',
            product_data: {
                name: "Envío",
                metadata: {
                    'wooId': '629'
                }
            },
            unit_amount: shippingFeePrice * 100,
        },
        quantity: 1,
    })

    items.push({
        price_data: {
            currency: 'usd',
            product_data: {
                name: "Depósito",
                metadata: {
                    'wooId': '790'
                }
            },
            unit_amount: depositPrice * 100,
        },
        quantity: 1,
    })

    if (cart.adapter.is) {
        items.push({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: "Adaptador",
                    metadata: {
                        'wooId': '434'
                    }
                },
                unit_amount: adapterPrice * 100,
            },
            quantity: 1,
        })
    }

    if (cart.powerBank.is) {
        items.push({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: "Power Bank",
                    metadata: {
                        'wooId': '435'
                    }
                },
                unit_amount: powerBankPrice * 100,
            },
            quantity: 1,
        })
    }

    const metadata = {
        'customerName': `${customer.name}`,
        'customerSurname': `${customer.surname}`,
        'customerEmail': `${customer.email}`,
        'customerPhone': `${customer.phone}`,
        'deliveryAddress': `${customer.deliveryAddress}`,
        'deliveryCp': `${customer.deliveryCp}`,
        'deliveryCity': `${customer.deliveryCity}`,
        'deliveryCountry': `${customer.deliveryCountry}`,
        'billingAddress': `${customer.billingAddress}`,
        'billingCp': `${customer.billingCp}`,
        'billingCity': `${customer.billingCity}`,
        'billingCountry': `${customer.billingCountry}`,
        'from': `${cart.from}`,
        'to': `${cart.to}`
    }


    const session = await stripe.checkout.sessions.create({
        success_url: 'https://rent-internet-app-v2.herokuapp.com/success',
        cancel_url: 'https://rent-internet-app-v2.herokuapp.com/cancel',
        // success_url: 'https://rent-internet.com/success',
        // cancel_url: 'https://rent-internet.com/cancel',
        mode: 'payment',
        line_items: items,
        metadata: metadata,
    });

    res.status(200).json({ id: session.id })
}

export default CreateStripeSession