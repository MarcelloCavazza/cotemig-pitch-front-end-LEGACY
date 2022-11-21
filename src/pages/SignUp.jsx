import React from "react";
import colors from "../global-styles/colors";
import FormContainer from "../components/containers/FormContainer";
import Input from "../components/inputs/Input";
import Title from "../components/texts/Title";
import GridContainer from "../components/containers/GridContainer";
import Redirect from "../components/templates/Redirect";
import FormButton, { ButtonContainer } from "../components/buttons/FormButton";
import InputContainer from "../components/containers/InputContainer";
import Dropdown from "../components/inputs/Dropdown";
import DropdownItem from "../components/inputs/DropdownItem";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AuthAPI } from "../data/api/hooks/services/AuthService";
import Cookies from "universal-cookie";
import { mask } from "remask";
import { ClientAPI } from "../data/api/hooks/services/ClientService";

const SignUp = () => {

  const patterns = [
    '(99) 99999-9999',
    '999.999.999-99'
  ]

  const header = {
    formMethod: "POST",
    formTitle: "Cadastrar",
    loginLink: "/login",
    loginTitle: "Não tem uma conta? Cadastre aqui.",
    buttonEnter: "Entrar",
    buttonBack: "Voltar",
  };

  const handleCreateAccount = async (e) => {
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
    <GridContainer center>
      <FormContainer method={header.formMethod} onSubmit={handleCreateAccount}>
        <Title size={2} color={colors.logoGreenOne}>{header.formTitle}</Title>
        <Redirect left link={header.loginLink}>{header.loginTitle}</Redirect>
        <InputContainer>
          <Input type="text" id="userName" isRequired>
            Nome
          </Input>
          <Input type="text" id="userEmail" isRequired>
            Email
          </Input>
          <Input type="text" autoComplete='off' maxLength={15} id="userTelephone" isRequired>
            Telefone
          </Input>
          <Input type="text" autoComplete='off' maxLength={14} id="userCpf" isRequired>
            CPF
          </Input>
          <Input type="text" id="userBirthday" isRequired>
            Data de nascimento
          </Input>
          <Dropdown name="gender" id="userGender">
            <DropdownItem value='' selected disabled>Sexo</DropdownItem>
            <DropdownItem value="masculino">Masculino</DropdownItem>
            <DropdownItem value="feminino">Feminino</DropdownItem>
            <DropdownItem value="outro">Outro</DropdownItem>
          </Dropdown>
          <Input name="state" id="userState"  isRequired>
            Estado
          </Input>
          <Input type="password" id="userPassword" isRequired>
            Senha
          </Input>
          <Input type="password" id="userConfPassword" isRequired>
            Confirmar Senha
          </Input>
        </InputContainer>
        <span className="obligatory">Todos os campos são obrigatórios *</span>
        <ButtonContainer>
          <FormButton type='button'><Link to="/">{header.buttonBack}</Link></FormButton>
          <FormButton primary>{header.buttonEnter}</FormButton>
        </ButtonContainer>
      </FormContainer>
    </GridContainer>
  );
};

export default SignUp;
