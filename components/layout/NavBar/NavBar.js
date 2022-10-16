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

//TODO. If not '/' then Logo -> Link '/' else Logo -> scrollTo top

const NavBar = () => {

    // DB
    const links = [
        { to: '/product-detail', title: 'Rentar', type: 'text'},
        { to: '/', title: 'Contacto', type: 'cta'},
        { to: '/', title: 'Idioma', type: 'p'},
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