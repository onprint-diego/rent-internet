import React from 'react'
import {
    BackgroundContainer,
    BackgroundImg,
    Copy,
    SubCopy,
    Container,
    IconsContainer,
    IconContainer,
    Icon,
    Text,
} from './Elements'

//PLACEHOLDER
import BgImg from '/public/hero-back.jpg'
import V from '/public/icons/Velocidad.svg'
import E from '/public/icons/Economico.svg'
import L from '/public/icons/Liviano.svg'
import P from '/public/icons/Paises.svg'

const Hero = () => {

    const icons = [
        {
            id: 1,
            img: V,
            txt: 'Aliquid ex ea commodi consequatur. ',
        },
        {
            id: 2,
            img: E,
            txt: 'Aliquid ex ea commodi consequatur. ',
        },
        {
            id: 3,
            img: L,
            txt: 'Aliquid ex ea commodi consequatur. ',
        },
        {
            id: 4,
            img: P,
            txt: 'Aliquid ex ea commodi consequatur. ',
        },
    ]
        
    return (
        <Container>
            <BackgroundContainer>
                <BackgroundImg src={BgImg} alt='hero background' />
            </BackgroundContainer>
            <Copy>Lorem ipsum dolor sit amet</Copy>
            <SubCopy>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor.</SubCopy>
            <IconsContainer>
                {
                    icons.map(icon => {
                        return(
                            <IconContainer key={icon.id}>
                                <Icon 
                                src={icon.img} alt="featured icon"/>
                                <Text>{icon.txt}</Text>
                            </IconContainer>
                        )
                    })
                }
            </IconsContainer>
        </Container>
  )
}

export default Hero