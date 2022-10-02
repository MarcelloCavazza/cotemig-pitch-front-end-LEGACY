import React from 'react';
import FormContainer from '../components/containers/FormContainer';
import Input from '../components/inputs/Input';
import Title from '../components/texts/Texts';
import colors from '../global-styles/colors';
import Button from '../components/buttons/Button';
import InputContainer from '../components/containers/InputContainer';
import {Link} from 'react-router-dom'
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

  const inputs = [
    {
      title: 'Email',
      type: 'text',
      name: 'email',
      id: 'userEmail',
      isRequired: true,
    },
    {
      title: 'Senha',
      type: 'password', 
      name: 'password',
      id: 'userPssword',
      isRequired: true,
    },
  ]

  const onChange = (e) => {
  }

  const login = async (e) => {
    e.preventDefault()
    let emailValue = document.querySelector('#userEmail').value
    let passwordValue = document.querySelector('#userPssword').value
    const authAPI = AuthAPI()
    authAPI.post("/auth", JSON.stringify({
      email: emailValue,
      password: passwordValue
    })).then((result) => {
      const response = result.data
      if (response != 'Wrong Credentials' && response != '') {
        const cookies = new Cookies()
        cookies.remove('userData')
        cookies.set('userData', {
          token: response.token,
          id: response.id,
          email: response.email,
          isAdmin: response.is_admin
        }, {
          path: '/'
        })
        alert('logou')
        window.location.href = '/logged'
      } else {
        alert('Senha ou Email incorreto(s)')
      }
    }).catch((error) => {
        alert('Conta nao existe')
    })
  }
   
  return (
  <>
    <FormContainer className='neumorph' method={header.method} onSubmit={login}>
      <Title size={30} color={colors.logoGreenOne}>{header.title}</Title>
      <div className='href'>
        <Link to={header.link}>{header.labelTitle}</Link>
      </div>
      <InputContainer>
        {inputs.map((input, index) => 
        <Input 
          key={index}
          {...input}
          value={values[input.name]}
          onChange={onChange} />)}
      </InputContainer>
    <Button primary>{header.button}</Button>
    </FormContainer>
  </>
  )
}


export default LogIn;
