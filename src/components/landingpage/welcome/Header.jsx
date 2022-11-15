import { Link as LinkRouter } from "react-router-dom";
import { Link as Scroll } from 'react-scroll'
import {NavBar, NavLink} from './style.js'
import {useState, useEffect} from 'react'
import MenuToggle from "./MenuToggle.jsx";
import Cookies from "universal-cookie";

import "../../../global-styles/globalCss.css";

const Header = ({ className }) => {
  const cookies = new Cookies();
  const [isLogged, setIsLogged] = useState(false)
  
  useEffect(() => {
    if (cookies.get('token')) {
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [])
  
  const scroll = {
    spy: true,
    smooth: true
  }

  const logout = () => {
    cookies.remove('token')
    setIsLogged(false)
  }

  return (
    <>
      <MenuToggle />
      <NavBar className={className}>
        <ul>
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
            <LinkRouter to={isLogged ? '/chatroom':'/login'}>{isLogged ? 'Chats' : 'Entrar'}</LinkRouter>
          </NavLink>
          <NavLink signup>
            <LinkRouter to={isLogged ? '/' : '/signup'} onClick={logout}>{isLogged ? 'Deslogar' : 'Cadastrar'}</LinkRouter>
          </NavLink>
        </ul>
      </NavBar>
    </>
  );
};

export default Header;
