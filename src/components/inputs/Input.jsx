import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../global-styles/colors";

const Input = ({
  children,
  type,
  id,
  value,
  onChange,
  isRequired,
  name,
  autoComplete,
  minLenght,
  maxLenght
}) => {
  return (
    <Box>
      <input
        name={name}
        onChange={onChange}
        type={type}
        id={id}
        value={value}
        required={isRequired}
        placeholder={children}
        autoComplete={autoComplete}
        minLength={minLenght}
        maxLength={maxLenght}
      />
    </Box>
  );
};


const Box = styled.div`
  width: 100%;
  height: 3rem;
  border: 2px solid ${colors.disabledInput};
  border-radius: 0.3rem;

  & input {
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
`;

Input.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
};

Input.defaultProps = {
  type: "text",
  isRequired: false,
};

export default Input;
