import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../styles/colors'

const Input = ({children, type, id, value, placeholder, event, isRequired}) => {
    return (
        <SInput>
            <div>
                <label htmlFor={id}><span>{children}</span></label>
                <input onChange={event} placeholder={placeholder} type={type} id={id} value={value} isRequired={isRequired}/>
            </div>
        </SInput>
    )
}

const SInput = styled.div`
    width: 400px;
    margin: 10px 0;

    & div {
        position: relative;
        height: 50px;
    }

    & input {
        background-color: transparent;
        outline: 0;
        width: 100%;
        height: 100%;
        color: #595f6e;
        padding-top: 25px;
        border: none;
    }
    
    & label {
        color: ${colors.white};
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        pointer-events: none;
        border-bottom: 1px solid white;
    }

    & label:after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0px;
        width: 100%;
        height: 100%;
        border-bottom: 3px solid ${colors.green};
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }

    & span {
        position: absolute;
        bottom: 5px;
        left: 0px;
        transition: all 0.3s ease;
    }

    & input:focus + & label span,
    & input:valid + & label span {
        transform: translateY(-150%); 
        font-size: 14pt;
        color: ${colors.green};
    }
    
    & input, & label {
        font-size: 13pt;
    }

    & input:focus + & label::after,
    & input:valid + & label::after{

    }
    
`

Input.propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    isRequired: PropTypes.bool
}

Input.defaultProps = {
    children: '{label}',
    type: 'text',
    isRequired: false
}


export default Input;