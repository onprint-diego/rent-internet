import Link from 'next/link'
import Lg from '/public/rent-internet-logo.png'
import Ig from '/public/icons/instagram.svg'
import Fb from '/public/icons/facebook.svg'
import {
    Container,
    SocialIcons,
    IconContainer,
    Icon,
    Inner,
    LinkContainer,
    Links,
    LogoContainer,
    LogoImage,
} from './Elements'

const Footer = () => {

    const links = [
        {
            title: 'Políticas de privacidad',
            to: '/',
        },
        {
            title: 'Términos y condiciones',
            to: '/',
        }]

    const icons = [
        {
            src: Ig,
            url: 'https://www.instagram.com/rent.internet.lat/',
            alt: 'instagram social icon'
        },
        {
            src: Fb,
            url: 'https://www.facebook.com/profile.php?id=100082961630897',
            alt: 'instagram social icon'
        },
    ]


    return (
        <Container>
            <Inner>
                <Links>
                    {
                        links.map(link => {
                            return (
                                <LinkContainer key={link.title}>
                                    <Link href={link.to}>{link.title}</Link>
                                </LinkContainer>
                            )
                        })
                    }
                </Links>
                <SocialIcons>
                    {
                        icons.map(icon => {
                            return(
                                <IconContainer key={icon.url}>
                                    <Icon src={icon.src} alt={icon.alt} fill />
                                </IconContainer>
                            )
                        })
                    }
                </SocialIcons>
                <LogoContainer>
                    <LogoImage src={Lg} alt='logo' fill />
                </LogoContainer>
            </Inner>
        </Container>
    )
}

export default Footer