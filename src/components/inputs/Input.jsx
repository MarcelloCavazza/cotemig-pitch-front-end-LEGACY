import React from 'react';
import PropTypes from 'prop-types';
import MainStyle, {InputStyle} from './MainStyle';
import Label from './Label';

const Input = ({children, placeholder, type, id, value, onChange, isRequired, name}) => {
  return (
    <>
      <MainStyle />
      <InputStyle width={400}>
        <input
          name={name}
          className='styled input'
          onChange={onChange} 
          type={type}
          id={id}
          value={value} 
          required={isRequired} 
          placeholder={placeholder}/>
        <Label id={id} isRequired={isRequired}>{children}</Label>
      </InputStyle>
    </>
  )
}

Input.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool
}

Input.defaultProps = {
  type: 'text',
  isRequired: false
}

export default Input;