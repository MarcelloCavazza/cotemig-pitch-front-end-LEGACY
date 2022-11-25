import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormButton, { ButtonContainer } from "../components/buttons/FormButton";
import FormContainer from "../components/containers/FormContainer";
import colors from "../global-styles/colors";
import InputContainer from "../components/containers/InputContainer";
import Input from "../components/inputs/Input";
import Title from "../components/texts/Title";
import { EmailAPI } from "../data/api/hooks/services/EmailService";

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

  const sendEmail = () => {
    const emailApi = EmailAPI();
    emailApi.post(
      "/resetpassword/send",
      JSON.stringify({
        email: document.getElementById("userEmail").value,
      })
    );
  };
  return (
    <>
      <FormContainer className="neumorph" onSubmit={(e) => e.preventDefault()}>
        <Title size={2} color={colors.logoGreenOne}>
          Insira seu email para receber as intruções de reset de senha
        </Title>
        <InputContainer>
          <Input type="email" name="email" id="userEmail" isRequired>
            Email
          </Input>
        </InputContainer>
        <ButtonContainer fill>
          <button
            className="buttonEnter"
            onClick={(_) => (window.location.href = "/")}
          >
            {header.buttonBack}
          </button>
          <button className="buttonEnter" onClick={sendEmail}>
            {header.buttonEnter}
          </button>
        </ButtonContainer>
      </FormContainer>
    </>
  );
};

export default EmailToResetPassword;
