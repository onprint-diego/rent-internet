import Link from 'next/link'
import styled from 'styled-components'

//Styles
const Button = styled.button`
    width: var(--button-width);
    height: var(--button-height);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: var(--button-shadow);
    background-color: var(--main-dark-blue);
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    cursor: ${({disabled}) => !disabled && 'pointer'};
    transition: opacity .2s ease-in-out;
    opacity: ${({disabled}) => disabled ? .4 : 1};

    &:hover {
        opacity: ${({disabled}) => !disabled && '.7'};
    }
`

//Component
export const PrimaryButton = ({ children, to, disabled = false }) => {
    return (
        <Link href={to}>
            <Button disabled={disabled} dis={disabled}>{children}</Button>
        </Link>
    )
}

export const PrimaryButtonAction = ({ children, event}) => {
    return <Button onClick={event}>{children}</Button>
}