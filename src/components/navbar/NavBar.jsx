import styled from "styled-components";
import colors from '../../styles/colors.js'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Links>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </Links>
  )
}

const Links = styled.nav`
  width: 600px;

  a {
    text-decoration: none;
    color: ${colors.white};
    font-size: 16pt;
  }

  li {
    list-style: none;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }
`

export default NavBar;