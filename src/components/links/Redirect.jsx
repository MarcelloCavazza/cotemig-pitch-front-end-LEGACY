import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../global-styles/colors';

const Redirect = ({children, link, color, right, left}) => {
  return (
    <Style right={right} left={left} color={color}>
      <Link to={link}>{children}</Link>
    </Style>
  )
}

const Style = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${props => props.right ? 'start' : props.left ? 'end' : 'center'};
  align-items: center;

  & a {
    color: ${p => p.color || colors.webLinksBlue};
  }
`

export default Redirect