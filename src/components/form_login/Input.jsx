import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../styles/colors'

const Input = ({children, placeholder, type, id, value, event, isRequired}) => {
    return (
        <SInput>
            <input onChange={event} type={type} id={id} value={value} required={isRequired} placeholder={placeholder}/>
            <label htmlFor={id}>
                {children}
                <span>{isRequired ? ' *' : ''}</span>
                </label>
        </SInput>
    )
}

const SInput = styled.div`
    position: relative;
    width: 400px;
    height: 55px;
    margin: 15px 0;

    & input {
        font-family: inherit;
        font-size: 14pt;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 3px solid ${colors.disabledInput};
        border-radius: .5rem;
        background: transparent;
        outline: none;
        color: ${colors.white};
        padding: 25px 1rem;
        
        &:focus {
            border-color: ${colors.green};
        }

    }

    & label {
        position: absolute;
        top: -0.7rem;
        font-size: 12pt;
        font-weight: bold;
        left: 0.7rem;
        padding: 0 .4rem;
        color: white;
        cursor: text;
        border-radius: 5px;
        background-color: ${colors.backgroundBlack};
        color: ${colors.disabledInput};
    }

    & input:hover,
    & input:hover ~ label {
        border-color: ${colors.green}88;
    }

    & input:focus {
        border-color: ${colors.green};
    }

    & input:focus ~ label,
    & input:not(:placeholder-shown) ~ label{
        color: ${colors.white};

        & span {
        color: ${colors.tomatoRed};
        }
    }

    & span {
        font-weight: normal;
    }

    
`


Input.propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isRequired: PropTypes.bool
}

Input.defaultProps = {
    children: '{label}',
    type: 'text',
    isRequired: false,
    placeholder: ' '
}


/*
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
*/

export default Input;