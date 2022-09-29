import { useState, useEffect } from 'react'
import { api } from '../../../services/wocommerce'
import { GetCartContext } from '../../../context/CartContext'
import CardForm from './CardForm'
import {
    FormContainer,
    Input,
    ConfirmButton,
} from './Elements'

// import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const CheckoutForm = () => {

    const { cart } = GetCartContext()
    const [ msg, setMsg ] = useState(false)
    const [ order, setOrder ] = useState({})
    const [ loading, setLoading ] = useState(false)

    // console.log(cart)

    useEffect(() => {
        //If Cart is empty and get into checkout validation
        Object.values(cart).length !== 0 ? 
        rent() :
        setMsg(true)
    }, [])


    //Prepare the order Object
    const rent = () => {
        setOrder({
            payment_method: "bacs",
            payment_method_title: "Direct Bank Transfer",
            // set_paid: ,
            status: 'completed', //can be 'pending' if payment failed
            billing: {
                first_name: "John",
                last_name: "Doe",
                address_1: "969 Market",
                address_2: "",
                city: "San Francisco",
                state: "CA",
                postcode: "94103",
                country: "US",
                email: "john.doe@example.com",
                phone: "(555) 555-5555"
            },
            shipping: {
                first_name: "John",
                last_name: "Doe",
                address_1: "969 Market",
                address_2: "",
                city: "San Francisco",
                state: "CA",
                postcode: "94103",
                country: "US"
            },
            line_items: [
                {
                product_id: cart.id,
                quantity: cart.qty, // Depends on the quantity of days
                }
            ],
            shipping_lines: [
                {
                method_id: "flat_rate",
                method_title: "Flat Rate",
                total: "10.00"
                }
            ]
        })
    } 


    //Set the order once payment was succesfull
    const placeOrder = () => {
        setLoading(true)
        api.post("orders", order)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .finally(() => setLoading(false)) //TODO And redirect!!!!!!! to successful or error page
    }
    

    const stripePromise = loadStripe(
        // `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
        'pk_test_51LkAFuHieiQtj1QLE4R8QafLiQaeNYhlFxO0mcCOS6pbRkDlXJfAP01MxopRDHIIFYQBex9XM4XAeRncF36pJsx000o4CnQfe0'
      );


    return (
        <FormContainer>
            {
                msg && <p>Cart is empty, nothing to checkout</p>
            }
            {
                loading &&
                'loading...'
                // <>
                //     <Input />
                //     <ConfirmButton onClick={placeOrder}>Rent</ConfirmButton>
                // </>
            }
            {/* <Elements stripe={stripePromise}>
            </Elements> */}
            <CardForm productData={cart}/>
        </FormContainer>
    )
}

export default CheckoutForm