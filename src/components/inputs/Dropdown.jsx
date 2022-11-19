import React from "react";
import colors from "../../global-styles/colors";
import styled from "styled-components";
import PropTypes from "prop-types";
import { IoIosArrowDown } from 'react-icons/io'

const Dropdown = ({children, name, id}) => {
  return (
    <Box>
      <select id={id} name={name}>
        {children}
      </select>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 3rem;
  position: relative;
  border: 2px solid ${colors.disabledInput};
  border-radius: 0.3rem;

  & select {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    font-size: inherit;
    padding: .6rem;
    font-family: inherit;
    color: white;
    background-color: transparent;

    &:focus,
    &:focus-within {
      border-color: ${colors.disableInputFocus};
    }
  }
`

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

Dropdown.defaultProps = {
  isRequired: false,
  title: "{{title}}",
};

export default Dropdown