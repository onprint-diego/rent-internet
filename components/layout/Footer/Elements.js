import styled from 'styled-components'
import Image from 'next/future/image'

export const Container = styled.section`
    width: 100%;
    position: relative;
    min-height: var(--section-min-height);
    background-color: var(--soft-lines-color);
    padding: 5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Inner = styled.div`
    position: relative;
    width: 85%;
    max-width: var(--section-max-width);
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Links = styled.ul``

export const LinkContainer = styled.li`
    font-size: .8rem;
    margin-bottom: 1rem;
    transition: opacity .2s ease-in-out;

    &:hover {
        opacity: .7;
    }
`

export const SocialIcons = styled.ul`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`

export const IconContainer = styled.li`
    position: relative;
    width: 2rem;
    height: 2rem;
    margin: 0 .5rem;
    cursor: pointer;

    &:hover {
        opacity: .7;
    }
`

export const Icon = styled(Image)`
    object-fit: cover;
`

export const LogoContainer = styled.div`
    position: relative;
    width: 7rem;
    height: 3rem;
    margin-top: 1rem;
`

export const LogoImage = styled(Image)`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    object-fit: cover;
`