import React from 'react'
import Title from '../../texts/Title'
import Text from '../Text'
import styled from 'styled-components'
import {CTTSpan} from '../welcome/HelloContent'

const Info = () => {
  return (
    <Style>
      <Title size={3}>Sobre Nós</Title>
      
      <Text>Aposto que você cansou de perder seu tempo procurando um advogado para consultoria. Já imaginou uma plataforma online, 24/7, confiável, segura e prática? Bom, você está à procura da <CTTSpan>Consultoria Tech Themis</CTTSpan>.
      </Text>
      <br />
      <Text>Com foco na sua segurança e privacidade de dados, com políticas empresariais seguindo à risca a LGPD e a OAB! Onde você pode encontrar advogados da sua região qualificados e eficientes. E sabe o melhor de tudo? Você consegue fazer isso completamente de graça Com uma vasta variedade de advogados, para atender um mesmo tipo de processo que você deseje, te dando um grande leque de opções para a resolução de seu problema. Por isso marque já sua consultoria!
      </Text>

    </Style>
  )
}

const Style = styled.div`
  display: flex;
  flex-flow: wrap column;
`

export default Info