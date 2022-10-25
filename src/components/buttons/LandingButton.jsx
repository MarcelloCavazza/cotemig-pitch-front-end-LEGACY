import React from 'react'
import styled from 'styled-components'
import colors from '../../global-styles/colors'
import { Link } from 'react-scroll'

const LandingButton = ({children, button, type, href}) => {
  return (
    <>
      {
        button ?
        <Button type={type ? type : 'submit'}>
          {children}
        </Button>
        :
        <SLink to={href} spy smooth>
          {children}
        </SLink>
      }
    </>
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

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const SLink = styled(Link)`
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

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export default LandingButton