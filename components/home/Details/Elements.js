import styled from 'styled-components'
import Image from 'next/future/image'

export const Container = styled.section`
    width: 100%;
    position: relative;
    min-height: var(--section-min-height);

    @media all and (max-width: 450px) {  
        padding: 2rem 0;
    }
`

export const BackgroundImage = styled(Image)`
    object-fit: cover;
    z-index: 0;
`

export const BackgroundOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary-color);
    opacity: .7;
    z-index: 1;

    @media all and (max-width: 768px) {  
        opacity: .8;
    }

    @media all and (max-width: 450px) {  
        opacity: .9;
    }
`

export const Inner = styled.div`
    position: relative;
    margin: 0 auto;
    width: 85%;
    max-width: var(--section-max-width);
    height: var(--section-min-height);
    display: flex;
    align-items: center;
    z-index: 2;
`

export const Content = styled.div`
    width: 50%;

    @media all and (max-width: 1020px) {  
        width: 70%;
    }

    @media all and (max-width: 768px) {  
        width: 85%;
    }

    @media all and (max-width: 650px) {  
        width: 90%;
    }
    
    @media all and (max-width: 450px) {  
        width: 100%;
    }
`

export const Title = styled.h2`
    color: #ffffff;
    font-size: 3rem;

    @media all and (max-width: 768px) {  
        font-size: 2rem;
    }

    @media all and (max-width: 450px) {  
        font-size: 1.7rem;
    }
`

export const Text = styled.p`
    color: #ffffff;
    margin-top: 1rem;
    font-size: 1rem;
`