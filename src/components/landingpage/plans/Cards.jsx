import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Cards = ({plans}) => {
  
  return (
    <CardContainer>
      {
        plans.map((plan, index) =>
          <Card 
            key={index}
            {...plan}
          />  
        )
      }
    </CardContainer>
  )
}

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export default Cards