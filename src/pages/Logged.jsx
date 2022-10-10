import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import FormButton from '../components/buttons/FormButton';

const Logged = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [isAdmin, setisAdmin] = useState(false)
  const [btnStyle, sebtnStyle] = useState('block')
  const cookies = new Cookies()

  useEffect(() => {
    const userData = cookies.get('userData') 
    if (userData) {
      setIsLogged(true)
      if (userData.isAdmin == 'true') {
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
    <p style={{ color:'white', display: isLogged ? 'block' : 'none' }}>Usuario esta logado</p>
    <p style={{ color:'white', display: isLogged ? 'none' : 'block' }}>Usuario nao esta logado</p>
    <p style={{ color:'white', display: isAdmin ? 'block' : 'none' }}>Usuario eh admin</p>
    <br></br>
    <FormButton onClick={logout} style={{display: btnStyle, isLogged}}  primary>{'Deslogar'}</FormButton>
  </>
  );
};

export default Logged;
