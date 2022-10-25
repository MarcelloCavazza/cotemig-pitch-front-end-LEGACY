import styled from 'styled-components'

const Text = styled.p`
  color: white;
  font-weight: 200;
  letter-spacing: .5px;
  text-align: justify;
  font-size: ${props => props.size ? `${props.size}rem` : '1.3rem'};
`

export default Text