import React from 'react'
import styled from 'styled-components'
import Title from '../../texts/Title'
import Text from '../Text'
import {ImCross, ImCheckmark} from 'react-icons/im'
import { useEffect } from 'react'
import anime from 'animejs'

const Card = ({color, icon, title, price, positive, negative}) => {

  useEffect(() => {
    anime({
      targets: `#card-animator`,
      scale: [.7, 1],
      opacity: [0, 1],
      duration: 750,
      easing: 'easeInOutCubic',
      delay: anime.stagger(50)
    })
  })

  return (
    <CardStyle id='card-animator' color={color}>
      <div className="card-icon">
        {icon}
      </div>
      <div className="card-info">
        <Title size={1.4}>{title}</Title>
        <Text className='card-price' size={2}>R$ <span>{price}0</span></Text>
        <div className="card-specs">
          {positive.map(pos => 
          <div key={pos} className="card-info-tile">
            <Text size={1}><ImCheckmark /> {pos}</Text>
          </div>
          )}
          {negative.map(neg => 
          <div key={neg} className="card-info-tile">
            <Text size={1}><ImCross /> {neg}</Text>
          </div>
          )}
        </div>
      </div>
      <div className="card-button">
        <a href='/'>Peça agora</a>
      </div>
    </CardStyle>
  )
}

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  aspect-ratio: 3/4;
  width: 20rem;
  padding: 1.3rem 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, .02),
    rgba(0, 0, 0, .05),
    rgba(255, 255, 255, .02)
  );
  
  & .card-icon {
    transition: transform .3s ease-in-out;
    transform: scale(1);
    display: flex;
    font-size: 2.5em;
    padding: 1rem;
    border-radius: 10px;
    color: white;
    text-shadow: 5px 5px black;
    background-color: ${props => props.color};
    & * {
      filter:drop-shadow(2px 2px 1px rgba(0,0,0, .2))
    }
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  }

  & .card-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    & p span {
      font-weight: bold;
      font-size: 2.4rem;
    }
  }

  & .card-button a {
    background-color: ${props => props.color};
    border: 0;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    text-shadow: 0 2px 3px rgba(0,0,0,.5);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    padding: .6rem 1.1rem;
    text-decoration: none;

    &:hover {
      background-color: ${props => props.color}99;
    }
  }

  & .card-info-tile {
    height: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .card-specs {
    height: 7.5rem;
  }
`

export default Card