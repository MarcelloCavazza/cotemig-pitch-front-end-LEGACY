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
import Nothing from "../components/containers/Nothing";

const LogIn = () => {
  const [values, setValues] = useState({
    userEmail: "",
    userPassword: "",
  });

  const header = {
    method: "GET",
    title: "Log In",
    link: "/signup",
    labelTitle: "Não tem uma conta? Cadastre aqui.",
    buttonEnter: "Entrar",
    buttonBack: "Voltar",
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
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
        alert("Conta nao existe");
      });
  };

  return (
    <>
      <Nothing />
      <FormContainer
        className="neumorph"
        method={header.method}
        onSubmit={login}
      >
        <Title size={2} color={colors.logoGreenOne}>
          {header.title}
        </Title>
        <div className="href">
          <Link to={header.link}>{header.labelTitle}</Link>
        </div>
        <InputContainer>
          <Input
            type="text"
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
        <ButtonContainer fill>
          <FormButton>
            <Link to="/">{header.buttonBack}</Link>
          </FormButton>
          <FormButton primary>{header.buttonEnter}</FormButton>
        </ButtonContainer>
        <div className="href">
          <Link to={"/email-reset-password"}>
            Esqueceu sua senha? Clique aqui.
          </Link>
        </div>
      </FormContainer>
    </>
  );
};

export default LogIn;
