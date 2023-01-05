import styled, { keyframes } from 'styled-components'
import Image from 'next/future/image'

export const Container = styled.section`
    position: relative;
    width: 100%;
    overflow: hidden;
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
        transform: translateY(20px);
    }
`

export const ObjectContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    height: 29rem;
    width: 29rem;
    /* aspect-ratio: 16/9; */
    animation: ${floatingAnimation} 1.4s infinite alternate ease-in-out;
    opacity: .9;

    @media all and (max-width: 768px) {
        bottom: 3rem;
        right: -16rem;
        animation: none;
    }

    @media all and (max-width: 450px) {  
        width: 28rem;
        bottom: -10rem;
        right: -3rem;
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
    z-index: 100;

    @media all and (max-width: 1030px) {
        top: 5.5rem;
    }

    @media all and (max-width: 650px) {
        top: 2.5rem;
    }

    @media all and (max-width: 450px) {  
        width: 95%;
    }
`

export const Copy = styled.h1`
    font-size: 4rem;
    text-transform: uppercase;
    color: #ffffff;

    @media all and (max-width: 450px) {
        font-size: 2.5rem;
    }
`

export const SubCopy = styled.p`
    font-size: 1.7rem;
    margin-top: .8rem;
    color: #ffffff;

    @media all and (max-width: 650px) {
        font-size: 1.5rem;
    }

    @media all and (max-width: 450px) {
        margin-top: 1.5rem;
        font-size: 1.1rem;
    }
`

export const ButtonsContainer = styled.div`
    position: relative;
    margin-top: 3rem;
    display: flex;

    @media all and (max-width: 450px) {  
        margin-top: 2rem;

        span {
            margin-left: 1rem !important; 
        }
    }

`