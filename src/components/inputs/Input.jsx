import React from 'react';
import PropTypes from 'prop-types';
import StyleInput from './StyleInput';
import MainStyle from './MainStyle';
import Label from './Label';
import IsRequired from '../extra/IsRequired';

const Input = ({children, placeholder, type, id, value, onChange, isRequired, name}) => {
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
          value={value} 
          required={isRequired} 
          placeholder={placeholder}/>
        <Label id={id}>{children} {isRequired ? <IsRequired /> : null}</Label>
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