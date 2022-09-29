import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.article`
    width: 45%;
`

export const ImgContainer = styled.div`
    aspect-ratio: 16 / 9;
`

export const Img = styled(Image)`
    width: 100%;
    height: auto;
`