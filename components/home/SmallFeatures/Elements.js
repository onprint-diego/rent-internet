import styled from 'styled-components'
import Image from 'next/future/image'

export const SmallContainer = styled.section`
    position: relative;
    width: 100%;
`

export const IconsContainer = styled.div`
    width: 85%;
    max-width: var(--section-max-width);
    margin: 0 auto;
    padding: 7rem 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media all and (max-width: 1024px) {
        width: 60%;
        padding: 3rem 0;
    }

    @media all and (max-width: 850px) {
        width: 85%;
    }
`

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media all and (max-width: 1024px) {
        width: 50%;
        margin-bottom: 3rem;
    }

    @media all and (max-width: 590px) {
        width: 100%;
    }
`

export const IconImageContainer = styled.div`
    position: relative;
    height: 4.5rem;
    aspect-ratio: 16/9;
`

export const Icon = styled(Image)`   
    object-fit: contain;
`

export const Text = styled.p`
    font-size: .8rem;
    text-align: center;
`