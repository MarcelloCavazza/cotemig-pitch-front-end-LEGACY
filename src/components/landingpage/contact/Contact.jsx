import React from 'react'
import Section from './style.js' 
import Title from '../../texts/Title'
import styled from 'styled-components'
import colors from '../../../global-styles/colors'
import ContactLabel from './ContactLabel.jsx'
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
import { EmailAPI } from '../../../data/api/hooks/services/EmailService.ts'

const Contact = ({ id }) => {

  const sendEmail = () => {
    const inputName = document.getElementById('inputName').value;
    const inputEmail = document.getElementById('inputEmail').value;
    const inputTitle = document.getElementById('inputTitle').value;
    const inputText = document.getElementById('inputText').value;
    const emailAPI = EmailAPI()
    let dataTosend = JSON.stringify({
        inputName,
        inputEmail,
        inputTitle,
        inputText 
    })
    emailAPI.post('/mailOpinion/opinion',dataTosend)
  }

  return (
  <Section id={id}>
    <div className="message-container">
      <Title size={1.4}>Entre em contato com a gente!</Title>
      <div className="input-container">
        <input type="text" placeholder='Nome' id="inputName"/>
        <input type="email" placeholder='Email' id="inputEmail"/>
        <input type="text" placeholder='Assunto' id="inputTitle"/>
        <textarea cols="30" rows="10" placeholder='Mensagem' id="inputText"></textarea>
      </div>
      <hr />
      <div className="contact-container">
        <ContactLabel value='suporte.brasil@ctt.com' icon={<AiOutlineMail />}/>
        <ContactLabel value='(31) 3259-0984' icon={<AiOutlinePhone />}/>
      </div>
      <Button button type='submit' onClick={sendEmail}>Enviar</Button>
    </div>
  </Section>
 )
}

const Button = styled.button`
  padding: 10px 25px;
  background-color: ${colors.logoGreenOne};
  border-radius: 5px;
  border: 0;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: normal;
  letter-spacing: 1px;
  text-shadow: 0 2px 3px rgba(0,0,0,.5);

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
export default Contact