import { PrimaryButtonAction } from '../shared/PrimaryButton/PrimaryButton'
import {
    ButtonContainer,
    Container,
    Inner,
    Msj,
    MsjContainer,
} from './Elements'

const Transfer = () => {

    const placeOrder = () => {
        console.log('escribir en db')
        //escribir data en woo
    }

    return (
        <Container>
            <Inner>
                <MsjContainer>
                    <Msj>
                        Texto para transferencia.<br></br>
                        Explica que la orden llega a la empresa una vez que da click al botón, pero no es efectiva hasta que no paga (queda pendiente), guacho
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