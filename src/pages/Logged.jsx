import React, { useEffect, useState } from 'react';
import Neumorfismo from '../styles/neumorfismo';
import Cookies from 'universal-cookie';

const Logged = () => {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setisAdmin] = useState(false)

    useEffect(() => {
        const cookies = new Cookies()
        const userData = cookies.get('userData')
        if (userData) {
            setIsLogged(true)
            if (userData.isAdmin) {
                setisAdmin(true)
            }
        }
    }, [])
    

  return (
    <>
        <Neumorfismo />
        <p style={{ color:'white', display: isLogged ? 'block' : 'none' }}>Usuario esta logado</p>
        <p style={{ color:'white', display: isLogged ? 'none' : 'block' }}>Usuario nao esta logado</p>
        <p style={{ color:'white', display: isAdmin ? 'block' : 'none' }}>Usuario eh admin</p>
    </>
  );
};

export default Logged;
