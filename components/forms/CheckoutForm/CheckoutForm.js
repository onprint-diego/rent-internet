import { useState } from 'react'
import {
    FormContainer,
    Input,
} from './Elements'

const CheckoutForm = ({ cart, setCart }) => {

    const placeholderName = 'Nombre' //si es infles 'Name', etc

    const handleInput = (e) => {
        setCart({
            ...cart,
            customerDetails: {
                ...cart.customerDetails,
                name: e.target.value,
            }
        })
    }

    return (
        <FormContainer>
            <Input name="name" type="text" placeholder={placeholderName} onChange={handleInput} />
            <Input name="surname" type="text" placeholder={placeholderName} onChange={handleInput} />
            <Input name="billing_address" type="text" placeholder={placeholderName} onChange={handleInput} />
            <Input name="city" type="text" placeholder={placeholderName} onChange={handleInput} />
            <Input name="post_code" type="number" placeholder={placeholderName} onChange={handleInput} />
            <Input name="country" type="text" placeholder={placeholderName} onChange={handleInput} />
            <Input name="shipping_address" type="text" placeholder={placeholderName} onChange={handleInput} />
            <Input name="city" type="text" placeholder={placeholderName} onChange={handleInput} />
            <Input name="shipping_post_code" type="text" placeholder={placeholderName} onChange={handleInput} />
            <Input name="country" type="text" placeholder={placeholderName} onChange={handleInput} />
        </FormContainer>
    )
}

export default CheckoutForm