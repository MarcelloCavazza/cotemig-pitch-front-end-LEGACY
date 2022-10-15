import React from 'react'
import styled from 'styled-components'
import colors from '../../../global-styles/colors'
import { ContactName, ContactLastMessage } from '../navigation/ContactTexts'
import ProfileImage from '../ProfileImage'

const Contact = ({onClick, lastMessage, contactName, contactImage, contactId}) => {

  return (
    <Container onClick={onClick} >
      <div className="contact-container">
        <ProfileImage src={contactImage} width={60} height={60} outline />
        <div className='contact-info'>
          <ContactName>{contactName}</ContactName>
          <ContactLastMessage>{lastMessage}</ContactLastMessage>
        </div>
      </div>
      <Bubble></Bubble>
    </Container>
  )
}

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  padding: 0 1.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255,255,255,0);

  &:hover {
    background-color: rgba(255,255,255,0.05);
  }

  &:active,
  &:focus {
    background-color: rgba(255,255,255,0.1);
  }

  & .contact-container {
    display: flex;
    align-items: center;

    & .contact-info{
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
    }
  }
`
const Bubble = styled.div`

  width: 15pt;
  padding: 2pt;
  font-weight: bold;
  font-size: 10pt;
  color: white;
  background-color: ${colors.logoGreenOne};
  display: ${props => props.children ? 'grid' : 'none'};
  place-items: center;
  border-radius: 50%;
`

export default Contact