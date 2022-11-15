import React from 'react'
import styled from 'styled-components'

const MenuToggle = () => {
  return (
    <Toggle>
      <div>
        <span className='one'></span>
        <span className='two'></span>
        <span className='three'></span>
      </div>
    </Toggle>
  )
}

const Toggle = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {

    & {
      width: 100%;
      display: flex;
      justify-content: end;
    }

    & div {
      display: inline;
      width: 3rem;
      height: 2.5rem;
      
      & span {
        background-color: #fff;
        width: 100%;
        height: 5px;
        margin: 6px auto;
      }
    }
  }
`

export default MenuToggle