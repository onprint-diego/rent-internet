import styled from 'styled-components'

export const ProductContainer = styled.article`
    margin: 1rem auto;
    width: 95%;
    max-width: var(--section-max-width);
    min-height: var(--section-min-height);
    position: relative;
    padding-top: 4.5rem;
    display: flex;
`

export const LeftContainer = styled.div`
    width: 20%;
    margin: 0 7rem;
`

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
`

export const ProductImage = styled.img`
    position: relative;
    top: 3rem;
    left: 0;
    width: 100%;
`

export const ReviewContainer = styled.div`
    position: relative;
    top: 6rem;
`

export const ReviewItem = styled.p`

`

export const DescriptionContainer = styled.div`
    width: 40%;
`

export const Title = styled.h1`
    border-bottom: 1px solid #DEE0E1;
    font-size: 2.5rem;
    padding-bottom: .7rem;
    margin-bottom: .5rem;
`

export const Description = styled.p`

`

export const Error = styled.p`

`
