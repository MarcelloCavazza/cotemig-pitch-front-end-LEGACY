import styled from 'styled-components'

const ULine = styled.hr`
  width: 60%;
  border: .5px solid #6d6d6d;
  border-radius: 5px;
  margin: ${props => props.margin ? props.margin : 5}vh 0;
`

export default ULine