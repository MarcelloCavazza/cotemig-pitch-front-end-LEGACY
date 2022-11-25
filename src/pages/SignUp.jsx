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
import "./cssgeral.css";

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

    const email = document.querySelector("#userEmail").value;
    let cpf = document.getElementById("userCpf").value;

    const name = document.querySelector("#userName").value;
    const userConfPassword = document.querySelector("#userConfPassword").value;
    const password = document.querySelector("#userPassword").value;
    const telephone = document.querySelector("#userTelephone").value;
    const selectInputState = document.getElementById("userState");
    const state =
      selectInputState.options[selectInputState.options.selectedIndex].value;

    if (state.length <= 0) {
      alert("Campo estado deve estar corretamente preenchido!");
      return;
    }
    if (password.length <= 0 && password.length <= 200) {
      alert("Senha deve estar corretamente preenchida!");
      return;
    }
    if (name.length <= 0 && name.length <= 200) {
      alert("Nome deve estar corretamente preenchido!");
      return;
    }
    if (telephone.length <= 0 && telephone.length <= 15) {
      alert("Telefone deve estar corretamente preenchido!");
      return;
    }
    if (cpf.length <= 0) {
      alert("CPF deve estar corretamente preenchido!");
      return;
    }
    if (email.length <= 0 && email.length <= 150) {
      alert("Email deve estar corretamente preenchido!");
      return;
    }

    if (cpf.length > 14) {
      alert("CPF maior que o normal!");
      return;
    }
    if (cpf.length < 11) {
      alert("CPF menor que o normal!");
      return;
    }

    if (userConfPassword != password) {
      alert("As senhas nao coincidem");
      return;
    }

    const authApi = AuthAPI();
    try {
      const result = await authApi.post(
        "/create",
        JSON.stringify({
          email,
          password,
        })
      );
      const userId = result.data.id;
      const userToken = result.data.token;

      console.log(userToken);
      const clientApi = ClientAPI(userToken);
      try {
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
              seccional: state,
            })
          )
          .then((result) => {
            const response = result.data;
            const cookies = new Cookies();
            if (response.is_active) {
              cookies.set("token", userToken, {
                path: "/",
              });
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
        onSubmit={(e) => e.preventDefault()}
      >
        <Title size={2} color={colors.logoGreenOne}>
          {header.title}
        </Title>
        <div className="href textLInk">
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
            type="number"
            name="cpf"
            id="userCpf"
            onChange={onChange}
            isRequired
          >
            CPF
          </Input>
          <Input
            type="date"
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
          <Combobox title="Estado" name="userState" id="userState">
            <Option value="AC">AC</Option>
            <Option value="AL">AL</Option>
            <Option value="AP">AP</Option>
            <Option value="AM">AM</Option>
            <Option value="BA">BA</Option>
            <Option value="CE">CE</Option>
            <Option value="DF">DF</Option>
            <Option value="ES">ES</Option>
            <Option value="GO">GO</Option>
            <Option value="MA">MA</Option>
            <Option value="MT">MT</Option>
            <Option value="MS">MS</Option>
            <Option value="MG">MG</Option>
            <Option value="PA">PA</Option>
            <Option value="PB">PB</Option>
            <Option value="PR">PR</Option>
            <Option value="PE">PE</Option>
            <Option value="PI">PI</Option>
            <Option value="RJ">RJ</Option>
            <Option value="RN">RN</Option>
            <Option value="RS">RS</Option>
            <Option value="RO">RO</Option>
            <Option value="RR">RR</Option>
            <Option value="SC">SC</Option>
            <Option value="SP">SP</Option>
            <Option value="SE">SE</Option>
            <Option value="TO">TO</Option>
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
        <ButtonContainer fill>
          <button
            className="buttonEnter"
            onClick={(_) => (window.location.href = "/")}
          >
            {header.buttonBack}
          </button>
          <button className="buttonEnter" onClick={createAccount}>
            {header.buttonEnter}
          </button>
        </ButtonContainer>
      </FormContainer>
      <Nothing />
    </>
  );
};

export default SignUp;
