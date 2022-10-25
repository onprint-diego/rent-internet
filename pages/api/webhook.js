import { buffer } from 'micro'
import Stripe from 'stripe'
import { sendMail } from '../../utils/sendMail'
// import { setWooOrder } from '../../utils/setWooOrder'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const endpointSecret = 'whsec_4GZuTKO7MA0xd2WhAmDiwlHSWl5R9AfB'
// const endpointSecret = 'whsec_a6d2c13640b5415b7f8a03b7d1deef1eead64b331f6d0b61024e72f5038777f3'

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

        let event

        try {
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
        } catch (err) {
            console.log('Error', err.message)
            return res.status(400).send(`Webhook error: ${err.message}`)
        }

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object
            sendMail(session)
            // setWooOrder(session)
            // const clientSecret = session.id
            // stripe.checkout.sessions.listLineItems(clientSecret) //Check bottom for structure of response object
            // .then( res => {
            //     products = res.data
            //     sendConfirmationMail(session, products)
            //     setOrderInWoo(session, products)
            // })
        }
    }
}

//Response Object for listLineItems
/*
{
  "object": "list",
  "url": "/v1/checkout/sessions/cs_test_a1ccs8sV5Z5tVjD6kSnnkjVP64WFgdzda9rxlDvvNXVfX6a45euhrAmOXj/line_items",
  "has_more": false,
  "data": [
    {
      "id": "li_1LsFRo2wqvxfBLhLnGXqlOim",
      "object": "item",
      "amount_discount": 0,
      "amount_subtotal": 0,
      "amount_tax": 0,
      "amount_total": 0,
      "currency": "chf",
      "description": "test product",
      "price": {
        "id": "price_1KdKDX2wqvxfBLhLd92Pz31t",
        "object": "price",
        "active": true,
        "billing_scheme": "per_unit",
        "created": 1647288611,
        "currency": "chf",
        "custom_unit_amount": null,
        "livemode": false,
        "lookup_key": null,
        "metadata": {},
        "nickname": null,
        "product": "prod_LJy9hMFV56fFUV",
        "recurring": null,
        "tax_behavior": "unspecified",
        "tiers_mode": null,
        "transform_quantity": null,
        "type": "one_time",
        "unit_amount": 1200,
        "unit_amount_decimal": "1200"
      },
      "quantity": 1
    },
    {...},
    {...}
  ]
}
*/