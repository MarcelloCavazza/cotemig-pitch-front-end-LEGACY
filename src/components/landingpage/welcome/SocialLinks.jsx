import React from "react";
import { Link } from "react-router-dom";
import {SocialLinksNav} from './style.js'

const SocialLinks = () => {
  return (
    <SocialLinksNav className='nav'>
      <li>
        <Link to="/">Facebook</Link>
      </li>
      <li>
        <Link to="/">Linkedin</Link>
      </li>
      <li>
        <Link to="/">Instagram</Link>
      </li>
    </SocialLinksNav>
  );
};

export default SocialLinks;
