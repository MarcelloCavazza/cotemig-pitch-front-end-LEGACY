import React, { useRef, useState } from 'react'
import SearchIcon from './SearchIcon'
import SearchInput from './SearchInput'
import styled from 'styled-components'
import colors from '../../../global-styles/colors'

const Searchbar = () => {

  const [searchBar, setSearchBar] = useState('');
  const searchBarTouch = useRef(null)
  
  return (
    <Container>
      <div onClick={() => searchBarTouch.current.focus()} className='search-container'>
        <SearchIcon />
        <SearchInput
         ref={searchBarTouch} 
         id='contactSearch' 
         value={searchBar} 
         onChange={(e) => setSearchBar(e.target.value)} 
         placeholder='Procurar contato' />
      </div>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${colors.backgroundDark};
  padding: 1.2rem 1rem;
  display: flex;
  align-items: center;

  & .search-container {
    width: 100%;
    height: 2.5rem;
    background-color: rgba(255,255,255, 0.07);
    border-radius: 5px;
    display: flex;
    align-items: center;
    cursor: text;

    &:hover {
      background-color: rgba(255,255,255,0.1)
    }

    &:focus-within{
      background-color: rgba(255,255,255,0.13)
    }
  }

`

export default Searchbar