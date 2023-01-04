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
    height: var(--section-min-height);
    display: flex;
`

export const ImageSide = styled.div`
    width: 50%;
    position: relative;
`

export const Content = styled.div`
    width: 50%;
`

export const ImageContainer = styled.div`
    position: absolute;
    right: 50%;
    top: -4rem;
    transform: translateX(35%);
    width: 35rem;
    height: 28rem;
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
`

export const Text = styled.p`
    color: var(--text-primary-color);
    margin-top: 1rem;
    font-size: 1rem;
    margin-bottom: 1.3rem;
`