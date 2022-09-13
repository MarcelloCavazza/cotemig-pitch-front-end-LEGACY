import React from 'react';
import FormContainer from '../components/form_login/FormContainer';
import Input from '../components/form_login/Input';
import Title from '../components/texts/Texts';
import colors from '../styles/colors';
import Redirect from '../components/texts/Redirect';
import {Link} from 'react-router-dom'

const LogIn = () => {
  return (
    <FormContainer>
      <Title size={30} color={colors.green}>Login</Title>
      <Redirect><Link to="/signup">Não tem login? Faça seu cadastro aqui!</Link></Redirect>
      <form method="GET">
        <Input id="userEmail">Usuário</Input>
        <Input id="userPassword">Senha</Input>
      </form>
    </FormContainer>
  )
}



export default LogIn;