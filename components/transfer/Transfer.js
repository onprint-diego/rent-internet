import { useState } from 'react'
import { ActionButton } from '../shared/ActionButton/ActionButton'
import { GetCartContext } from '../../context/CartContext'
import { CreateWooCommerceTransferOrder } from '../../pages/api/create-woo-transfer-order'
import { CreateWooCommerceTransferRechargeOrder } from '../../pages/api/create-woo-transfer-recharge-order'
import { httpsCallable } from 'firebase/functions'
import { cloudFunctions } from '../../utils/firebase'
import {
    ButtonContainer,
    Container,
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

    const placeOrder = () => {
        if (Object.entries(cart).length === 0) return console.log('No items in cart')
        setDisabledButton(true)

        if (cart.isRecharge) {
            CreateWooCommerceTransferRechargeOrder(cart)
                .then(res => {

                    sendCustomerRechargeTransferMail(res.data)
                    sendCompanyRechargeTransferMail(res.data)
                    setDisabledButton(false)
                    setOrderId(res.data.id)
                })
                .catch(err => console.log('Error setting order in Woocommerce', err))
        } else {
            CreateWooCommerceTransferOrder(cart)
                .then(res => {

                    sendCustomerBookingTransferMail(res.data)
                    sendCompanyBookingTransferMail(res.data)
                    setDisabledButton(false)
                    setOrderId(res.data.id)
                })
                .catch(() => console.log('Error setting order in Woocommerce'))
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
                                    ***Texto para transferencia.<br></br>
                                    Explica que la orden llega a la empresa una vez que da click al botón, pero no es efectiva hasta que no paga (queda pendiente). Inluir resumen de la reserva?
                                </> :
                                <>
                                    ***La orden fue recibida con éxito...<br></br>
                                    Número de orden (id) es {orderId}
                                </>
                        }
                    </Msj>
                    {
                        orderId === 0 &&
                        <ButtonContainer>
                            <ActionButton
                                type="Button"
                                event={placeOrder}
                                disabled={disabledButton}
                                text="Alquilar"
                            />
                        </ButtonContainer>
                    }
                </MsjContainer>
            </Inner>
        </Container>
    )
}

export default Transfer