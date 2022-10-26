import React, { useState } from 'react'
import Section from './style.js' 
import Title from '../../texts/Title'
import ContactLabel from './ContactLabel.jsx'
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
import LandingButton from '../../buttons/LandingButton'
import ULine from '../ULine'
import mail from '../../../assets/icons/mail.png'
import call from '../../../assets/icons/call.png'
import face from '../../../assets/icons/face.png'
import insta from '../../../assets/icons/insta.png'
import link from '../../../assets/icons/linkedin.png'

const Contact = ({id}) => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    title: '',
    text: ''
  });

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  return (
  <Section id={id}>
    <div className="message-container">
      <Title size={1.4}>Entre em contato com a gente!</Title>
      <div className="input-container">
        <input type="text" placeholder='Nome' onChange={onChange} />
        <input type="email" placeholder='Email' onChange={onChange} />
        <input type="text" placeholder='Assunto' onChange={onChange} />
        <textarea cols="30" rows="10" placeholder='Mensagem' onChange={onChange}></textarea>
      </div>
      <hr />
      <div className="contact-container">
        <ContactLabel value='contato@techthemis.com' icon={<AiOutlineMail />}/>
        <ContactLabel value='(31) 3259-0984' icon={<AiOutlinePhone />}/>
      </div>
      <LandingButton button type='submit'>Enviar</LandingButton>
    </div>
  </Section>
 )
}

export default Contact