import React from "react";
import FormContainer from "../components/containers/FormContainer";
import Input from "../components/inputs/Input";
import Title from "../components/texts/Title";
import colors from "../global-styles/colors";
import FormButton, { ButtonContainer } from "../components/buttons/FormButton";
import InputContainer from "../components/containers/InputContainer";
import { Combobox, Option } from "../components/inputs/Combobox";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AuthAPI } from "../data/api/hooks/services/AuthService";
import Cookies from "universal-cookie";
import { ClientAPI } from "../data/api/hooks/services/ClientService";
import Nothing from "../components/containers/Nothing";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    cpf: "",
    birthday: "",
    gender: "",
    telephone: "",
    password: "",
    confirmPassword: "",
  });

  const header = {
    method: "POST",
    title: "Sign Up",
    link: "/login",
    labelTitle: "Já tem uma conta? Faça o login aqui.",
    buttonEnter: "Cadastrar",
    buttonBack: "Voltar",
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const createAccount = async (e) => {
    e.preventDefault();

    const authApi = AuthAPI();
    try {
      const result = await authApi.post(
        "/create",
        JSON.stringify({
          email: values.email,
          password: values.password,
        })
      );
      const userId = result.data.id;
      const userToken = result.data.token;

      console.log(userToken);
      const clientApi = ClientAPI(userToken);
      try {
        const email = document.querySelector("#userEmail").value;
        const cpf = document.querySelector("#userCpf").value;
        const name = document.querySelector("#userName").value;
        const password = document.querySelector("#userPassword").value;
        const telephone = document.querySelector("#userTelephone").value;

        clientApi
          .post(
            "/create",
            JSON.stringify({
              optionalId: userId,
              name,
              cpf,
              email,
              password,
              telephone,
            })
          )
          .then((result) => {
            const response = result.data;
            const cookies = new Cookies();
            if (response.is_active) {
              cookies.set(
                "token",
                {
                  token: userToken,
                },
                {
                  path: "/",
                }
              );
            }
            window.location.href = "/";
          });
      } catch (error) {
        alert(error);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Nothing />
      <FormContainer
        className="neumorph"
        method={header.method}
        onSubmit={createAccount}
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
            name="name"
            id="userName"
            onChange={onChange}
            isRequired
          >
            Nome
          </Input>
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
            type="text"
            name="telephone"
            id="userTelephone"
            onChange={onChange}
            isRequired
          >
            Telephone
          </Input>
          <Input
            type="text"
            name="cpf"
            id="userCpf"
            onChange={onChange}
            isRequired
          >
            CPF
          </Input>
          <Input
            type="text"
            name="birthday"
            id="userBirthday"
            onChange={onChange}
            isRequired
          >
            Data de nascimento
          </Input>
          <Combobox title="Sexo" name="gender" id="userGender">
            <Option value="masculino">Masculino</Option>
            <Option value="feminino">Feminino</Option>
            <Option value="outro">Outro</Option>
          </Combobox>
          <Input
            type="password"
            name="password"
            id="userPassword"
            onChange={onChange}
            isRequired
          >
            Senha
          </Input>
          <Input
            type="password"
            name="confirmPassword"
            id="userConfPassword"
            onChange={onChange}
            isRequired
          >
            Confirmar Senha
          </Input>
        </InputContainer>
        <ButtonContainer>
          <FormButton>
            <Link to="/">{header.buttonBack}</Link>
          </FormButton>
          <FormButton primary>{header.buttonEnter}</FormButton>
        </ButtonContainer>
      </FormContainer>
      <Nothing />
    </>
  );
};

export default SignUp;
