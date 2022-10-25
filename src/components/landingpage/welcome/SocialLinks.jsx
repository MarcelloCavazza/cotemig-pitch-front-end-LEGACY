import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SocialLinks = () => {
  return (
    <Nav>
      <li>
        <Link to="/">Facebook</Link>
      </li>
      <li>
        <Link to="/">Linkedin</Link>
      </li>
      <li>
        <Link to="/">Instagram</Link>
      </li>
    </Nav>
  );
};

const Nav = styled.ul`
  grid-area: links;
  width: 20rem;
  display: flex;
  justify-content: space-between;

  & li {
    list-style: none;
  }

  & li a {
    color: #999;
    text-decoration: none;
    font-size: 0.9em;
  }

  & li a:hover {
    color: #f2f2f2;
  }
`;

export default SocialLinks;
