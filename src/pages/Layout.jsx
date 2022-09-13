import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header.jsx';
import Container from '../components/containers/Container.jsx'

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}

export default Layout;