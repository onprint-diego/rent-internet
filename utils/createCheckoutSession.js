import { loadStripe } from '@stripe/stripe-js'
import { api } from './woocommerce'

export const createCheckOutSession = async (cart) => {

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

    const redirect = async (id) => {
        const stripe = await stripePromise
        stripe.redirectToCheckout({ sessionId: id })
    }

    const createSession = (products, url) => {
        fetch(`/api/${url}`, {
            method: "POST",
            body: JSON.stringify({ cart: cart, products: products }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(res => res.json())
            .then(json => redirect(json.id))
            .catch(err => console.log('Error creating checkout session: ' + err))
    }

    //Better to get products within the api call?
    api.get("products")
        .then((res) => {
            if (res.status === 200) {
                if(cart.isRecharge) {
                    createSession(res.data, 'create-stripe-recharge-session')
                } else {
                    createSession(res.data, 'create-stripe-session')
                }
            }
        })
        .catch(err => console.log(err))
}
