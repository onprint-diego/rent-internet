import styled from 'styled-components'
import Image from 'next/future/image'

export const Container = styled.section`
    position: relative;
    min-height: var(--section-min-height);
    padding-top: 5.5rem;
`

export const BackgroundContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-92%, -50%);
    opacity: .5;
    aspect-ratio: 16/9;
    z-index: -1;
`

export const BackgroundImg = styled(Image)`
    width: 180%;
    max-width: 33rem;
    height: auto;
    object-fit: cover;
`

export const Copy = styled.h1`
    text-align: center;
    font-size: 3rem;
`

export const SubCopy = styled.p`
    text-align: center;
`

export const IconsContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
`

export const IconContainer = styled.div`
    /* width: 3rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Icon = styled(Image)`
    width: 5rem;
    height: auto;
    object-fit: cover;
`

export const Text = styled.p`
    width: 80%;
    text-align: center;
`