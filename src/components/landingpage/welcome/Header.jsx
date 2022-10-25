import { Link } from "react-router-dom";
import { leftIn } from "./Animations";
import styled from "styled-components";
import colors from "../../../global-styles/colors";
import "../../../global-styles/globalCss.css";

const Header = () => {
  return (
    <NavBar className="nav" id="nav">
      <NavLink primary>
        <Link to="/">Home</Link>
      </NavLink>
      <NavLink>
        <Link to="/about">Sobre Nós</Link>
      </NavLink>
      <NavLink>
        <Link to="/plans">Planos</Link>
      </NavLink>
      <NavLink>
        <Link to="/team">Equipe</Link>
      </NavLink>
      <NavLink>
        <Link to="/contact">Contatos</Link>
      </NavLink>
      <NavLink login>
        <Link to='/login'>Login</Link>
      </NavLink>
      <NavLink signup>
        <Link to='/signup'>Cadastrar</Link>
      </NavLink>
    </NavBar>
  );
};

const NavLink = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0 .5rem;
  border-radius: 10px;
  border: 2px solid ${props => (props.login || props.signup) ? colors.logoGreenOne : 'transparent'};
  background-color: ${props => props.signup ? colors.logoGreenOne : 'transparent'};
  
  & a {
    color: ${(props) =>
      props.primary ? colors.logoGreenOne : colors.webLinks};
    text-decoration: none;
    padding: ${props => (props.login || props.signup) ? '5px 10px' : '5px 2px'};
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:active{
    outline: 3px solid ${
      props => 
      (props.login || props.signup) 
      ? `${colors.logoGreenTwo}` 
      : 'transparent'};
  }

  & a:hover {
    color: ${props => props.signup ? 'black' : ''};
    text-decoration: underline;
  }
`;

const NavBar = styled.ul`
  position: absolute;
  animation: ${leftIn} var(--duration) var(--fast) forwards;
  animation-delay: 0s;
  opacity: 0;
  left: 150px;
  top: 75px;
  display: flex;
  justify-content: center;
  border-left: 5px solid ${colors.logoGreenOne};
`;

export default Header;
