import Link from 'next/link'
import Lg from '/public/rent-internet-logo.png'
import {
    Container,
    LogoContainer,
    Logo,
    Nav,
    Links,
    LinkContainer,
    PageLink,
} from './Styled'

//TODO. If not '/' then Logo -> Link '/' else Logo -> scrollTo top

const NavBar = () => {

    // DB
    const links = [
        { to: '/product-detail', title: 'Rent', type: 'text'},
        { to: '/', title: 'Login', type: 'cta'},
        { to: '/', title: 'Signup', type: 'p'},
    ]
    //

    return (
        <Container>
            <LogoContainer>
                <Logo src={Lg} alt='logo' width={150} height={30} />
            </LogoContainer>
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
        </Container>
    )
}

export default NavBar