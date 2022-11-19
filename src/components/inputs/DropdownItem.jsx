import React from 'react'
import styled from "styled-components";
import colors from '../../global-styles/colors'

const DropdownItem = ({children, value, selected, disabled}) => {
  return (
    <Item disabled={disabled} selected={selected} value={value}>
      {children}
    </Item>
  )
}

const Item = styled.option`
  color: white;
  background-color: ${colors.backgroundDark};
`;

export default DropdownItem