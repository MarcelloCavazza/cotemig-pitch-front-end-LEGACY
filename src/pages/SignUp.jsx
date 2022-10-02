import React from 'react';
import FormContainer from '../components/containers/FormContainer';
import Input from '../components/inputs/Input';
import Title from '../components/texts/Texts';
import colors from '../global-styles/colors';
import Button from '../components/button/Button';
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

  
  const onChange = (e) => { setValues({...values, [e.target.name]: e.target.value}); };

  const createAccont = async (e) => {  // Restrito apenas para a equipe do backend, frontend devs, favor não mexer.
    e.preventDefault()

    const authApi = AuthAPI()
    try {
      const result  = await authApi.post("/create",
      JSON.stringify({
          ...values
      }))
      const userId = result.data.id
      const userToken = result.data.token

      const clientApi = ClientAPI(userToken)
      try {
        const email = document.querySelector('#userEmail').value
        const cpf = document.querySelector('#userCpf').value
        const name = document.querySelector('#userName').value
        const password = document.querySelector('#userPassword').value
        const telephone = document.querySelector('#userTelephone').value

        clientApi.post("/create",
          JSON.stringify({
            optionalId: userId,
            name,
            cpf,
            email,
            password,
            telephone
          })).then((result) => {
            const response = result.data
            const cookies = new Cookies()
            if (response.is_active) {
              cookies.set('userData', {
                userId,
                userToken,
                email
              }, {
                path: '/'
              })
            }
            window.location.href = '/logged'
          })
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error) 
    }
  }
  
  return (
  <>
    <FormContainer className='neumorph' method={header.method} onSubmit={createAccont}>
      <Title size={30} color={colors.lightLogoOne}>{header.title}</Title>
      <div className='href'>
        <Link to={header.link}>{header.labelTitle}</Link>
      </div>
      <InputContainer>
        <Input type='text' name='name' id='userName' isRequired>Nome</Input>
        <Input type='email' name='email' id='userEmail' isRequired>Email</Input> 
        {/* Deixar o input email como type text para o css funcionar como deve, validação de emaildeverá ser manual */}
        <Input type='text' name='telephone' id='userTelephone' isRequired>Telefone</Input>
        <Input type='text' name='cpf' id='userCpf' isRequired>CPF</Input>
        <Input type='text' name='birthday' id='userBirthday' isRequired>Data de nascimento</Input>
        <Combobox title='Sexo' name='gender' id='userGender' onChange={onChange} isRequired>
          <Option value='masculino'>Masculino</Option>
          <Option value='feminino'>Feminino</Option>
          <Option value='outro'>Outro</Option>
        </Combobox>
        <Input type='password' name='password' id='userPassword' isRequired>Senha</Input>
        <Input type='password' name='confirmPassword' id='userConfPassword' isRequired>Confirmar Senha</Input>
      </InputContainer>
    <Button primary>{header.button}</Button>
    </FormContainer>
  </>
  )
}

export default SignUp;