import Link from 'next/link'
import styled from 'styled-components'

//Styles
const Button = styled.span`
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
    cursor: pointer;
    transition: opacity .2s ease-in-out;

    &:hover {
        opacity: .7;
    }
`

//Component
export const PrimaryButton = ({ children, to }) => {
    return (
        <Link href={to}>
            <Button>{children}</Button>
        </Link>
    )
}