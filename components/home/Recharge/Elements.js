import styled from 'styled-components'
import Image from 'next/future/image'

export const Container = styled.section`
    width: 100%;
    position: relative;
    margin-top: 10rem;
`

export const Inner = styled.div`
    position: relative;
    margin: 0 auto;
    width: 85%;
    max-width: var(--section-max-width);
    height: calc(var(--section-min-height) - 7rem);
    display: flex;

    @media all and (max-width: 768px) {  
        bottom: 5rem;
    }

    @media all and (max-width: 450px) {  
        bottom: 6rem;
    }
`

export const ImageSide = styled.div`
    width: 50%;
    position: relative;

    @media all and (max-width: 768px) {  
        position: absolute;
        width: 100%;
    }
`

export const Content = styled.div`
    width: 50%;
    z-index: 100;

    @media all and (max-width: 768px) {  
        width: 100%;
    }
`

export const ImageContainer = styled.div`
    position: absolute;
    right: 50%;
    top: -4rem;
    transform: translateX(35%);
    width: 35rem;
    height: 28rem;

    @media all and (max-width: 768px) {  
        width: 100%;
        top: 6rem;
        right: 28%;
    }

    @media all and (max-width: 650px) {  
        width: 105%;
        top: 10rem;
    }

    @media all and (max-width: 550px) {  
        right: 40%;
        top: 15rem;
        width: 30rem;
        height: 25rem;
    }

    @media all and (max-width: 450px) {  
        width: 139%;
        top: 14rem;
    }
`

export const SideImage = styled(Image)`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    object-fit: cover;
`

export const Title = styled.h2`
    color: var(--text-primary-color);
    font-size: 3rem;

    @media all and (max-width: 450px) {  
        font-size: 2.5rem;
    }
`

export const Text = styled.p`
    color: var(--text-primary-color);
    margin-top: 1rem;
    font-size: 1rem;
    margin-bottom: 1.3rem;
`