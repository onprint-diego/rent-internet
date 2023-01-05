import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background: linear-gradient(208.39deg, #1966D1 57.39%, #3483FA 57.39%);
    padding-bottom: 3rem;
`

export const CheckoutContainer = styled.article`
    margin: 0 auto;
    width: 95%;
    max-width: var(--section-max-width);
    min-height: var(--section-min-height);
    position: relative;
    padding-top: 4.5rem;
    display: flex;

    @media all and (max-width: 768px) {
        padding-top: 2.5rem;
    }

    @media all and (max-width: 450px) {
        padding-top: 1.5rem;
    }
`

export const LeftContainer = styled.div`
    width: 35%;
    margin-left: 2rem;

    @media all and (max-width: 1024px) {
        margin-left: 1rem;
    }

    @media all and (max-width: 768px) {
        display: none;
    }
`

export const RightContainer = styled.div`
    width: 60%;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: var(--container-shadow);
    margin-left: 5rem;

    @media all and (max-width: 1024px) {
        margin-left: 1rem;
    }

    @media all and (max-width: 768px) {
        width: 85%;
        margin: 0 auto;
    }

    @media all and (max-width: 550px) {
        width: 99%;
    }

    @media all and (max-width: 450px) {
        padding: 1rem;
    }
`

export const EmptyCartContainer = styled.div`
    width: 100%;
    display: flex;
    height: var(--section-min-height);
    justify-content: center;
    align-items: center;
    padding-bottom: 5rem;
`

export const EmptyCartInner = styled.div`
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: var(--container-shadow);
    padding: 2rem;
    width: 30rem;
`

export const Msj = styled.p`
    margin-bottom: 1.5rem;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`