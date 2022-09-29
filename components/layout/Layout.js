import NavBar from "./NavBar/NavBar"
import styled from 'styled-components'

//Styles
const LayoutContainer = styled.div`
  width: 85%;
  max-width: var(--section-max-width);
  margin: 0 auto;
`

//Component
const Layout = ({ children }) => {
  return (
    <LayoutContainer>
        <NavBar />
        <main>{children}</main>
    </LayoutContainer>
  )
}

export default Layout