import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    /* width:10rem; */
    position: relative;
`

export const Label = styled.label`
    margin-bottom: 1rem;
    font-weight: bold;
    color: var(--text-primary-color);

    &:after {
        content: '';
        position: absolute;
        top: 24px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: var(--soft-lines-color);
    }
`

export const Options = styled.select`
    width: 10rem;
`

export const Option = styled.option`

    &:first-letter{
        text-transform: capitalize;
    }
`