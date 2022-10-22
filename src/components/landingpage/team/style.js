import { createGlobalStyle } from "styled-components";
import colors from "../../../global-styles/colors";

const Style = createGlobalStyle`

  & .equipe{
    position: relative;
    width: 100%;
  }

  & .equipe::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      ${colors.logoGreenOne},
      ${colors.logoGreenTwo}
    );
    clip-path: circle(35% at right 90%);
  }

  & .container{
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
    margin: 40px 0;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 150px;
  }

  & .container .card{
    backdrop-filter: blur(10px);
    width: 300px;
    margin: 20px;
    height: 400px;
    position: relative;
    border-radius: 15px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    );
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    transition: background .2s ease-in;
  }

  & .container .card .contente{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0.5;
    transition: 0.5s;
  }



  & .container .card:hover .contente{
    opacity: 1;
    transform: translateY(-20px);
  }
  & .container .card:hover{
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, .2)
    );
  }

  & .container .card .contente .img{
    position: relative;
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
    border: 10px solid rgba(0, 0, 0, 0.1);
  }

  & .container .card .contente .img img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .container .card .contente .contentBx h3{
    font-size: 18px;
    color: white;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    margin: 20px 0 10px;
    line-height: 1.1em;
  }

  & .container .card .contente .contentBx h3 span{
    font-size: 12px;
    font-weight: 300;
    text-transform: initial;
  }
`;

export default Style;
