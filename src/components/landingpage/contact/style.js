import styled from "styled-components";
import colors from '../../../global-styles/colors'

const Container = styled.div`

  & * {
    font-family: inherit;
  }

  & .contact{
    display: flex;
    margin-top: 200px;
    z-index: 1000;
    position: relative;
    min-width: 1100px;
    min-height: 550px;
  }

  & .contact .contactInfo{
    top: 40px;
    position: absolute;
    width: 350px;
    height: calc(100% - 80px);
    border-radius: 10px;
    background-color: ${colors.logoGreenOne};
    z-index: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-between;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, .15);
  }

  & .contact .contactInfo h2{
    color: white;
    font-size: 24px;
    font-weight: 500;
  }

  & .contact .contactInfo ul.info{
    position: relative;
    margin: 20px 0;
  }

  & .contact .contactInfo ul.info li{
    position: relative;
    list-style: none;
    margin: 20px 0;
    display: flex;
    cursor: pointer;
  }

  & .contact .contactInfo ul.info li span:nth-child(1){
    width: 30px;
    min-width: 30px;
  }

  & .contact .contactInfo ul.info li span:nth-child(1) img{
    max-width: 100%;
    filter: invert(1);
  }

  & .contact .contactInfo ul.info li span:nth-child(2){
    color: white;
    margin-left: 10px;
    font-weight: 300;
  }

  & .contact .contactInfo ul.sci{
    display: flex;
    position: relative;
  }

  & .contact .contactInfo ul.sci li{
    list-style: none;
    margin-right: 15px;
  }

  & li {
    display: flex;
    align-items: center;
  }
  

  & .contact .contactInfo ul.sci li a{
    text-decoration: none;
  }

  & .contact .contactInfo ul.sci li a img{
    filter: invert(1);
  }

  & .contact .contactForm{
    padding: 70px 50px;
    position: absolute;
    padding-left: 250px;
    margin-left: 150px;
    height: 100%;
    width: calc(100% - 150px);
    border-radius: 5px;
    background-color: rgba(255,255,255,0.02);
    box-shadow: 0 0 25px rgba(0, 0, 0, .5);
  }

  & .contact .contactForm h2{
    color: ${colors.logoGreenOne};
    font-weight: 500;
    font-weight: bold;
    font-size: 24px;
  }

  & .contact .contactForm .formbox{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 30px;
  }

  & .contact .contactForm .formbox .input{
    position: relative;
    margin-bottom: 35px;
  }

  & .contact .contactForm .formbox .input.w50{
    width: 47%;
  }

  & .contact .contactForm .formbox .input.w100{
    width: 100%;
  }

  & .contact .contactForm .formbox .input input,
  & .contact .contactForm .formbox .input textarea{
    width: 100%;
    padding: 5px 0;
    font-size: 16px;
    outline: none;
    border: none;
    font-weight: 300;
    background-color: transparent;
    border-bottom: 2px solid ${colors.logoGreenOne};
    color: white;
  }
  
  & .contact .contactForm .formbox .input textarea{
    height: 120px;
    resize: none;
  }

  & .contact .contactForm .formbox .input input[type="submit"]{
    position: relative;
    cursor: pointer;
    background-color: ${colors.logoGreenOne};
    border-radius: 5px;
    color: white;
    border: none;
    max-width: 150px;
    padding: 12px;
  }

  & .contact .contactForm .formbox .input input[type="submit"]:hover{
    background-color: ${colors.logoGreenTwo};
  }
`

export default Container