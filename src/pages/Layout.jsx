import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../components/containers/Container.jsx'
import styled from 'styled-components';

const Layout = () => {
  return (
    <Container>
      <SOutlet>
        <Outlet />
      </SOutlet>
    </Container>
  )
}

const SOutlet = styled.div`
  display: grid;
  place-items: center;
`

export default Layout;