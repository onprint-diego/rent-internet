import Link from 'next/link'
import Lg from '/public/rent-internet-logo.png'
import {
    Container,
    Inner,
    LogoContainer,
    Logo,
    Nav,
    Links,
    LinkContainer,
    PageLink,
} from './Elements'

const NavBar = () => {

    // DB
    const links = [
        { to: '/product-detail', title: 'Rentar', type: 'text'},
        { to: '/', title: 'Recargas', type: 'cta'},
        { to: '/', title: 'FAQ', type: 'p'},
        { to: '/', title: 'Contacto', type: 'cta'},
    ]
    //

    return (
        <Container>
            <Inner>
                <Link href='/'>
                    <LogoContainer>
                        <Logo src={Lg} alt='logo'/>
                    </LogoContainer>
                </Link>
                <Nav>
                    <Links>
                        {
                            links?.map(link => {
                                return(
                                    <LinkContainer key={link.title}>
                                        <Link 
                                        href={link.to}
                                        >
                                            {link.title}
                                        </Link>
                                    </LinkContainer>
                                )
                            })
                        }
                    </Links>
                </Nav>
            </Inner>
        </Container>
    )
}

export default NavBar