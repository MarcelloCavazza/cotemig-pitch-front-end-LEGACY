import React from 'react';
import FormContainer from '../components/form_login/FormContainer.styled';
import Input from '../components/form_login/Input';
import Title from '../components/texts/Texts';
import colors from '../styles/colors';
import LoginButton from '../components/button/LoginButton';
import Neumorfismo from '../styles/neumorfismo';
import InputContainer from '../components/containers/InputContainer';
import {Link} from 'react-router-dom'
import { useState } from 'react';

const LogIn = () => {

  const [email, handleEmailChange] = useState(''),
        [password, handlePasswordChange] = useState('');

  return (
    <>
    <Neumorfismo/>
    <FormContainer className='neumorph' method='GET'>
      <Title size={30} color={colors.green}>Log In</Title>
      <div className='href'>
        <Link to='/signup'>Não tem uma conta? Faça o cadastro aqui.</Link>
      </div>
      <InputContainer>
        <Input 
          event={event => handleEmailChange(event.target.value)} 
          value={email} 
          type='email' 
          id='userEmail' 
          isRequired>
            Email
        </Input>
        <Input 
          event={event => handlePasswordChange(event.target.value)} 
          value={password} 
          type='password' 
          id='userPassword' 
          isRequired
          >
            Senha
        </Input>
      </InputContainer>
    <LoginButton primary>Entrar</LoginButton>
    </FormContainer>
    </>
  )
}

export default LogIn;
