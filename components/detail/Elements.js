import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: var(--soft-bg-gray);
    padding-bottom: 3rem;
`

export const ProductContainer = styled.article`
    margin: 0 auto;
    padding-bottom: 1.5rem;
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

export const Sticky = styled.div`
    position: sticky;
    top: 5rem;
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
    font-size: .9rem;
    margin-bottom: .5rem;

    &:last-child {
        border-top: 1px solid var(--soft-lines-color);
        padding-top: .5rem;
        margin-top: .7rem;
        font-size: 1.2rem;
    }
`

export const Bold = styled.span`
    font-weight: 500;
`

export const DescriptionContainer = styled.div`
    width: 40%;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: var(--container-shadow);
`

export const Title = styled.h1`
    border-bottom: 1px solid var(--soft-lines-color);
    font-size: 2.5rem;
    padding-bottom: .7rem;
    margin-bottom: .5rem;
`

export const Description = styled.p`

`

export const Error = styled.p`

`

//SKELETON