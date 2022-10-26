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

    const items = []
    items.push({
        price_data: {
            currency: 'usd',
            product_data: {
                name: modem.name,
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
            },
            unit_amount: shippingFeePrice * 100,
        },
        quantity: 1,
    })

    if(cart.adapter.is) {
        items.push({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: "Adaptador",
                },
                unit_amount: adapterPrice * 100,
            },
            quantity: 1,
        })
    }

    if(cart.powerBank.is) {
        items.push({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: "Power Bank",
                },
                unit_amount: powerBankPrice * 100,
            },
            quantity: 1,
        })
    }

    const session = await stripe.checkout.sessions.create({
        success_url: 'https://rent-internet.com/success',
        cancel_url: 'https://rent-internet.com/cancel',
        mode: 'payment',
        line_items: items,
        customer_details: {
            address: {
                city: 'a city',
                // line1: 'an address',
            },
        },
        metadata: {
            customerName: customer.name,
            customerSurname: customer.surname,
            customerEmail: customer.email,
            customerPhone: customer.phone,
            deliveryAddress: customer.deliveryAddress,
            deliveryCp: customer.deliveryCp,
            deliveryCity: customer.deliveryCity,
            deliveryCountry: customer.deliveryCountry,
            billingAddress: customer.billingAddress,
            billingCp: customer.billingCp,
            billingCity: customer.billingCity,
            billingCountry: customer.billingCountry,
            // items: items,
            //AGREGAR FROM Y TO DESDE EL CART PARA PASAR COMO METADATA
        }
    });

    res.json({ id: session.id })
}

export default CreateStripeSession