import React from "react";
import PropTypes from "prop-types";
import { InputStyle } from "./style";

const Input = ({
  children,
  type,
  id,
  value,
  onChange,
  isRequired,
  name,
}) => {
  return (
    <>
      <InputStyle>
        <input
          name={name}
          className="styled input"
          onChange={onChange}
          type={type}
          id={id}
          value={value}
          required={isRequired}
          placeholder={children}
        />
      </InputStyle>
    </>
  );
};

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
