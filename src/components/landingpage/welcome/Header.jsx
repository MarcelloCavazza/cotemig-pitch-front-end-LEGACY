import { Link as LinkRouter } from "react-router-dom";
import { Link as Scroll } from 'react-scroll'
import { NavBar, NavLink } from './style.js'
import { useState, useEffect } from 'react'
import Cookies from "universal-cookie";
import "../../../global-styles/globalCss.css";
import styled from "styled-components";
import colors from '../../../global-styles/colors'
import { useRef } from "react";

const Header = ({ className }) => {
  const cookies = new Cookies();
  const [isLogged, setIsLogged] = useState(false)
  const [menu, setMenu] = useState(true)
  const menuRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    if (cookies.get('token')) {
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [])

  useEffect(() => {
    if(menu) {
      document.body.style.overflow = 'initial';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [menu])

  const scroll = {
    spy: true,
    smooth: true
  }

  const logout = () => {
    cookies.remove('token')
    setIsLogged(false)
  }

  const handleMenuOnClick = () => {
    menuRef.current.classList.toggle('on', menu)
    btnRef.current.classList.toggle('close')
    setMenu(!menu)
    console.log(menu)
  }

  return (
    <>
      <Toggle>
        <div className='bg' ref={menuRef}>
          <ul>
            <li>
              <LinkRouter onClick={handleMenuOnClick} to="/">Home</LinkRouter>
            </li>
            <li>
              <Scroll onClick={handleMenuOnClick} to="about" {...scroll}>Sobre Nós</Scroll>
            </li>
            <li>
              <Scroll onClick={handleMenuOnClick} to="plans" {...scroll}>Planos</Scroll>
            </li>
            <li>
              <Scroll onClick={handleMenuOnClick} to="team" {...scroll}>Equipe</Scroll>
            </li>
            <li>
              <Scroll onClick={handleMenuOnClick} to="contact" {...scroll}>Contatos</Scroll>
            </li>
            <li>
              <LinkRouter to={isLogged ? '/chatroom' : '/login'}>{isLogged ? 'Chats' : 'Entrar'}</LinkRouter>
            </li>
            <li>
              <LinkRouter to={isLogged ? '/' : '/signup'} onClick={logout}>{isLogged ? 'Deslogar' : 'Cadastrar'}</LinkRouter>
            </li>
          </ul>
        </div>
        <div ref={btnRef} className='' onClick={handleMenuOnClick}>
          <span className='one'></span>
          <span className='two'></span>
          <span className='three'></span>
        </div>
      </Toggle>
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
            <LinkRouter to={isLogged ? '/chatroom' : '/login'}>{isLogged ? 'Chats' : 'Entrar'}</LinkRouter>
          </NavLink>
          <NavLink signup>
            <LinkRouter to={isLogged ? '/' : '/signup'} onClick={logout}>{isLogged ? 'Deslogar' : 'Cadastrar'}</LinkRouter>
          </NavLink>
        </ul>
      </NavBar>
    </>
  );
};

const Toggle = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    & div {
      width: 2.5rem;
      height: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 100;
      
      & .one,
      & .two,
      & .three {
        background: white;
        width: 100%;
        height: 3px;
        transition: all .5s;
      }
    }
    
    & .close {
      & .one {
        transform: 
          rotate(-45deg)
          translateY(10px)
          translateX(-10px);
      }
      & .two {
        opacity: 0;
      }

      & .three {
        transform: 
          rotate(45deg)
          translateY(-10px)
          translateX(-10px);
      }
    }

    & ul {
      opacity: 0;
      visibility: hidden;
    }
    
    & .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      background-color: ${colors.logoGreenOne};
      z-index: 10;
      transition: height .3s;
    }
    & .on {
      height: 100vh;

      & ul {
        /* display: block; */
        opacity: 1;
        visibility: visible;
        transition: opacity .3s;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & li, & a {
          list-style: none;
          color: white;
          text-decoration: none;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }
      }

    }
  }
`

export default Header;
