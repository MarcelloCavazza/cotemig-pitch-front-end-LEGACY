import React, { useState } from 'react'
import Container from './style.js'
import Nothing from '../../containers/Nothing'
import LandingButton from '../../buttons/LandingButton'
import mail from '../../../assets/icons/mail.png'
import call from '../../../assets/icons/call.png'
import face from '../../../assets/icons/face.png'
import insta from '../../../assets/icons/insta.png'
import link from '../../../assets/icons/linkedin.png'

const Contact = ({id}) => {

  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: '',
    phonenumber: '',
    text: ''
  });

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  return (
  <Container id={id}>
    <div className="contact">
      <div className="contactInfo">
        <div>
          <h2>Contato</h2>
          <ul className="info">
            <li>
              <span><img src={mail}/></span>
              <span>techthemis@gmail.com</span>
            </li>
            <li>
              <span><img src={call}/></span>
              <span>3259-0984</span>
            </li>
          </ul>
        </div>
        <ul className="sci">
          <li><a href="#"><img src={face}/></a></li>
          <li><a href="#"><img src={insta}/></a></li>
          <li><a href="#"><img src={link}/></a></li>
        </ul>
      </div>
      <div className="contactForm">
        <h2>Envie sua Mensagem</h2>
        <div className="formbox">
          <div className="input w50">
            <input
             type="text" 
             required 
             placeholder="Nome"/>
          </div>
          <div className="input w50">
            <input
             type="text" 
             required 
             placeholder="Sobrenome"
             onChange={onChange}/>
          </div>
          <div className="input w50">
            <input
             type="email" 
             required 
             placeholder="Email"
             onChange={onChange}/>
          </div>
          <div className="input w50">
            <input
             type="text" 
             required 
             placeholder="Telefone"
             onChange={onChange}/>
          </div>
          <div className="input w100">
            <textarea 
              name="" 
              id="" 
              cols="30" 
              rows="4" 
              placeholder="Escreva sua mensagem..."
              required
              onChange={onChange}></textarea>
          </div>
          <form action="/">
            <LandingButton button type='submit'>
              Enviar
            </LandingButton>
          </form>
        </div>
      </div>
    </div>
    <Nothing height={20} />
  </Container>
 )
}

export default Contact