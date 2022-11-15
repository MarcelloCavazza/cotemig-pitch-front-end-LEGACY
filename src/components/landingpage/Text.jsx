import styled from 'styled-components'

const Text = styled.span`
  color: white;
  font-weight: 200;
  letter-spacing: .5px;
  text-align: justify;
  line-height: 1.7rem;
  width: ${props => `${props.width}%` || '100%'};
  font-size: ${props => props.size ? `${props.size}rem` : '1.3rem'};
  display: block;
`

export default Text