import React from 'react'
import styled from 'styled-components'
import braga from '../../../assets/braga.jpeg'
import colors from '../../../global-styles/colors'
import { ContactName } from '../navigation/ContactTexts'
import ProfileImage from '../ProfileImage'


const ChatHeader = () => {
  return (
    <Header>
      <div className='container'>
        <div className="contact-info-container">
          <ProfileImage src={braga} width={50} />
          <ContactName>Braga</ContactName>
        </div>
        <div className="contact-more-options">
        </div>
      </div>
    </Header>
  )
}

const Header = styled.div`
  width: 100%;
  height: 4rem;
  background-color: ${colors.chatroomHeader};
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .container {
    width: 95%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  & .contact-info-container {
    display: flex;
    align-items: center;
  }

  & .contact-more-options img {
    color: white;
  }
`

export default ChatHeader