import Link from 'next/link'
import { useRouter } from 'next/router'
import Lg from '/public/rent-internet-logo.png'
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

    const toTop = () => scrollTo(top)

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
                        <LinkContainer isSelected={pathname === '/product-detail'}>
                            <Link href='/product-detail'>
                                Alquilar
                            </Link>
                        </LinkContainer>
                        <LinkContainer isSelected={pathname === '/recharge-checkout'}>
                            <Link href='/recharge-checkout'>
                                Recargas
                            </Link>
                        </LinkContainer>
                        {
                            pathname === '/' &&
                            <LinkContainer>
                                <a href='#faq-section'>FAQ</a>
                            </LinkContainer>
                        }
                    </Links>
                </Nav>
            </Inner>
        </Container>
    )
}

export default NavBar