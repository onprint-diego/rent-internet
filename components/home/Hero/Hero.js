import { ButtonPrimaryLink } from '../../shared/ButtonPrimary/ButtonPrimary'
import { ButtonSecondaryPage } from '../../shared/ButtonSecondary/ButtonSecondary'
import Bg from '/public/hero-back.png'
import {
    Container,
    BackgroundImage,
    Inner,
    ObjectContainer,
    ObjectImg,
    Copy,
    SubCopy,
    ButtonsContainer,
    ButtonsInner,
} from './Elements'

const Hero = ({ content }) => {

    return (
        <Container>
            <BackgroundImage src={Bg} fill />
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <Copy>{content?.title}</Copy>
                    <SubCopy>{content?.subtitle}</SubCopy>
                    <ButtonsContainer>
                        <ButtonPrimaryLink to='/product-detail'>
                            {content?.rentbutton}
                        </ButtonPrimaryLink>
                        <ButtonSecondaryPage>
                            {content?.detailsbutton}
                        </ButtonSecondaryPage>
                    </ButtonsContainer>
                    <ObjectContainer>
                        <ObjectImg src={content?.heroimage.src} alt='hero background' fill />
                    </ObjectContainer>
                </Inner>
            }
        </Container>
    )
}

export default Hero
