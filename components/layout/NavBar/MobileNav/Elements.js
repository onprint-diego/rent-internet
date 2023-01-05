import styled from 'styled-components'

// MENU
export const MenuContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    max-height: ${({opened}) => opened ? '100rem' : '0rem'};
    overflow: hidden;
    transition: max-height .5s cubic-bezier( 1, 0, 0, 1 );
    box-shadow: 0px 2px 9px 3px rgba(0, 0, 0, 0.2);
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 5rem 2rem 1rem 2rem;
`

export const LinkContainer = styled.li`
    padding: 15px 0;
    line-height: 16px;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--text-primary-color);
    text-align: right;
`

// ICON
export const Hamb = styled.button`
    background: transparent;
    border: 1px solid #ffffff;
    outline: none;
    cursor: pointer;
    z-index: 800;
    align-self: center;
    margin-right: 15px;
    padding: 4px 9px;
    border-radius: 4px;
    position: relative;
    @media all and (min-width: 450px) {
        display: none;
    }
`

export const Span = styled.span`
    display: block;
    width: 22px;
    height: 2px;
    background-color: var(--text-primary-color);
    margin-block: 5px;
    border-radius: 1px;
    transition: transform .2s, opacity .25s;
    &:nth-child(1) {
        transform: ${({opened}) => opened ? 'translateY(7px) rotate(45deg)' : 'none'};
    }
    &:nth-child(2) {
        opacity: ${({opened}) => opened ? '0' : '1'};
    }
    &:nth-child(3) {
        transform: ${({opened}) => opened ? 'translateY(-7px) rotate(-45deg)' : 'none'};
    }
`