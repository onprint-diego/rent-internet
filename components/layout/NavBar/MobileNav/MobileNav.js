import Link from 'next/link'
import {
    MenuContainer,
    List,
    LinkContainer,
} from './Elements'

const MobileNav = ({ links, opened, setOpened, pathname }) => {

    return (
        <MenuContainer opened={opened}>
            <List>
                {
                    links.map(link => {

                        const string = ` / ${link.text}`

                        return (
                            <LinkContainer key={link.to} onClick={() => setOpened(!opened)}>
                                <Link href={link.to}>
                                    {string}
                                </Link>
                            </LinkContainer>
                        )
                    })
                }
                {
                    pathname === '/' &&
                    <LinkContainer>
                        <a href='#faq-section'
                            onClick={() => setOpened(!opened)}
                        >
                            / FAQ
                        </a>
                    </LinkContainer>
                }
            </List>
        </MenuContainer>
    )
}

export default MobileNav