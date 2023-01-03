import { loadStripe } from '@stripe/stripe-js'
import { api } from './woocommerce'
import { httpsCallable } from 'firebase/functions'
import { cloudFunctions } from './firebase'

export const createCheckOutSession = async (cart) => {

    const stripePromise = loadStripe('pk_test_51LkAFuHieiQtj1QLE4R8QafLiQaeNYhlFxO0mcCOS6pbRkDlXJfAP01MxopRDHIIFYQBex9XM4XAeRncF36pJsx000o4CnQfe0')
    const stripeCreateCheckoutSession = httpsCallable(cloudFunctions, 'stripeCreateCheckoutSession')

    const redirect = async (id) => {
        const stripe = await stripePromise
        stripe.redirectToCheckout({ sessionId: id })
    }

    api.get("products")
        .then((res) => {

            if (res.status === 200) {
                if(cart.isRecharge) {
                    // createSession(res.data)
                } else {
                    const products = res.data
                    stripeCreateCheckoutSession({cart, products})
                    .then(res => redirect(res.data.id))
                    .catch(err => console.log(err.code, err.message, err.details))
                }
            }
        })
        .catch(err => console.log(err))
}
