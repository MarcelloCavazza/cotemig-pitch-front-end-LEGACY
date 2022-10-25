import React from 'react'
import styled from 'styled-components'
import Title from '../Title'
import Text from '../Text'
import {ImCross, ImCheckmark} from 'react-icons/im'

const Card = ({color, icon, title, price, positive, negative}) => {
  return (
    <CardStyle color={color}>
      <div className="card-icon">
        {icon}
      </div>
      <div className="card-info">
        <Title size={1.4}>{title}</Title>
        <Text size={2}>R$ <span>{price}0</span></Text>
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
  background-color: rgba(255, 255, 255, 0.01);
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  border-radius: 10px;
  backdrop-filter: blur(10px);

  & .card-icon {
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
    text-shadow: 0 1px 1px rgba(0,0,0,.7);
    padding: .6rem 1.1rem;
    text-decoration: none;
  }

  & .card-info-tile {
    height: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default Card