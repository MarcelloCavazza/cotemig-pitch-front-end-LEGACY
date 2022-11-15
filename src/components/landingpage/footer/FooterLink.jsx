import React from 'react'
import styled from 'styled-components'
import colors from '../../../global-styles/colors'

const FooterLink = ({img, href}) => {
  return (
    <Link>
      <a target='_blank' href={href}>{img}</a>
    </Link>
  )
}

const Link = styled.div`
  display: flex;
  margin-right: 1rem;

  & a {
    border-radius: 4px;
    display: flex;
    color: white;
    padding: .6rem;
    background-color: ${colors.footerButton};
  }
`

export default FooterLink