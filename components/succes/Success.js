import { SecondaryButton } from '../shared/SecondaryButton/SecondaryButton'
import {
    Container,
    Inner,
    MsjContainer,
    Msj,
    ButtonContainer,
} from './Elements'

const Success = () => {

    const text = 'Muchas gracias por su reserva. La reserva de un router WIFI portátil Rent Internet ha sido exitosa. En su correo electrónico estará recibiendo más información y detalles sobre su orden.'

    return (
        <Container>
            <Inner>
                <MsjContainer>
                    <Msj>{text}</Msj>
                    <ButtonContainer>
                        <SecondaryButton to="/">
                            Volver al Home
                        </SecondaryButton>
                    </ButtonContainer>
                </MsjContainer>
            </Inner>
        </Container>
    )
}

export default Success