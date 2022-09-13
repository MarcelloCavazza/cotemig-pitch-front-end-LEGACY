import styled from "styled-components";
import NavBar from "../navbar/NavBar.jsx";
import Logo from '../logo/Logo.jsx'

const Header = () => {
  return (
    <SHeader>
      <Logo tamanho={64}/>
      <NavBar />
    </SHeader>
  )
}

const SHeader = styled.header`
  height: 96px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default Header;