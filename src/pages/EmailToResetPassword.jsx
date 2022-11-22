import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormButton, { ButtonContainer } from "../components/buttons/FormButton";
import FormContainer from "../components/containers/FormContainer";
import colors from "../global-styles/colors";
import InputContainer from "../components/containers/InputContainer";
import Input from "../components/inputs/Input";
import Title from "../components/texts/Title";

const EmailToResetPassword = () => {
  const [values, setValues] = useState({});
  const header = {
    method: "GET",
    title: "Log In",
    link: "/signup",
    labelTitle: "Não tem uma conta? Cadastre aqui.",
    buttonEnter: "Entrar",
    buttonBack: "Voltar",
  };
  return (
    <>
      <FormContainer className="neumorph" method={header.method}>
        <Title size={2} color={colors.logoGreenOne}>
          Insira seu email para receber as intruções de reset de senha
        </Title>
        <InputContainer>
          <Input type="text" name="email" id="userEmail" isRequired>
            Email
          </Input>
        </InputContainer>
        <ButtonContainer fill>
          <FormButton>
            <Link to="/login">Voltar</Link>
          </FormButton>
          <FormButton primary>Enviar</FormButton>
        </ButtonContainer>
      </FormContainer>
    </>
  );
};

export default EmailToResetPassword;
