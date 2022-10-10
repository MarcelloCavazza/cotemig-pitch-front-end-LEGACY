import React from 'react'
import styled from 'styled-components';

const Nothing = ({height}) => {
  return (
    <Style height={height} />
  )
}

const Style = styled.div`
  width: 100%;
  height: ${props => props.height ? props.height : 10}vh;
`;

export default Nothing;