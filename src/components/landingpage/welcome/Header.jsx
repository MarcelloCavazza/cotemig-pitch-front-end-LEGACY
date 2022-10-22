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
    </NavBar>
  );
};

const NavLink = styled.li`
  list-style: none;

  & a {
    color: ${(props) =>
      props.primary ? colors.logoGreenOne : colors.webLinks};
    text-decoration: none;
    margin-right: 30px;
    font-size: 1em;
    opacity: 0.7;
    text-transform: uppercase;
    font-weight: 700;
  }

  & a.active,
  & a:hover {
    opacity: 1;
    color: ${colors.logoGreenOne};
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
  border-left: 5px solid ${colors.logoGreenOne}88;
  padding-left: 15px;
`;

export default Header;
