import styled from "styled-components";
import colors from "../../../global-styles/colors";
import opacity from './keyframes.js'

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;


  & .section-container {
    display: grid;
    place-items: center start;
    place-content: space-around;
    min-height: 100vh;
  }

  & .themis {
    width: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Polygon */
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    /* animation-name: ${opacity};
    animation-duration: 3s;
    animation-timing-function: ease-in-out; */
    background-color: ${colors.logoGreenOne};
    clip-path: var(--polygon);
    z-index: -1;
  }
  /* EndPolygon */

  @media only screen and (max-width: 1024px) {
    & .themis,
    &:before{
      display: none;
      overflow: none;
    }

    & .section-container {
      align-items: center;
    }

    & div span {
      width: 100%;
    }
  }

`;

export const HelloTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  & h2 {
    font-size: 2rem;
    font-weight: bold;
    color: white;
  }

  & .texts,
  & h2 {
    margin-bottom: 1.3rem;
  }

  & .texts span:nth-child(1){
    margin-bottom: 1rem;
  }

  & video {
    margin: .8rem 0 1.3rem 0;
    border: 4px solid transparent;
    outline: 3px solid ${colors.logoGreenOne};
    border-radius: 0.5rem;
  }

  & .button-container {
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  @media only screen and (max-width: 1024px) {
    & {
      align-items: center;
    }

    & h2 {
      text-align: center;
    }
  }

  @media only screen and (max-width: 530px) {
    & .button-container > :nth-child(1) {
      margin-bottom: 1rem;
    }
  }
`;

export const CTTSpan = styled.span`
  font-weight: bold;
  color: ${colors.logoGreenOne};
`

export const SocialLinksNav = styled.ul`
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

export const NavBar = styled.nav`
  & ul {
    display: flex;
    justify-content: left;
    border-left: 5px solid ${colors.logoGreenOne};
    padding-left: .5rem;
  }

  @media only screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export const NavLink = styled.li`
  list-style: none;
  margin: 0 .5rem;
  border-radius: .5rem;
  border: 2px solid ${props => (props.login || props.signup) ? colors.logoGreenOne : 'transparent'};
  background-color: ${props => props.signup ? colors.logoGreenOne : 'transparent'};
  
  & a {
    color: ${(props) =>
      props.primary 
        ? colors.logoGreenOne 
        : colors.webLinks
    };
    text-decoration: none;
    padding: ${props => (props.login || props.signup) ? '5px 10px' : '5px 2px'};
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:active{
    outline: 3px solid ${
      props => 
      (props.login || props.signup) 
      ? `${colors.logoGreenTwo}` 
      : 'transparent'};
  }

  & a:hover {
    color: ${props => props.signup ? 'black' : ''};
    text-decoration: underline;
    cursor: pointer;
  }
`