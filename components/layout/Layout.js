import NavBar from "./NavBar/NavBar"
import styled from 'styled-components'
import Footer from "./Footer/Footer"
import WhatsButton from "../whats/WhatsButton"

//Styles
const LayoutContainer = styled.div`
  width: 100%;
`

//Component
const Layout = ({ children }) => {
  return (
    <LayoutContainer>
        <NavBar />
        <main>{children}</main>
        <WhatsButton />
        <Footer />
    </LayoutContainer>
  )
}

export default Layout