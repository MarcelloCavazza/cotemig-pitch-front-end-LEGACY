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
  position: absolute;
  left: 150px;
  bottom: 75px;
  animation: left-in var(--duration) var(--fast) forwards;
  animation-delay: 0.2s;
  opacity: 0;
  display: flex;

  & li {
    list-style: none;
  }

  & li a {
    color: #999;
    text-decoration: none;
    margin-right: 30px;
    font-size: 0.9em;
  }

  & li a:hover {
    color: #f2f2f2;
  }
`;

export default SocialLinks;
