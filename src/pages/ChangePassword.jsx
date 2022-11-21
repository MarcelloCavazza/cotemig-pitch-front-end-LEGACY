import React from 'react'
import colors from '../global-styles/colors'
import GridContainer from '../components/containers/GridContainer'
import FormContainer from '../components/containers/FormContainer'
import Input from '../components/inputs/Input'
import InputContainer from '../components/containers/InputContainer'
import Title from '../components/texts/Title'
import FormButton, { ButtonContainer } from '../components/buttons/FormButton'
import { Link } from 'react-router-dom'


const ChangePassword = () => {
  const header = {
    formMethod: "PUT",
    formTitle: "Mudar Senha",
    buttonBack: "Cancelar",
    buttonEnter: "Confirmar"
  }

  return (
    <GridContainer center>
      <FormContainer method={header.formMethod}>
        <Title size={2} color={colors.logoGreenOne}>{header.formTitle}</Title>
        <InputContainer>
          <Input type="password" id="userOldPassword" isRequired>Senha antiga</Input>
          <Input type="password" id="userNewPassword" isRequired>Senha nova</Input>
          <Input type="password" id="userConfirmNewPassword" isRequired>Confirmar senha nova</Input>
        </InputContainer>
        <span className="obligatory">Todos os campos são obrigatórios *</span>
        <ButtonContainer>
          <FormButton type='button'><Link to='/'>{header.buttonBack}</Link></FormButton>
          <FormButton primary>{header.buttonEnter}</FormButton>
        </ButtonContainer>
      </FormContainer>
    </GridContainer>
  )
}

export default ChangePassword