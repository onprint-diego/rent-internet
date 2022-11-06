import { useEffect, useRef } from 'react'
import Bg from '/public/hero-back.png'
import { AltPrimaryButton } from '../../shared/AltPrimaryButton/AltPrimaryButton'
import { AltSecondaryButtonScroll } from '../../shared/AltSecondaryButton/AltSecondaryButton'
import {
    Container,
    BackgroundImage,
    Inner,
    ObjectContainer,
    ObjectImg,
    Content,
    Copy,
    SubCopy,
    ButtonsContainer,
} from './Elements'

const Hero = ({ content }) => {

    const object = useRef()

    // element.style.position = "absolute";
    // element.style.left = e.clientX - heightEl + 'px'; // position-div-"id" = positionMoveMouse"x" and "y" like bottom - height"let heightEl"
    // element.style.top = e.clientY - widthEl + 'px';

    // const handleMouseMove = e => {
    //     console.log(object)
    //     // object.current.style.top = e.clinetX - 500
    // }

    // <Container onMouseMove={handleMouseMove}>

    return (
        <Container>
            <BackgroundImage alt="modem portatil de bolsillo" src={Bg} fill />
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <Content>
                        <Copy>{content?.title}</Copy>
                        <SubCopy>{content?.subtitle}</SubCopy>
                        <ButtonsContainer>
                            <AltPrimaryButton to='/product-detail'>
                                {content?.rentbutton}
                            </AltPrimaryButton>
                            <AltSecondaryButtonScroll
                                additionalStyle='margin-left: 3rem;'
                                to='#features-section'>
                                {content?.detailsbutton}
                            </AltSecondaryButtonScroll>
                        </ButtonsContainer>
                    </Content>
                    <ObjectContainer>
                        <ObjectImg src={content?.heroimage.src} alt='hero background' fill />
                    </ObjectContainer>
                </Inner>
            }
        </Container>
    )
}

export default Hero
