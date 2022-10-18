import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    position: relative;
    margin-top: 3.5rem;
    min-height: var(--section-min-height);
    background-color: var(--main-dark-blue);
`

export const Inner = styled.div`
    position: relative;
    margin: 0 auto;
    width: 85%;
    max-width: var(--section-max-width);
    height: var(--section-min-height);
    z-index: 2;
    display: flex;
    align-items: center;
`

export const Accordion = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 1.5rem;
`

export const Item = styled.div`
    border-bottom: 1px solid var(--soft-lines-color);
    padding-bottom: .5rem;
    margin: .5rem 0;
`

export const Qcontainer = styled.div`

`

export const Acontainer = styled.div`

`

export const Q = styled.p``

export const A = styled.p`
    overflow: hidden;
    max-height: ${({open}) => open ? '100rem' : 0};
`