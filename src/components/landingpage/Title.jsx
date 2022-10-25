import styled from 'styled-components'

const Title = styled.span`
  color: white;
  font-weight: bold;
  font-size: ${props => props.size ? `${props.size}rem` : '3rem'};
  text-align: center;
  margin-bottom: 1rem;

  
`

export default Title