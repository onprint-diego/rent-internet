import { useState, useEffect } from 'react'
import { api } from '../../services/wocommerce'
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
    // const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    const publishableKey = 'pk_test_51LkAFuHieiQtj1QLE4R8QafLiQaeNYhlFxO0mcCOS6pbRkDlXJfAP01MxopRDHIIFYQBex9XM4XAeRncF36pJsx000o4CnQfe0'

    const stripePromise = loadStripe(publishableKey);
    
    console.log(cart)

    const createCheckOutSession = async () => {
        // const stripe = await stripePromise;
        // const checkoutSession = await axios.post('/api/create-stripe-session', {
        //   item: cart,
        // })
        // const result = await stripe.redirectToCheckout({
        //   sessionId: checkoutSession.data.id,
        // })
        // if (result.error) {
        //     console.log('errrrrooooorrr') //////////////////////////////
        //     alert(result.error.message);
        // }
        /////////////////////////////////////////////////////////////////////////////

        // const checkoutSession = await axios.post('/api/create-stripe-session', {
        //     item: cart,
        // })
        // if(checkoutSession.error) alert(checkoutSession.error.message)
        // console.log(checkoutSession)


        /////////////////////////////////////////////////////////////////////////////////

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
        // .then(json => console.log(json))
        .catch(err => console.log(err))
      };

    // const getCartItem = () => {
    //     if(Object.values(cart).length !== 0) return null

    //     return cart.map(product => {
    //         console.log(product)
    //         return {
    //             id: product.id, qty: product.qty, amount: product.amount
    //         }
    //     })
    // }

    // //Set the order in WP WOO once payment was succesfull
    // const placeOrder = () => {
    //     setLoading(true)
    //     api.post("orders", order)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    //     .finally(() => setLoading(false)) //TODO And redirect!!!!!!! to successful or error page
    // }


    return (
        <FormContainer>
            <p>Total: ${cart.total}</p>
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