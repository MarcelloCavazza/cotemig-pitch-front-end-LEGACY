import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../components/containers/Container.jsx";
import styled from "styled-components";

const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Layout;
