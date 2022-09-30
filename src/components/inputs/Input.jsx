import React from 'react';
import PropTypes from 'prop-types';
import StyleInput from './StyleInput';
import MainStyle from './MainStyle';
import Label from './Label';

const Input = ({title, placeholder, type, id, value, onChange, isRequired, name}) => {
  return (
    <>
      <MainStyle />
      <StyleInput width={400}>
        <input
          name={name}
          className='styled input'
          onChange={onChange} 
          type={type}
          id={id} 
          maxLength={14}
          value={value} 
          required={isRequired} 
          placeholder={placeholder}/>
        <Label id={id} isRequired>{title}</Label>
      </StyleInput>
    </>
  )
}

Input.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool
}

Input.defaultProps = {
  children: '{{label}}',
  type: 'text',
  isRequired: false
}

export default Input;