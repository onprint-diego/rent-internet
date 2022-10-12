import { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { createCheckOutSession } from '../../../utils/createCheckoutSession'
import {
    FormContainer,
    Form,
    FormSection,
    Input,
    MethodSelectContainer,
} from './Elements'

const CheckoutForm = ({ cart, setCart }) => {

    //If true, card, else bank transfer
    const [paymentMethod, setPaymentMethod] = useState(true)
    const [loader, setLoader] = useState(false)
    const [disabledButton, setDisabledButton] = useState(false)

    const placeholderName = 'Nombre' //si es ingles 'Name', etc
    const placeholderEmail = 'Correo electrónico'

    const handleInput = (e) => {
        setCart({
            ...cart,
            customerDetails: {
                ...cart.customerDetails,
                name: e.target.value,
            }
        })
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validationSchema: Yup.object({
            // name: Yup.string().required('Obligatorio'),
            // email: Yup.string().email('Debe ser un correo válido').required('Obligatorio')
        }),
        onSubmit: (values, { resetForm }) => {
            const customer = {
                name: values.name,
                email: values.email,
            }

            console.log(customer)

            setLoader(true)
            setDisabledButton(true)
            // sendMail(data, resetForm)
            //paymentMethod ? card method : bank transfer
            createCheckOutSession(cart, customer)
        }
    })

    return (
        <FormContainer>
            <Form onSubmit={formik.handleSubmit}>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder={placeholderName}
                />
                <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder={placeholderName}
                />
                <button type="submit">Rentar</button>
            </Form>
            <MethodSelectContainer>
                <input type="checkbox" onChange={() => setPaymentMethod(!paymentMethod)} />
            </MethodSelectContainer>
        </FormContainer>
    )
}

export default CheckoutForm