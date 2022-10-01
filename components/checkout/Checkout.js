import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { GetCartContext } from '../../context/CartContext'
import CheckoutForm from '../forms/CheckoutForm/CheckoutForm'
import {
    FormContainer,
    Input,
    ConfirmButton,
} from './Elements'

const Checkout = () => {

    const { cart } = GetCartContext()
    const [ order, setOrder ] = useState({})
    const [ loading, setLoading ] = useState(false)
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

    const stripePromise = loadStripe(publishableKey)

    const createCheckOutSession = async () => {

        const redirect = async (id) => {
            const stripe = await stripePromise
            stripe.redirectToCheckout({sessionId: id})
        }

        fetch('/api/create-stripe-session', {
            method: "POST",
            body: JSON.stringify({item: cart}),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(res => res.json())
        .then(json => redirect(json.id))
        .catch(err => console.log(err))
    }

    return (
        <FormContainer>
            <p>Dates: From {cart.from} to {cart.to}</p>
            <p>Subtotal: u$s{cart.subtotal}</p>
            <p>Shipping Fee: u$s{cart.shippingFee}</p>
            <p>Total: u$s{cart.total}</p>
            {
                //if cart is empty and enter chekout
                Object.values(cart).length === 0 ? 
                <p>Cart is empty, nothing to checkout</p> :
                <CheckoutForm setOrder={setOrder} /> 
            }
            {
                loading &&
                'loading...'
                // <>
                //     <Input />
                //     <ConfirmButton onClick={placeOrder}>Rent</ConfirmButton>
                // </>
            }
            <button onClick={createCheckOutSession}>Rent</button>
        </FormContainer>
    )
}

export default Checkout