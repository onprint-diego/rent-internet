import styled from 'styled-components'
import Image from 'next/future/image'

export const Container = styled.section`
    margin: 0 auto;
    width: 95%;
    max-width: var(--section-max-width);
    min-height: var(--section-min-height);
    position: relative;
    padding-top: 6.5rem;
`

export const BackgroundContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    height: 32rem;
    aspect-ratio: 16/9;
    transform: translate(-50%, -50%);
    opacity: .2;
    z-index: -1;
    width: 100%;
`

export const BackgroundImg = styled(Image)`
    margin: 0 auto;
    object-fit: contain;
`

export const Copy = styled.h1`
    text-align: center;
    font-size: 4rem;
`

export const SubCopy = styled.p`
    text-align: center;
    font-size: 1.7rem;
    margin-top: .8rem;
`

export const ButtonsContainer = styled.div`
    position: relative;
    margin-top: 5rem;
`

export const ButtonsInner = styled.div`
    width: 20rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
`

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 5rem;
`

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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