import { ButtonPrimaryLink } from '../../shared/ButtonPrimary/ButtonPrimary'
import { ButtonSecondaryPage } from '../../shared/ButtonSecondary/ButtonSecondary'
import {
    BackgroundContainer,
    BackgroundImg,
    Copy,
    SubCopy,
    Container,
    IconsContainer,
    IconContainer,
    IconImageContainer,
    Icon,
    Text,
    ButtonsContainer,
    ButtonsInner,
} from './Elements'

const Hero = ({ content }) => {

    return (
        <Container>
            {
                Object.entries(content).length !== 0 &&
                <>
                    <BackgroundContainer>
                        <BackgroundImg src={content?.heroimage.src} alt='hero background' fill/>
                    </BackgroundContainer>
                    <Copy>{content?.title}</Copy>
                    <SubCopy>{content?.subtitle}</SubCopy>
                    <ButtonsContainer>
                        <ButtonsInner>
                            <ButtonPrimaryLink to='/product-detail'>
                                {content?.rentbutton}
                            </ButtonPrimaryLink>
                            <ButtonSecondaryPage>
                                {content?.detailsbutton}
                            </ButtonSecondaryPage>
                        </ButtonsInner>
                    </ButtonsContainer>
                    <IconsContainer>
                        {
                            content.icons.map(icon => {
                                return(
                                    <IconContainer key={icon.src}>
                                        <IconImageContainer>
                                            <Icon
                                            src={icon.src} 
                                            alt="featured icon"
                                            fill
                                            />
                                        </IconImageContainer>
                                        <Text>{icon.description}</Text>
                                    </IconContainer>
                                )
                            })
                        }
                    </IconsContainer>
                </>
            }
        </Container>
  )
}

export default Hero
