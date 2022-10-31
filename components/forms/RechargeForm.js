import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { CheckoutButton } from '../shared/CheckoutButton/CheckoutButton'
import { createCheckOutSession } from '../../utils/createCheckoutSession'
import InputField from './InputField'
import {
    Form,
    FormSection,
    MethodSelectContainer,
    Method,
    MethodBox,
    RechargeMethodBox,
    CheckoutBtnContainer,
    LabelText,
} from './Elements'

const RechargeForm = ({ cart, setCart, data }) => {

    const router = useRouter()
    const [shift, setShift] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState(true)
    const [disabledButton, setDisabledButton] = useState(false)

    const buttonText = 'Recargar'
    const cardMethodText = 'Tarjeta'
    const bankMethodText = 'Transferencia'
    const placeholderEmail = 'Correo electrónico'
    const generalError = 'Obligatorio'
    const emailError = 'Debe ser un correo válido'

    const formik = useFormik({
        initialValues: {
            email: 'diegoeliseoiovane@gmail.com',
        },
        validationSchema: Yup.object({
            email: Yup.string().email(emailError).required(generalError),
        }),
        onSubmit: (values) => {
            const customer = {
                email: values.email,
            }

            const tempCart = {
                ...cart, 
                customerDetails: customer, 
                isRecharge: true
            }

            setCart({
                ...cart,
                customerDetails: customer,
                isRecharge: true,
            })

            setDisabledButton(true)

            paymentMethod ? 
            createCheckOutSession(tempCart) :
            router.push('/bank-transfer')
        }
    })

    useEffect(() => {
        setCart({ product: data.smallProduct})
    }, [])

    const handleClick = (e) => {

        if(e.target.getAttribute('value') === data.largeProduct.id.toString()) {
            setCart({ product: data.largeProduct}) 
            setShift(!shift)
        } else {
            setCart({ product: data.smallProduct}) 
            setShift(!shift)
        }
    }

    return (
        <Form onSubmit={formik.handleSubmit}>
            <FormSection>
                <LabelText>Ingrese el correo con el que ha alquilado su módem</LabelText>
                <InputField
                    id="email"
                    name="email"
                    type="email"
                    value={formik.values.email}
                    event={formik.handleChange}
                    placeholder={placeholderEmail}
                    touched={formik.touched}
                    error={formik.errors.email}
                />
            </FormSection>
            <LabelText>Seleccione la cantidad de GB para recargar</LabelText>
            <MethodSelectContainer>
                <RechargeMethodBox shift={shift} />
                <Method onClick={handleClick} value={data.smallProduct.id}>25GB</Method> 
                <Method onClick={handleClick} value={data.largeProduct.id}>50GB</Method>
            </MethodSelectContainer>
            <LabelText>Seleccione el método de pago</LabelText>
            <MethodSelectContainer>
                <MethodBox paymentMethod={paymentMethod} />
                <Method onClick={() => setPaymentMethod(true)}>{cardMethodText}</Method>
                <Method onClick={() => setPaymentMethod(false)}>{bankMethodText}</Method>
            </MethodSelectContainer>
            <CheckoutBtnContainer>
                <CheckoutButton
                    type="submit"
                    disabled={disabledButton}
                    text={buttonText}
                />
            </CheckoutBtnContainer>
        </Form>
    )
}

export default RechargeForm