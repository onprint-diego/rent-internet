const functions = require("firebase-functions")
const sgMail = require("@sendgrid/mail")

///////////////////////////////////////////////////////
//CUSTOMER RECHARGE TRANSFER MAIL//////////////////////
//////////////////////////////////////////////////////
exports.sendCustomerRechargeTransferMail = functions.https.onCall(async (data, context) => {
    sgMail.setApiKey(functions.config().sendgrid.key)
    const to = data.billing.email
    const email = 'orders@rent-internet.com'
    const name = 'Rent Internet'
    const subject = 'Confirmación de recarga de módem Rent Internet'

    const html = `
            <div style="width: 75%;background-color: #f7f7f7;padding-bottom: 10rem;margin: 0 auto;border-radius: 4px; overflow: hidden;">
            <div style="background-color: #ffffff;width: 90%;max-width: 550px;margin: 0 auto;border-radius: 3px;border;1px solid #e0e0e0;overflow: hidden;">
            <div style="background-color: #1966d1;padding: 2rem;color: #ffffff;">
                <h1>Gracias por su compra</h1>
            </div>
            <div style="padding: 2rem;">
                <p>Hemos recibido tu orden de recarga. El número de orden es:</p>
                <p style="text-align: center;font-size: 4rem;font-weight: bold;margin: 2rem 0;color: #1966d1;">${data.id}</p>
                <table style="border-collapse: collapse;border-spacing: 0;margin-top: 1rem;width: 95%;border-radius: 4px;">
                    <thead style="background-color: #dfdfe2;">
                        <tr>
                            <th style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">Producto</th>
                            <th style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">Cantidad</th>
                            <th style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">${data.line_items[0].name}</td>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">${data.line_items[0].quantity}</td>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">USD ${data.line_items[0].total}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;" colspan="2">Total</td>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">USD ${data.total}</td>
                        </tr>
                    </tbody>
                </table>
                <div style="margin-top: 2rem;">
                    <p style="font-weight: bold;">Método de pago</p>
                    <p>${data.payment_method}</p>
                </div>
            </div>
            <div id="footer>
            </div>
            </div>
        </div>
    `

    const msg = {
        to: to,
        from: email,
        subject,
        name: name,
        html: html,
    };

    try {
        await sgMail.send(msg);
        return
    } catch (error) {
        return error
    }
})


///////////////////////////////////////////////////////
//COMPANY RECHARGE TRANSFER MAIL//////////////////////
//////////////////////////////////////////////////////
exports.sendCompanyRechargeTransferMail = functions.https.onCall(async (data, context) => {
    sgMail.setApiKey(functions.config().sendgrid.key)
    const to = 'orders@rent-internet.com'
    const email = 'orders@rent-internet.com'
    const name = 'Rent Internet'
    const subject = 'Confirmación de recarga de módem Rent Internet'

    const html = `
            <div style="width: 75%;background-color: #f7f7f7;padding-bottom: 10rem;margin: 0 auto;border-radius: 4px; overflow: hidden;">
            <div style="background-color: #ffffff;width: 90%;max-width: 550px;margin: 0 auto;border-radius: 3px;border;1px solid #e0e0e0;overflow: hidden;">
            <div style="background-color: #1966d1;padding: 2rem;color: #ffffff;">
                <h1>Nueva recarga</h1>
            </div>
            <div style="padding: 2rem;">
                <p>El número de orden es:</p>
                <p style="text-align: center;font-size: 4rem;font-weight: bold;margin: 2rem 0;color: #1966d1;">${data.id}</p>
                <table style="border-collapse: collapse;border-spacing: 0;margin-top: 1rem;width: 95%;border-radius: 4px;">
                    <thead style="background-color: #dfdfe2;">
                        <tr>
                            <th style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">Producto</th>
                            <th style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">Cantidad</th>
                            <th style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">${data.line_items[0].name}</td>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">${data.line_items[0].quantity}</td>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">USD ${data.line_items[0].total}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;" colspan="2">Total</td>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">USD ${data.total}</td>
                        </tr>
                    </tbody>
                </table>
                <div style="margin-top: 2rem;">
                    <p style="font-weight: bold;">Método de pago</p>
                    <p>${data.payment_method}</p>
                </div>
            </div>
            <div id="footer>
            </div>
            </div>
        </div>
    `

    const msg = {
        to: to,
        from: email,
        subject,
        name: name,
        html: html,
    };

    try {
        await sgMail.send(msg);
        return
    } catch (error) {
        return error
    }
})


///////////////////////////////////////////////////////
//CUSTOMER BOOKING TRANSFER MAIL//////////////////////
//////////////////////////////////////////////////////
exports.sendCustomerBookingTransferMail = functions.https.onCall(async (data, context) => {
    sgMail.setApiKey(functions.config().sendgrid.key)
    const to = data.billing.email
    const email = 'orders@rent-internet.com'
    const name = 'Rent Internet'
    const subject = 'Confirmación de recarga de módem Rent Internet'

    const htmlItemsList = data.line_items.map(item => `<tr><td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">${item.name}</td><td style="border: 1px solid #dfdfe2;text-align: center;padding: 1rem;">${item.quantity}</td><td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">USD ${item.total}</td>`).join('</tr>')

    const html = `
        <div style="width: 75%;background-color: #f7f7f7;padding-bottom: 10rem;margin: 0 auto;border-radius: 4px; overflow: hidden;">
            <div style="background-color: #ffffff;width: 90%;max-width: 550px;margin: 0 auto;border-radius: 3px;border;1px solid #e0e0e0;overflow: hidden;">
            <div style="background-color: #1966d1;padding: 2rem;color: #ffffff;">
                <h1>Gracias por su reserva</h1>
            </div>
            <div style="padding: 2rem;">
                <p>Hemos recibido tu orden de reserva. El número de orden es:</p>
                <p style="text-align: center;font-size: 4rem;font-weight: bold;margin: 2rem 0;color: #1966d1;">${data.id}</p>
                <table style="border-collapse: collapse;border-spacing: 0;margin-top: 1rem;width: 95%;border-radius: 4px;">
                    <thead style="background-color: #dfdfe2;">
                        <tr>
                            <th style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">Producto</th>
                            <th style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">Cantidad</th>
                            <th style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${htmlItemsList}
                        <tr>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;" colspan="3">${data.shipping.address_1}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;" colspan="2">Total</td>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">USD ${data.total}</td>
                        </tr>
                    </tbody>
                </table>
                <div style="margin-top: 2rem;">
                    <p style="font-weight: bold;">Método de pago</p>
                    <p>${data.payment_method}</p>
                </div>
                <div style="margin-top: 2rem;">
                    <p style="font-weight: bold;">Dirección de envío</p>
                    <p>${data.shipping.address_2}, CP${data.shipping.postcode}, ${data.shipping.city}, ${data.shipping.country} </p>
                </div>
            </div>
            <div id="footer>
            </div>
            </div>
        </div>
    `

    const msg = {
        to: to,
        from: email,
        subject,
        name: name,
        html: html,
    };

    try {
        await sgMail.send(msg);
        return
    } catch (error) {
        return error
    }
})

///////////////////////////////////////////////////////
//COMPANY BOOKING TRANSFER MAIL///////////////////////
//////////////////////////////////////////////////////
exports.sendCompanyBookingTransferMail = functions.https.onCall(async (data, context) => {
    sgMail.setApiKey(functions.config().sendgrid.key)
    const to = 'orders@rent-internet.com'
    const email = 'orders@rent-internet.com'
    const name = 'Rent Internet'
    const subject = 'Confirmación de recarga de módem Rent Internet'

    const htmlItemsList = data.line_items.map(item => `<tr><td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">${item.name}</td><td style="border: 1px solid #dfdfe2;text-align: center;padding: 1rem;">${item.quantity}</td><td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">USD ${item.total}</td>`).join('</tr>')

    const html = `
        <div style="width: 75%;background-color: #f7f7f7;padding-bottom: 10rem;margin: 0 auto;border-radius: 4px; overflow: hidden;">
            <div style="background-color: #ffffff;width: 90%;max-width: 550px;margin: 0 auto;border-radius: 3px;border;1px solid #e0e0e0;overflow: hidden;">
            <div style="background-color: #1966d1;padding: 2rem;color: #ffffff;">
                <h1>Nueva reserva</h1>
            </div>
            <div style="padding: 2rem;">
                <p>El número de orden es:</p>
                <p style="text-align: center;font-size: 4rem;font-weight: bold;margin: 2rem 0;color: #1966d1;">${data.id}</p>
                <table style="border-collapse: collapse;border-spacing: 0;margin-top: 1rem;width: 95%;border-radius: 4px;">
                    <thead style="background-color: #dfdfe2;">
                        <tr>
                            <th style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">Producto</th>
                            <th style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">Cantidad</th>
                            <th style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${htmlItemsList}
                        <tr>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;" colspan="3">${data.shipping.address_1}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;" colspan="2">Total</td>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">USD ${data.total}</td>
                        </tr>
                    </tbody>
                </table>
                <div style="margin-top: 2rem;">
                    <p style="font-weight: bold;">Método de pago</p>
                    <p>${data.payment_method}</p>
                </div>
                <div style="margin-top: 2rem;">
                    <p style="font-weight: bold;">Dirección de envío</p>
                    <p>${data.shipping.address_2}, CP${data.shipping.postcode}, ${data.shipping.city}, ${data.shipping.country} </p>
                </div>
            </div>
            <div id="footer>
            </div>
            </div>
        </div>
    `

    const msg = {
        to: to,
        from: email,
        subject,
        name: name,
        html: html,
    };

    try {
        await sgMail.send(msg);
        return
    } catch (error) {
        return error
    }
})


///////////////////////////////////////////////////////
//CREATE STRIPE CHECKOUT SESSION///////////////////////
//////////////////////////////////////////////////////
exports.stripeCreateCheckoutSession = functions.https.onCall(async (data, context) => {
    // firebase functions:config:set stripe.test.key = ...
    // firebase functions:config:set stripe.prod.key = ...

    const stripe = require("stripe")(functions.config().stripe.test.key)
    const { cart, products } = data

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
        success_url: 'https://rent-internet.com/',
        cancel_url: 'https://rent-internet.com/',
        mode: 'payment',
        line_items: items,
        metadata: metadata,
    })

    return {
        id: session.id
    }
})

///////////////////////////////////////////////////////
//CREATE STRIPE CHECKOUT SESSION///////////////////////
//////////////////////////////////////////////////////
exports.checkoutWebhook = functions.https.onRequest(async (request, response) => {

    // const sgMail = require("@sendgrid/mail")
    const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api")
    const stripe = require("stripe")(functions.config().stripe.test.key)
    const endpointSecret = functions.config().stripe.webhooks.checkout
    let sig = request.headers["stripe-signature"];
    let event

    const api = new WooCommerceRestApi({
        url: "https://db.rent-internet.com",
        consumerKey: "ck_017b4787d243489633c45153b29a045418a17c3a",
        consumerSecret: "cs_fdaedbaaeaf92e273946236cef7f011bf56335d7",
        version: "wc/v3",
        queryStringAuth: true,
        axiosConfig: {
            headers: { 'Content-Type': 'application/json' },
        }
    })

    try {
        event = stripe.webhooks.constructEvent(request.rawBody, sig, endpointSecret);
    } catch (err) {
        return response.status(400).end();
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object
        const clientSecret = session.id


        //WRITE WOO ORDER
        const dummyOrder = {
            payment_method: "Pago con tarjeta de crédito",
            payment_method_title: "Pago con tarjeta de crédito",
            set_paid: true,
            email: orderDetails.customerEmail,
            billing: {
                first_name: orderDetails.customerEmail,
                email: orderDetails.customerEmail,
            },
            line_items: [{
                quantity: 1,
                product_id: 432,
            }]
        }

        try {
            wooOrderId = await api.post("orders", dummyOrder)
            res.status(200).json({ message: 'Order placed in Woocommerce' })
        } catch (error) {
            res.json({ message: 'Error setting woo order' })
        }




        // //SEND MAIL
        const html = `
            <div>hola</div>
        `

        const msg = {
            to: 'diegoeliseoiovane@gmail.com',
            from: 'orders@rent-internet.com',
            subject: 'Confirmación de reserva de módem - Rent Internet',
            html: html,
        }

        try {
            await sgMail.send(msg);
            res.status(200).json({ message: 'Email has been sent' })
        } catch (error) {
            res.status(500).json({ error: 'Error sending email' })
        }
    }

})