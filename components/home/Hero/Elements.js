import styled, { keyframes } from 'styled-components'
import Image from 'next/future/image'

export const Container = styled.section`
    position: relative;
    width: 100%;
`

export const BackgroundImage = styled(Image)`
    object-fit: cover;
    z-index: 0;
`
export const Inner = styled.div`
    position: relative;
    margin: 0 auto;
    width: 85%;
    max-width: var(--section-max-width);
    height: 37rem;
    z-index: 2;

    @media all and (max-width: 1030px) {
        width: 95%;
    }
`

const floatingAnimation = keyframes`
    100% {
        transform: translateY(25px);
    }
`

export const ObjectContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    height: 32rem;
    width: 32rem;
    aspect-ratio: 16/9;
    animation: ${floatingAnimation} 1.6s infinite alternate ease-in-out;

    @media all and (max-width: 1030px) {
        width: 30rem;
    }
`

export const ObjectImg = styled(Image)`
    margin: 0 auto;
    object-fit: contain;
`

export const Content = styled.div`
    position: relative;
    top: 6.5rem;
    width: 70%;

    @media all and (max-width: 1030px) {
        width: 60%;
        top: 5.5rem;
    }
`

export const Copy = styled.h1`
    font-size: 4rem;
    text-transform: uppercase;
    color: #ffffff;
`

export const SubCopy = styled.p`
    font-size: 1.7rem;
    margin-top: .8rem;
    color: #ffffff;
`

export const ButtonsContainer = styled.div`
    position: relative;
    margin-top: 3rem;
    display: flex;
`