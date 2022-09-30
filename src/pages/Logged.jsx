import React, { useEffect, useState } from 'react';
import Neumorfismo from '../styles/neumorfismo';
import Cookies from 'universal-cookie';
import LogoutButton from '../components/buttonLogout/LogOutButton';

const Logged = () => {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setisAdmin] = useState(false)
    const [btnStyle, sebtnStyle] = useState('block')
    const cookies = new Cookies()

    useEffect(() => {
        const userData = cookies.get('userData')
        if (userData) {
            setIsLogged(true)
            if (userData.isAdmin) {
                setisAdmin(true)
            }
        }
    }, [isAdmin, isLogged])
    
    const logout = () => {
        setIsLogged(false)
        setisAdmin(false)
        cookies.remove('userData')
        sebtnStyle('none')
    }

  return (
    <>
        <Neumorfismo />
        <p style={{ color:'white', display: isLogged ? 'block' : 'none' }}>Usuario esta logado</p>
        <p style={{ color:'white', display: isLogged ? 'none' : 'block' }}>Usuario nao esta logado</p>
        <p style={{ color:'white', display: isAdmin ? 'block' : 'none' }}>Usuario eh admin</p>
        <br></br>
        <LogoutButton onClick={logout} style={{display: btnStyle, isLogged}}  primary>{'Deslogar'}</LogoutButton>
    </>
  );
};

export default Logged;
