import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Lg from '/public/rent-internet-logo.png'
import MobileNav from './MobileNav/MobileNav'
import Icon from './MobileNav/Icon'
import {
    Container,
    Inner,
    LogoContainer,
    Logo,
    Nav,
    Links,
    LinkContainer,
} from './Elements'

const NavBar = () => {

    const router = useRouter()
    const pathname = router.pathname
    const [opened, setOpened] = useState(false)
    const toTop = () => scrollTo(top)

    const plinks = [
        {
            to: '/product-detail',
            text: 'Alquilar'
        },
        {
            to: '/recharge-checkout',
            text: 'Recargas'
        },
    ]

    return (
        <Container>
            <Inner>
                {
                    pathname === '/' ?
                        <LogoContainer onClick={toTop}>
                            <Logo src={Lg} alt='logo' />
                        </LogoContainer> :
                        <Link href='/'>
                            <LogoContainer>
                                <Logo src={Lg} alt='logo' />
                            </LogoContainer>
                        </Link>
                }
                <Nav>
                    <Links>
                        {
                            plinks.map(link => {
                                return (
                                    <LinkContainer 
                                        key={link.to} 
                                        isSelected={pathname === link.to}
                                    >
                                        <Link href={link.to}>
                                            {link.text}
                                        </Link>
                                    </LinkContainer>
                                )
                            })
                        }
                        {
                            pathname === '/' &&
                            <LinkContainer>
                                <a href='#faq-section'>FAQ</a>
                            </LinkContainer>
                        }
                    </Links>
                </Nav>
                <Icon opened={opened} setOpened={setOpened} />
                <MobileNav opened={opened} setOpened={setOpened} links={plinks} pathname={pathname}/>
            </Inner>
        </Container>
    )
}

export default NavBar