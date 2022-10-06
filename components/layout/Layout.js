import NavBar from "./NavBar/NavBar"
import styled from 'styled-components'

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
    </LayoutContainer>
  )
}

export default Layout