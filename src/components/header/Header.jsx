import styled from "styled-components";
import NavBar from "../navbar/NavBar.jsx";
import Logo from '../logo/Logo.jsx'

const Header = () => {
  return (
    <SHeader>
      <Logo tamanho={54}/>
      <NavBar />
    </SHeader>
  )
}

const SHeader = styled.header`
  height: 70px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;
`

export default Header;