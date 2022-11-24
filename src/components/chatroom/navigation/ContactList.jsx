import React from "react";
import styled from "styled-components"

const ContainerEnterChat = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const ContactList = ({ children, callbackButton, refInput}) => {
  return <EnterChat callbackButton={callbackButton} refInput={refInput}/>
  //return <div>{children}</div>;
};

export const EnterChat = ({callbackButton, refInput}) => {
  return(
    <ContainerEnterChat>
      <input type="text" placeholder="Insira o nome da sala" ref={refInput}/>
      <button onClick={callbackButton}>
        Entrar no chat
      </button>
    </ContainerEnterChat>
  )
}

export default ContactList;
