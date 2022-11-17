import React from "react";
import FormContainer from "../components/containers/FormContainer";
import Input from "../components/inputs/Input";
import Title from "../components/texts/Title";
import colors from "../global-styles/colors";
import FormButton, { ButtonContainer } from "../components/buttons/FormButton";
import InputContainer from "../components/containers/InputContainer";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "universal-cookie";
import { AuthAPI } from "../data/api/hooks/services/AuthService";
import GridContainer from "../components/containers/GridContainer";
import Redirect from "../components/links/Redirect";

const Login = () => {
  const [values, setValues] = useState({
    userEmail: "",
    userPassword: "",
  });

  const header = {
    formMethod: "GET",
    formTitle: "Entrar",
    signupLink: "/signup",
    signupTitle: "Não tem uma conta? Cadastre aqui.",
    changeLink: '/change-password',
    changeTitle: 'Esqueceu a senha?',
    buttonEnter: "Entrar",
    buttonBack: "Voltar",
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLoginAction = async (e) => {
    e.preventDefault();
    let emailValue = document.querySelector("#userEmail").value;
    let passwordValue = document.querySelector("#userPassword").value;
    const authAPI = AuthAPI();
    authAPI
      .post(
        "/auth",
        JSON.stringify({
          email: emailValue,
          password: passwordValue,
        })
      )
      .then((result) => {
        const response = result.data;
        if (response != "Wrong Credentials" && response != "") {
          const cookies = new Cookies();
          cookies.remove("userData");
          cookies.set(
            "token",
            {
              token: response.token,
            },
            {
              path: "/",
            }
          );
          window.location.href = "/";
        } else {
          alert("Senha ou Email incorreto(s)");
        }
      })
      .catch((error) => {
        alert("Conta não existe.", error);
      });
  };

  return (
    <GridContainer center>
      <FormContainer
        method={header.formMethod}
        onSubmit={handleLoginAction}
      >
        <Title size={2} color={colors.logoGreenOne}>
          {header.formTitle}
        </Title>
        <Redirect left link={header.signupLink}>{header.signupTitle}</Redirect>
        <InputContainer>
          <Input
            type="email"
            name="email"
            id="userEmail"
            onChange={onChange}
            isRequired
          >
            Email
          </Input>
          <Input
            type="password"
            name="password"
            id="userPassword"
            onChange={onChange}
            isRequired
          >
            Senha
          </Input>
        </InputContainer>
        <span className="obligatory">Todos os campos são obrigatórios *</span>
        <Redirect color='lightgray' center link={header.changeLink}>{header.changeTitle}</Redirect>
        <ButtonContainer>
          <FormButton>
            <Link to="/">{header.buttonBack}</Link>
          </FormButton>
          <FormButton primary>{header.buttonEnter}</FormButton>
        </ButtonContainer>
      </FormContainer>
    </GridContainer>
  );
};

export default Login;
