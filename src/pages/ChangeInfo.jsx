import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Input from '../components/inputs/Input';
import InputContainer from '../components/containers/InputContainer';
import FormButton, {ButtonContainer} from '../components/buttons/FormButton'
import FormContainer from '../components/containers/FormContainer';
import Title from '../components/texts/Title';
import Dropdown from '../components/inputs/Dropdown'
import DropdownItem from '../components/inputs/DropdownItem'
import colors from '../global-styles/colors';
import GridContainer from '../components/containers/GridContainer';

const ChangeInfo = () => {
  const header = {
    method: 'PUT',
    title: 'Mudar Informações',
    label: 'Mude as informações do seu perfil aqui.',
    buttonEnter: 'Atualizar',
    buttonBack: 'Voltar'
  };

  return (
    <GridContainer center>
      <FormContainer
        method={header.method}>
          <Title size={2} color={colors.logoGreenOne}>
            {header.title}
          </Title>
          <div className="obligatory">
            <span>{header.label}</span>
          </div>
          <InputContainer>
            <Input
              type="text"
              id="userName"
              isRequired
            >
              Nome
            </Input>
            <Input
              type="text"
              id="userEmail"
              isRequired
            >
              Email
            </Input>
            <Input
              type="text"
              id="userTelephone"
              isRequired
              autoComplete='off'
              
            >
              Telephone
            </Input>
            <Input
              type="text"
              id="userCpf"
              isRequired
            >
              CPF
            </Input>
            <Dropdown name="gender" title="Sexo" id="userGender">
              <DropdownItem value="masculino">Masculino</DropdownItem>
              <DropdownItem value="feminino">Feminino</DropdownItem>
              <DropdownItem value="outro">Outro</DropdownItem>
            </Dropdown>
          </InputContainer>
          <ButtonContainer>
            <FormButton>
              <Link to='/'>{header.buttonBack}</Link>
            </FormButton>
            <FormButton primary>
              {header.buttonEnter}
            </FormButton>
          </ButtonContainer>
      </FormContainer>
    </GridContainer>
  )
}

export default ChangeInfo