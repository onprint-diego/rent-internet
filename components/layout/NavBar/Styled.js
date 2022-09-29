import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
`

export const LogoContainer = styled.div`
    width: 3rem;
`

export const Logo = styled(Image)`
    width: 100%;
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