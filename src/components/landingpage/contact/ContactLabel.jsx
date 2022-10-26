import React from 'react'
import styled from 'styled-components'

const ContactLabel = ({value, icon}) => {
  return (
    <Container>
      <span className='icon'>{icon}</span>
      <span className='value'>{value}</span>
    </Container>
  ) 
}

const Container = styled.div`
  color: white;
  display: flex;
  align-items: center;
  margin-bottom: .5rem;

  & span {
    font-weight: 200;
    font-size: 1.1rem;
  }

  & .icon {
    font-size: 2rem;
    margin-right: 1rem;
    display: flex;
    place-items: center;
    place-content: center;
  }
`

export default ContactLabel