import React from 'react';
import FormContainer from '../components/containers/FormContainer';
import Input from '../components/inputs/Input';
import Title from '../components/texts/Texts';
import colors from '../styles/colors';
import LoginButton from '../components/button/LoginButton';
import Neumorfismo from '../styles/neumorfismo';
import InputContainer from '../components/containers/InputContainer';
import {Link} from 'react-router-dom'
import { useState } from 'react';

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
    setValues({...values, [e.target.name]: e.target.value});
    console.log(values)
  }
   
  return (
  <>
    <Neumorfismo/>
    <FormContainer className='neumorph' method={header.method} onSubmit={(e) => e.preventDefault()}>
      <Title size={30} color={colors.green}>{header.title}</Title>
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
    <LoginButton primary>{header.button}</LoginButton>
    </FormContainer>
  </>
  )
}


export default LogIn;
