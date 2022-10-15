import styled from "styled-components";

const SearchInput = styled.input`
  background-color: transparent;
  width: 100%;
  height: 100%;
  font-family: inherit;
  font-size: inherit;
  font-size: 12pt;
  color: white;
  border: 0;
  
  &::placeholder {
    color: rgba(255,255,255,0.5);
  }
  
  &,
  &:active,
  &:focus {
    border: 0;
    outline: 0;
  }
`

export default SearchInput;