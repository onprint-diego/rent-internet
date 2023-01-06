import { loadStripe } from '@stripe/stripe-js'
import { api } from './woocommerce'
import { httpsCallable } from 'firebase/functions'
import { cloudFunctions } from './firebase'

export const createCheckOutSession = async (cart) => {

    const stripePromise = loadStripe('pk_live_51LkAFuHieiQtj1QLF7IM4FcsVVx7TvNf24wArWXnnHbAwVr77UKiGTBXjf08s3jbpSqiVPzEOcVliE7B7dIMIrVP00HN76W3RX')
    const stripeCreateCheckoutSession = httpsCallable(cloudFunctions, 'stripeCreateCheckoutSession')
    const stripeCreateRechargeCheckoutSession = httpsCallable(cloudFunctions, 'stripeCreateRechargeCheckoutSession')

    const redirect = async (id) => {
        const stripe = await stripePromise
        stripe.redirectToCheckout({ sessionId: id })
    }

    console.log(cart)

    api.get("products")
        .then((res) => {

            if (res.status === 200) {
                if(cart.isRecharge) {
                    stripeCreateRechargeCheckoutSession({cart})
                    .then(res => redirect(res.data.id))
                    .catch(err => console.log(err.code, err.message, err.details))
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
