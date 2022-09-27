import React from 'react';
import FormContainer from '../components/containers/FormContainer';
import Input from '../components/inputs/Input';
import Title from '../components/texts/Texts';
import colors from '../styles/colors';
import LoginButton from '../components/button/LoginButton';
import Neumorfismo from '../styles/neumorfismo';
import InputContainer from '../components/containers/InputContainer';
import { Combobox, Option } from '../components/inputs/Combobox'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AuthAPI } from '../data/api/hooks/services/AuthService';
import Cookies from 'universal-cookie';
import { ClientAPI } from '../data/api/hooks/services/ClientService';

const SignUp = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    cpf: '',
    birthday: '',
    gender: '',
    password: '',
    telephone: '',
    confirmPassword: '',
  });

  const header = {
    method: 'POST',
    title: 'Sign Up',
    link: '/login',
    labelTitle: 'Já tem uma conta? Faça o login aqui.',
    button: 'Cadastrar'
  };

  const inputs = [
    {
      title: 'Nome',
      type: 'text',
      name: 'name',
      id: 'name',
      isRequired: true,
    },
    {
      title: 'Email',
      type: 'text', 
      name: 'email',
      id: 'userEmail',
      isRequired: true,
    },
    {
      title: 'Telephone',
      type: 'text', 
      name: 'telephone',
      id: 'userTelephone',
      isRequired: true,
    },
    {
      title: 'CPF',
      type: 'text', 
      name: 'cpf',
      id: 'userCpf',
      isRequired: true
    },
    {
      title: 'Data de nascimento',
      type: 'text',
      name: 'birthday',
      id: 'userBirthday',
      isRequired: true
    },
    {
      title: 'Sexo',
      type: 'combobox',
      name: 'gender',
      id: 'userGender',
      options: [
        {
          title: 'Masculino',
          value: 'masculino',
        },
        {
          title: 'Feminino',
          value: 'feminino',
        },
        {
          title: 'Outro',
          value: 'outro',
        }
      ],
      isRequired: true
    },
    {
      title: 'Senha',
      type: 'password', 
      name: 'password',
      id: 'userPassword',
      isRequired: true,
    },
    {
      title: 'Confirmar senha',
      type: 'password',
      name: 'confirmPassword',
      id: 'userConfPassword',
      isRequired: true,
    }
  ];

  const onChange = (e) => { setValues({...values, [e.target.name]: e.target.value}); };

  const createAccont = async (e) => {
    e.preventDefault()

    const authApi = AuthAPI()
    try {
      const result  = await authApi.post("/create",
      JSON.stringify({
          ...values
      }))
      const cookies = new Cookies()
      const userId = result.data.id
      const userToken = result.data.token
      cookies.set('userData', {
        userId,
        userToken
      }, {
        path: '/'
      })

      const clientApi = ClientAPI()
      try {
        const email = values.email
        const cpf = values.cpf
        const name = values.name
        const password = values.password
        const telephone = values.telephone
        const result = await clientApi.post("/create",
          JSON.stringify({
            // name:"Marcello",
            // cpf: "08642081627",
            // email: "marcellocavazzaoliveira@gmail.com",
            // password: "12345678",
            // telephone: "997113886"
            name,
            cpf,
            email,
            password,
            telephone
          }))
        if (result) {
          window.location.href = '/'
        }
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error) 
    }
  }
  
  return (
  <>
    <Neumorfismo />
    <FormContainer className='neumorph' method={header.method} onSubmit={createAccont}>
      <Title size={30} color={colors.green}>{header.title}</Title>
      <div className='href'>
        <Link to={header.link}>{header.labelTitle}</Link>
      </div>
      <InputContainer>{
        inputs.map((input) => 
          input.type == 'text' || input.type ==  'password' || input.type == 'email' ?
            <Input key={input.name} {...input} value={values[input.name]} onChange={onChange} />
          : input.type == 'combobox' ?
            <Combobox key={input.name} onChange={onChange} title={input.title} id={input.id} name={input.name} isRequired >
              {input.options.map((gender) =>
                <Option 
                  key={gender.value} 
                  value={values[gender.value]}>
                    {gender.title}
                </Option>
              )}
          </Combobox>
        : null )}
      </InputContainer>
    <LoginButton primary>{header.button}</LoginButton>
    </FormContainer>
  </>
  )
}

export default SignUp;