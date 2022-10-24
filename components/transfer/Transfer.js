import { PrimaryButtonAction } from '../shared/PrimaryButton/PrimaryButton'
import { GetCartContext } from '../../context/CartContext'
// import { createTransferOrder } from '../../utils/createTransferOrder'
import { CreateWooCommerceTransferOrder } from '../../pages/api/create-woo-transfer-order'
import {
    ButtonContainer,
    Container,
    Inner,
    Msj,
    MsjContainer,
} from './Elements'

const Transfer = () => {

    const { cart } = GetCartContext()

    const placeOrder = () => {
        CreateWooCommerceTransferOrder(cart)
    }

    return (
        <Container>
            <Inner>
                <MsjContainer>
                    <Msj>
                        Texto para transferencia.<br></br>
                        Explica que la orden llega a la empresa una vez que da click al botón, pero no es efectiva hasta que no paga (queda pendiente). Inluir resumen de la reserva?
                    </Msj>
                    <ButtonContainer>
                        <PrimaryButtonAction event={placeOrder}>
                            Rentar
                        </PrimaryButtonAction>
                    </ButtonContainer>
                </MsjContainer>
            </Inner>
        </Container>
    )
}

export default Transfer