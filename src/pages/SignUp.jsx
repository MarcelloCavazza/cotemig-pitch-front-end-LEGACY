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

const SignUp = () => {

  const
    [email, handleEmailChange] = useState(''),
    [password, handlePasswordChange] = useState(''),
    [name, handleNameChange] = useState(''),
    [gender, handleGenderChange] = useState(''),
    [cpf_cnpj, handleCpfCnpjChange] = useState(''),
    [birthday, handleBirthdayChange] = useState('');

  return (
    <>
      <Neumorfismo />
      <FormContainer className='neumorph' method='POST'>
        <Title size={30} color={colors.green}>Sign Up</Title>
        <div className="href">
          <Link to='/login'>Já tem uma conta? Faça o login aqui.</Link>
        </div>
        <InputContainer>
          <Input 
            type='text' 
            event={event => handleNameChange(event.target.value)} 
            value={name}
            id='userName'
            isRequired>
              Nome completo
          </Input>
          <Input 
            type='email' 
            event={event => handleEmailChange(event.target.value)} 
            value={email}
            id='userEmail'
            isRequired>
              Email
          </Input>
          <Input 
            type='text' 
            event={event => handleCpfCnpjChange(event.target.value)} 
            value={cpf_cnpj}
            id='userCpfCnpj'
            isRequired>
              CPF/CNPJ
          </Input>
          <Input 
            type='date' 
            event={event => handleBirthdayChange(event.target.value)} 
            value={birthday}
            id='userBirthday'
            isRequired>
              Data de nascimento
          </Input>
          <Input 
            type='text' 
            event={event => handleGenderChange(event.target.value)} 
            value={gender}
            id='userGender'
            isRequired>
              Sexo
          </Input>
          <Input 
            type='password' 
            event={event => handlePasswordChange(event.target.value)} 
            value={password}
            id='userPassword'
            isRequired>
              Criar senha
          </Input>
        </InputContainer>
        <LoginButton primary>Cadastrar</LoginButton>
      </FormContainer>
    </>
  )
}

export default SignUp;