import { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { createCheckOutSession } from '../../../utils/createCheckoutSession'
import {
    FormContainer,
    Form,
    FormSection,
    BillingSection,
    SectionTitle,
    Input,
    InputContainer,
    CheckBox,
    Label,
    CheckBoxContainer,
    MethodSelectContainer,
    Method,
    MethodBox,
} from './Elements'

const CheckoutForm = ({ cart, setCart }) => {

    const [paymentMethod, setPaymentMethod] = useState(true) //true = card, false = bank
    const [loader, setLoader] = useState(false)
    const [disabledButton, setDisabledButton] = useState(false)
    const [billingNeeded, setBillingNeeded] = useState(false)

    const placeholderName = 'Nombre' //si es ingles 'Name', etc
    const placeholderSurname = 'Apellido'
    const placeholderEmail = 'Correo electrónico'
    const placeholderPhone = 'Celular'
    const placeholderAdd = 'Direccion'
    const placeholderCp = 'Código postal'
    const placeholderCity = 'Ciudad'
    const placeholderCountry = 'País'
    const generalError = 'Obligatorio'
    const emailError = 'Debe ser un correo válido'

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required(generalError),
            email: Yup.string().email(emailError).required(generalError)
        }),
        onSubmit: (values) => {
            const customer = {
                name: values.name,
                surname: values.surname,
                email: values.email,
                phone: values.phone,
                deliveryAddress: values.deliveryAddress,
                deliveryCp: values.deliveryCp,
                deliveryCity: values.deliveryCity,
                deliveryCountry: values.deliveryCountry,
                billingAddress: values.billingAddress,
                billingCp: values.billingCp,
                billingCity: values.billingCity,
                billlingCountry: values.billlingCountry,
                // language: en or es // pasar  como variable el idioma para que en sendMail pueda armar el idiom 
            }

            console.log(customer)

            setLoader(true)
            setDisabledButton(true)
            //paymentMethod ? card method : bank transfer

            createCheckOutSession(cart, customer)
        }
    })

    return (
        <FormContainer>
            <Form onSubmit={formik.handleSubmit}>
                <FormSection>
                    <SectionTitle>Datos personales</SectionTitle>
                    <InputContainer>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            placeholder={placeholderName}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            id="surname"
                            name="surname"
                            type="text"
                            value={formik.values.surname}
                            onChange={formik.handleChange}
                            placeholder={placeholderSurname}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder={placeholderEmail}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            placeholder={placeholderPhone}
                        />
                    </InputContainer>
                </FormSection>
                <FormSection billingNeeded={billingNeeded}>
                    <SectionTitle>Envío</SectionTitle>
                    <InputContainer>
                        <Input
                            id="deliveryAddress"
                            name="deliveryAddress"
                            type="text"
                            value={formik.values.deliveryAddress}
                            onChange={formik.handleChange}
                            placeholder={placeholderAdd}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            id="deliveryCp"
                            name="deliveryCp"
                            type="text"
                            pattern="[0-9]*"
                            value={formik.values.deliveryCp}
                            onChange={formik.handleChange}
                            placeholder={placeholderCp}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            id="deliveryCity"
                            name="deliveryCity"
                            type="text"
                            value={formik.values.deliveryCity}
                            onChange={formik.handleChange}
                            placeholder={placeholderCity}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            id="deliveryCountry"
                            name="deliveryCountry"
                            type="text"
                            value={formik.values.deliveryCountry}
                            onChange={formik.handleChange}
                            placeholder={placeholderCountry}
                        />
                    </InputContainer>
                </FormSection>
                <CheckBoxContainer>
                    <CheckBox
                        type="checkbox"
                        id="billing"
                        name="billing"
                        value="billing"
                        onChange={() => setBillingNeeded(!billingNeeded)}
                    />
                    <Label htmlFor="billing">Billing address different</Label>
                </CheckBoxContainer>
                <BillingSection billingNeeded={billingNeeded}>
                    <SectionTitle>Facturación</SectionTitle>
                    <InputContainer>
                        <Input
                            id="billingAddress"
                            name="billingAddress"
                            type="text"
                            value={formik.values.billingAddress}
                            onChange={formik.handleChange}
                            placeholder={placeholderAdd}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            id="billingCp"
                            name="billingCp"
                            type="text"
                            pattern="[0-9]*"
                            value={formik.values.billingCp}
                            onChange={formik.handleChange}
                            placeholder={placeholderCp}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            id="billingCity"
                            name="billingCity"
                            type="text"
                            value={formik.values.billingCity}
                            onChange={formik.handleChange}
                            placeholder={placeholderCity}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            id="billlingCountry"
                            name="billlingCountry"
                            type="text"
                            value={formik.values.billlingCountry}
                            onChange={formik.handleChange}
                            placeholder={placeholderCountry}
                        />
                    </InputContainer>
                </BillingSection>
                <MethodSelectContainer>
                    <MethodBox paymentMethod={paymentMethod} />
                    <Method onClick={() => setPaymentMethod(true)}>Card</Method>   
                    <Method onClick={() => setPaymentMethod(false)}>Bank transfer</Method>
                </MethodSelectContainer>
                <button
                    type="submit"
                    disabled={disabledButton}
                >
                    {
                        loader ?
                            'loading...' :
                            'Rentar'
                    }
                </button>
            </Form>
        </FormContainer>
    )
}

export default CheckoutForm