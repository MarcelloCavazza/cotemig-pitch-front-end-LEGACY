import React from 'react'
import Style from './style'
import themis from '../../../assets/completo.png'

const About = () => {
  return (
    <>
      <Style />
      <div className="sobreempresa" id="sobreem">
        <div className="imagem">
            <img src={themis} alt="" />
        </div>
        <div className="textosobre">
            <h2>CTT</h2>
            <p>Aposto que você cansou de perder seu tempo procurando um advogado para consultoria.
                Já imaginou uma plataforma online, 24/7, confiável, segura e prática? 
                Bom, você está à procura da CTT, Consultoria TechThemis.
                Com foco na sua segurança e privacidade de dados, com políticas empresariais seguindo à risca a LGPD e a OAB!
                Onde você pode encontrar advogados da sua região qualificados e eficientes.
                E sabe o melhor de tudo? Você consegue fazer isso completamente de graça
                Com uma vasta variedade de advogados para atender um mesmo tipo de processo que você deseje, te dando um grande leque de opções para a resolução de seu problema.
                Por isso marque já sua consultoria!
            </p>
        </div>
    </div> 
    </>
  )
}

export default About