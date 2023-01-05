import { useState } from 'react'
import { ActionButton } from '../shared/ActionButton/ActionButton'
import { PrimaryButton } from '../shared/PrimaryButton/PrimaryButton'
import { GetCartContext } from '../../context/CartContext'
import { httpsCallable } from 'firebase/functions'
import { cloudFunctions } from '../../utils/firebase'
import {
    Body,
    ButtonContainer,
    Container,
    Head,
    Inner,
    Msj,
    MsjContainer,
} from './Elements'


const Transfer = () => {

    const { cart } = GetCartContext()
    const [disabledButton, setDisabledButton] = useState(false)
    const [orderId, setOrderId] = useState(0)
    const sendCustomerRechargeTransferMail = httpsCallable(cloudFunctions, 'sendCustomerRechargeTransferMail')
    const sendCompanyRechargeTransferMail = httpsCallable(cloudFunctions, 'sendCompanyRechargeTransferMail')
    const sendCustomerBookingTransferMail = httpsCallable(cloudFunctions, 'sendCustomerBookingTransferMail')
    const sendCompanyBookingTransferMail = httpsCallable(cloudFunctions, 'sendCompanyBookingTransferMail')
    const createWooCommerceRechargeTransferOrder = httpsCallable(cloudFunctions, 'createWooCommerceRechargeTransferOrder')
    const createWooOrder = httpsCallable(cloudFunctions, 'createWooOrder')

    const placeOrder = () => {
        if (Object.entries(cart).length === 0) return console.log('No items in cart')
        setDisabledButton(true)

        if (cart.isRecharge) {
            createWooCommerceRechargeTransferOrder(cart)
                .then(res => {
                    sendCustomerRechargeTransferMail(res.data.res)
                    sendCompanyRechargeTransferMail(res.data.res)
                    setDisabledButton(false)
                    setOrderId(res.data.res.id)
                })
                .catch(err => console.log(err))
        } else {
            createWooOrder(cart)
                .then(res => {
                    sendCustomerBookingTransferMail(res.data.res)
                    sendCompanyBookingTransferMail(res.data.res)
                    setDisabledButton(false)
                    setOrderId(res.data.res.id)
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <Container>
            <Inner>
                <MsjContainer>
                    <Msj>
                        {
                            orderId === 0 ?
                                <>
                                    <Body>
                                        Las transferencias bancarias pueden tardar hasta 48 horas hábiles. Nos  pondremos en contacto con usted a la brevedad vía correo electrónico una vez efectuada la transferencia.
                                    </Body>
                                </>
                                :
                                <>
                                    <Head>Orden #{orderId}</Head>
                                    <Body>
                                        Su orden #{orderId} ha sido procesada con éxito. A la brevedad, recibirá en su correo electrónico el proceso detallado para realizar el pago a través de Transferencia bancaria. Muchas gracias por elegir Rent Internet.
                                    </Body>
                                </>
                        }
                    </Msj>
                    <ButtonContainer>
                        {
                            orderId === 0 ?
                                <ActionButton
                                    type="Button"
                                    event={placeOrder}
                                    disabled={disabledButton}
                                    text="Alquilar"
                                /> :
                                <PrimaryButton to='/'>
                                    Volver
                                </PrimaryButton>
                        }
                    </ButtonContainer>
                </MsjContainer>
            </Inner>
        </Container>
    )
}

export default Transfer