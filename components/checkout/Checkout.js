import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { GetCartContext } from '../../context/CartContext'
import CheckoutForm from '../forms/CheckoutForm/CheckoutForm'
import { BuyButton } from '../shared/BuyButton/BuyButton';
import {
    CheckoutContainer,
    CheckoutInner,
    ConfirmButton,
    EmptyCart,
} from './Elements'
import CartDetails from './CartDetails/CartDetails';

const Checkout = () => {

    const { cart, setCart } = GetCartContext()
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
        .catch(err => console.log('Error creating checkout: ' + err))
    }

    const handleBankTransfer = () => {
        console.log('bank transfer')
    }

    console.log(cart)

    return (
        <CheckoutContainer>
            {
                Object.values(cart).length === 0 ?
                <EmptyCart>
                    <p>Cart is empty, nothing to checkout</p>
                </EmptyCart> :
                <CheckoutInner>
                    <CartDetails cart={cart} />
                    <CheckoutForm cart={cart} setCart={setCart} /> 
                    <BuyButton event={createCheckOutSession}>Pay with card</BuyButton>
                    <button onClick={handleBankTransfer}>Bank Transfer</button>
                </CheckoutInner>
            }
        </CheckoutContainer>
    )
}

export default Checkout