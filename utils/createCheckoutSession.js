import { loadStripe } from '@stripe/stripe-js'
import { api } from './woocommerce'

export const createCheckOutSession = async (cart, customer) => {

    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

    const stripePromise = loadStripe(publishableKey)

    const redirect = async (id) => {
        const stripe = await stripePromise
        stripe.redirectToCheckout({ sessionId: id })
    }

    const createSession = (products) => {
        fetch('/api/create-stripe-session', {
            method: "POST",
            body: JSON.stringify({ cart: cart, products: products }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(res => res.json())
            .then(json => redirect(json.id))
            .catch(err => console.log('Error creating checkout: ' + err))
    }

    api.get("products")
    .then((res) => {
      if (res.status === 200) {
        createSession(res.data)
      }
    })
    .catch(err => console.log(err))
}
