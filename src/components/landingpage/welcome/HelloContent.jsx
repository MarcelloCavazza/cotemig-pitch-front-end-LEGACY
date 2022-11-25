import React from 'react'
import video from "../../../assets/video.mp4";
import LandingButton from "../../buttons/LandingButton";
import Text from '../Text';
import Title from '../../texts/Title'
import { HelloTextContent, CTTSpan } from './style';

const HelloContent = () => {

  // const videoRef = useRef(null);

  // useEffect(() => {
  //   videoRef.current.controls = true;
  //   videoRef.current.volume = 0.1;
  //   videoRef.current.currentTime = 0;
  // }, []);

  return (
    <HelloTextContent>
      <Title size={2}>Consultoria Tech Themis</Title>
      <div className='texts'>
        <Text width={90}>É complicado procurar advogados na internet, mas você já passou por problemas para achar um, que seja confiável e que faça um bom trabalho? Demorou bastante para resolver aquele B.O?</Text>
        <Text width={70}>Pois bem, nós pensamos nesse problema e dedicamos a criar uma solução para ele! A <CTTSpan>Consultoria Tech Themis</CTTSpan> é uma empresa especializada em facilitar o seu contato com advogados de confiança. Oferecemos agiligade com os processos burocrativos, flexibilidade na hora de escolher o advogado perfeito e um atendimento 24/7. Venha conhecer a gente!</Text>
      </div>
      <div className="button-container">
        <LandingButton href='contact'>
          Gostou da Ideia? Nos ajude...
        </LandingButton>
        <LandingButton button>Assistir Vídeo</LandingButton>
      </div>
    </HelloTextContent>
  )
}

export default HelloContent