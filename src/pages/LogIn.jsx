import React from 'react';
import FormContainer from '../components/containers/FormContainer';
import Input from '../components/inputs/Input';
import Title from '../components/texts/Texts';
import colors from '../global-styles/colors';
import Button from '../components/button/Button';
import InputContainer from '../components/containers/InputContainer';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Cookies from 'universal-cookie';
import { AuthAPI } from '../data/api/hooks/services/AuthService';

const LogIn = () => {

  const [values, setValues] = useState({
    userEmail: '',
    userPassword: '',
  })

  const header = {
    method: 'GET',
    title: 'Log In',
    link: '/signup',
    labelTitle: 'Não tem uma conta? Cadastre aqui.',
    button: 'Entrar'
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value}); 
  }

  const login = async (e) => {
    e.preventDefault()
    let emailValue = document.querySelector('#userEmail').value
    let passwordValue = document.querySelector('#userPassword').value
    const authAPI = AuthAPI()
    authAPI.post("/auth", JSON.stringify({
      email: emailValue,
      password: passwordValue
    })).then((result) => {
      const response = result.data
      if (response != 'Wrong Credentials') {
        const cookies = new Cookies()
        cookies.remove('userData')
        cookies.set('userData', {
          token: response.token,
          id: response.id,
          email: response.email,
          isAdmin: response.is_admin ? true : false
        }, {
          path: '/'
        })
        alert('logou')
        window.location.href = '/logged'
      } else {
        alert('Senha ou Email incorreto(s)')
      }
    }).catch((error) => {
        alert('Conta não existe')
    })
  }
   
  return (
  <>
    <FormContainer className='neumorph' method={header.method} onSubmit={login}>
      <Title size={30} color={colors.lightLogoOne}>{header.title}</Title>
      <div className='href'>
        <Link to={header.link}>{header.labelTitle}</Link>
      </div>
      <InputContainer>
        <Input
          type='text'
          name='email'
          id='userEmail'
          isRequired
          onChange={onChange}
        >Email
        </Input>
        <Input
          type='password'
          name='password'
          id='userPassword'
          isRequired
          onChange={onChange}
        >Senha
        </Input>
      </InputContainer>
    <Button primary>{header.button}</Button>
    </FormContainer>
  </>
  )
}


export default LogIn;
