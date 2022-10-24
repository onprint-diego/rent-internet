import { useState } from 'react'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { CheckoutButton } from '../../shared/CheckoutButton/CheckoutButton'
import { createCheckOutSession } from '../../../utils/createCheckoutSession'
import InputField from './InputField'
import {
    Form,
    FormSection,
    BillingSection,
    SectionTitle,
    CheckBox,
    Label,
    CheckBoxContainer,
    MethodSelectContainer,
    Method,
    MethodBox,
    CheckoutBtnContainer,
} from './Elements'

const CheckoutForm = ({ cart, setCart }) => {

    const router = useRouter()
    const [paymentMethod, setPaymentMethod] = useState(true) //true = card, false = bank
    const [disabledButton, setDisabledButton] = useState(false)
    const [billingNeeded, setBillingNeeded] = useState(false)

    const detailsTitle = 'Datos personales'
    const deliveryTitle = 'Datos de envío'
    const billingTitle = 'Datos de facturación'
    const buttonText = 'Rentar'

    const placeholderName = 'Nombre' //si es ingles 'Name', etc
    const placeholderSurname = 'Apellido'
    const placeholderEmail = 'Correo electrónico'
    const placeholderPhone = 'Celular'
    const placeholderAdd = 'Direccion'
    const placeholderCp = 'Código postal'
    const placeholderCity = 'Ciudad'
    const placeholderCountry = 'País'

    const cardMethodText = 'Tarjeta'
    const bankMethodText = 'Transferencia'

    const generalError = 'Obligatorio'
    const minGeneralError = 'Mínimo 2 caracteres'
    const maxGeneralError = 'Max 25 caracteres'
    const emailError = 'Debe ser un correo válido'
    const numGeneralError = 'Solo números'

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            phone: '',
            deliveryAddress: '',
            deliveryCp: '',
            deliveryCity: '',
            deliveryCountry: '',
            billingAddress: '',
            billingCp: '',
            billingCity: '',
            billingCountry: '',
        },
        validationSchema: Yup.object({
            // name: Yup.string().required(generalError).min(2, minGeneralError).max(20, maxGeneralError),
            // surname: Yup.string().required(generalError).min(2, minGeneralError).max(20, maxGeneralError),
            // email: Yup.string().email(emailError).required(generalError),
            // phone: Yup.number(numGeneralError).required(generalError),
            // deliveryAddress: Yup.string().required(generalError).min(2, minGeneralError).max(50, maxGeneralError),
            // deliveryCp: Yup.string().required(generalError).min(2, minGeneralError).max(20, maxGeneralError),
            // deliveryCity: Yup.string().required(generalError).min(2, minGeneralError).max(30, maxGeneralError),
            // deliveryCountry: Yup.string().required(generalError).min(2, minGeneralError).max(30, maxGeneralError),
            // billingAddress: Yup.string().min(2, minGeneralError).max(50, maxGeneralError),
            // billingCp: Yup.string().min(2, minGeneralError).max(20, maxGeneralError),
            // billingCity: Yup.string().min(2, minGeneralError).max(30, maxGeneralError),
            // billingCountry: Yup.string().min(2, minGeneralError).max(30, maxGeneralError),
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
                billingCountry: values.billingCountry, 
            }

            setCart({
                ...cart,
                customerDetails: customer,
            })

            setDisabledButton(true)

            paymentMethod ? 
            createCheckOutSession(cart, customer) :
            router.push('/bank-transfer')
        }
    })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <FormSection>
                <SectionTitle>{detailsTitle}</SectionTitle>
                <InputField
                    id="name"
                    name="name"
                    type="text"
                    value={formik.values.name}
                    event={formik.handleChange}
                    placeholder={placeholderName}
                    touched={formik.touched}
                    error={formik.errors.name}
                />
                <InputField
                    id="surname"
                    name="surname"
                    type="text"
                    value={formik.values.surname}
                    event={formik.handleChange}
                    placeholder={placeholderSurname}
                    touched={formik.touched}
                    error={formik.errors.surname}
                />
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
                <InputField
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formik.values.phone}
                    event={formik.handleChange}
                    placeholder={placeholderPhone}
                    touched={formik.touched}
                    error={formik.errors.phone}
                />
            </FormSection>
            <FormSection>
                <SectionTitle>{deliveryTitle}</SectionTitle>
                <InputField
                    id="deliveryAddress"
                    name="deliveryAddress"
                    type="text"
                    value={formik.values.deliveryAddress}
                    event={formik.handleChange}
                    placeholder={placeholderAdd}
                    touched={formik.touched}
                    error={formik.errors.deliveryAddress}
                />
                <InputField
                    id="deliveryCp"
                    name="deliveryCp"
                    type="text"
                    pattern="[0-9]*"
                    value={formik.values.deliveryCp}
                    event={formik.handleChange}
                    placeholder={placeholderCp}
                    touched={formik.touched}
                    error={formik.errors.deliveryCp}
                />
                <InputField
                    id="deliveryCity"
                    name="deliveryCity"
                    type="text"
                    value={formik.values.deliveryCity}
                    event={formik.handleChange}
                    placeholder={placeholderCity}
                    touched={formik.touched}
                    error={formik.errors.deliveryCity}
                />
                <InputField
                    id="deliveryCountry"
                    name="deliveryCountry"
                    type="text"
                    value={formik.values.deliveryCountry}
                    event={formik.handleChange}
                    placeholder={placeholderCountry}
                    touched={formik.touched}
                    error={formik.errors.deliveryCountry}
                />
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
                <SectionTitle>{billingTitle}</SectionTitle>
                <InputField
                    id="billingAddress"
                    name="billingAddress"
                    type="text"
                    value={formik.values.billingAddress || ''}
                    event={formik.handleChange}
                    placeholder={placeholderAdd}
                    touched={formik.touched}
                    error={formik.errors.billingAddress}
                />
                <InputField
                    id="billingCp"
                    name="billingCp"
                    type="text"
                    pattern="[0-9]*"
                    value={formik.values.billingCp || ''}
                    event={formik.handleChange}
                    placeholder={placeholderCp}
                    touched={formik.touched}
                    error={formik.errors.billingCp}
                />
                <InputField
                    id="billingCity"
                    name="billingCity"
                    type="text"
                    value={formik.values.billingCity || ''}
                    event={formik.handleChange}
                    placeholder={placeholderCity}
                    touched={formik.touched}
                    error={formik.errors.billingCity}
                />
                <InputField
                    id="billingCountry"
                    name="billingCountry"
                    type="text"
                    value={formik.values.billingCountry || ''}
                    event={formik.handleChange}
                    placeholder={placeholderCountry}
                    touched={formik.touched}
                    error={formik.errors.billingCountry}
                />
            </BillingSection>
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

export default CheckoutForm

/*
    const data = {
        payment_method_title: "Transferencia bancaria",
        status: 'pending',
    }
*/

// const data = {
//     payment_method: "bacs",
//     payment_method_title: "Direct Bank Transfer",
//     set_paid: true,
//     billing: {
//       first_name: "John",
//       last_name: "Doe",
//       address_1: "969 Market",
//       address_2: "",
//       city: "San Francisco",
//       state: "CA",
//       postcode: "94103",
//       country: "US",
//       email: "john.doe@example.com",
//       phone: "(555) 555-5555"
//     },
//     shipping: {
//       first_name: "John",
//       last_name: "Doe",
//       address_1: "969 Market",
//       address_2: "",
//       city: "San Francisco",
//       state: "CA",
//       postcode: "94103",
//       country: "US"
//     },
//     line_items: [
//       {
//         product_id: 93,
//         quantity: 2
//       },
//       {
//         product_id: 22,
//         variation_id: 23,
//         quantity: 1
//       }
//     ],
//     shipping_lines: [
//       {
//         method_id: "flat_rate",
//         method_title: "Flat Rate",
//         total: "10.00"
//       }
//     ]
//   };
  
//   WooCommerce.post("orders", data)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log(error.response.data);
//     });
  