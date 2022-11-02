import { SecondaryButton } from '../shared/SecondaryButton/SecondaryButton'
import {
    Container,
    Inner,
    MsjContainer,
    Msj,
    ButtonContainer,
} from './Elements'

const Cancel = () => {

    const text = 'Lo sentimos... Ha ocurrido un error y no hemos podido procesar su reserva. Intentalo nuevamente o ponte en contacto con nuestro equipo de servicio al cliente.'

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

export default Cancel