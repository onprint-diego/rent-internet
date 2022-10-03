import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/future/image'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
`

export const LogoContainer = styled.div`
    height: 2.7rem;
    display: flex;
    justify-content: center;
    align-self: center;
`

export const Logo = styled(Image)`
    width: 100%;
    height: auto;
    object-fit: cover;
`

export const Nav = styled.nav`
`

export const Links = styled.ul`
    display: flex;
    justify-content: space-between;
`

export const LinkContainer = styled.li`
    padding-left: 2rem;
`

export const PageLink = styled(Link)`

`