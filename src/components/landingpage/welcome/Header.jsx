import { Link as LinkRouter } from "react-router-dom";
import { Link as Scroll } from 'react-scroll'
import { leftIn } from "./Animations";
import styled from "styled-components";
import colors from "../../../global-styles/colors";
import "../../../global-styles/globalCss.css";

const Header = () => {

  const scroll = {
    spy: true,
    smooth: true
  }

  return (
    <NavBar className="nav" id="nav">
      <NavLink primary>
        <LinkRouter to="/">Home</LinkRouter>
      </NavLink>
      <NavLink>
        <Scroll to="about" {...scroll}>Sobre Nós</Scroll>
      </NavLink>
      <NavLink>
        <Scroll to="plans" {...scroll}>Planos</Scroll>
      </NavLink>
      <NavLink>
        <Scroll to="team" {...scroll}>Equipe</Scroll>
      </NavLink>
      <NavLink>
        <Scroll to="contact" {...scroll}>Contatos</Scroll>
      </NavLink>
      <NavLink login>
        <LinkRouter to='/login'>Login</LinkRouter>
      </NavLink>
      <NavLink signup>
        <LinkRouter to='/signup'>Cadastrar</LinkRouter>
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
      props.primary 
        ? colors.logoGreenOne 
        : colors.webLinks
    };
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
    cursor: pointer;
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
