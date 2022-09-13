import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../styles/colors'

const Input = ({children, type, id, value, handleInputValue, placeholder}) => {
    return (
        <SInput>
            <div className="input">
                <label htmlFor={id}>{children}</label>
                <input placeholder={placeholder} type={type} id={id} value={value}/>
            </div>
        </SInput>
    )
}

const SInput = styled.div`
    background: #999;
    
    .input {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 124px;
    }

    input {
        width: 500px;
        height: 48px;
        border-radius: 15px;
        border: 3px solid black;

    }

    label {
        color: ${colors.black};
    }
`

Input.propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string
}

Input.defaultProps = {
    children: '{label}',
    type: 'text'
}


export default Input;