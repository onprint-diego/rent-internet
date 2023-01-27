import styled from 'styled-components'
import Image from 'next/image'

export const Button = styled.a`
    width: 4rem;
    height: 4rem;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    cursor: pointer;
    background-color: #ffffff;
    border-radius: 500px;
    padding: .45rem;
    z-index: 100;
    transition: bottom .2s ease-in-out;

    &:hover {
        bottom: 1.1rem;
    }

    @media all and (max-width: 768px) {
        display: ${({hide}) => hide && 'none'};
    }
`

export const ImgContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const Img = styled(Image)`
    object-fit: cover;
`