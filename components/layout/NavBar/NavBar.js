import Link from 'next/link'
import {
    Container,
    LogoContainer,
    Logo,
    Nav,
    Links,
    LinkContainer,
    PageLink,
} from './Styled'

//PACEHOLDER
import Lg from '/public/logo-placeholder.jpg'

//TODO. If not '/' then Logo -> Link '/' else Logo -> scrollTo top

const NavBar = () => {

    // DB
    const links = [
        { to: '/add-expo', title: 'Create Expo', type: 'text'},
        { to: '/', title: 'Login', type: 'cta'},
        { to: '/', title: 'Signup', type: 'p'},
    ]
    //

    return (
        <Container>
            <LogoContainer>
                <Logo src={Lg} alt='logo' />
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