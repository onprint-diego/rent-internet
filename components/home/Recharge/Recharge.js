import { PrimaryButton } from '../../shared/PrimaryButton/PrimaryButton'
import {
    Container,
    Inner,
    Content,
    Title,
    Text,
    ImageContainer,
    SideImage,
} from './Elements'

const Recharge = ({ content }) => {

    return (
        <Container>
            {
                Object.entries(content).length !== 0 &&
                <>
                    <Inner>
                        <Content>
                            <Title>{content.title}</Title>
                            <Text>{content.text}</Text>
                            <PrimaryButton to="/recharge-checkout">
                                Recargar
                            </PrimaryButton>
                        </Content>
                        <ImageContainer>
                            <SideImage src={content.img.src} alt={content.img.alt} fill/>
                        </ImageContainer>
                    </Inner>
                </>
            }
        </Container>
    )
}

export default Recharge