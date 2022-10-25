import { createGlobalStyle } from "styled-components";

const Style = createGlobalStyle`
  .plano{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  h1{
      color: white;
      text-align: center;
      font-size: 36px;
      margin-top: 160px;
  }

  .caixa{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 1200px;
      padding: 10px 0 50px;
  }

  .caixa .carde{
      position: relative;
      min-width: 320px;
      height: 500px;
      border-radius: 15px;
      margin: 30px;
  }

  .caixa .carde .box{
      top: 20px;
      position: absolute;
      right: 20px;
      left: 20px;
      bottom: 20px;
      border: 2px solid #1e1f23;
      border-radius: 15px;
      background-color: #2a2b2f;
      display: flex;
      align-items: center;
      justify-content: center;
      
  }

  .caixa .carde:hover .box{
      box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.5);
  }

  .caixa .carde .box .cont{
      text-align: center;
      padding: 20px;
  }

  .caixa .carde .box .cont .icon{
      position: relative;
      width: 80px;
      height: 80px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 25px;
      margin-bottom: 10px;
  }

  .caixa .carde .box .cont .icon .fas{
      color: white;
      font-size: 2em;
  }

  .caixa .carde .box .cont h3{
      font-size: 1.8em;
      color: white;
      font-weight: 300;
  }

  .caixa .carde .box .cont h4{
      font-size: 2.5em;
      color: white;
      font-weight: 700;
  }

  .caixa .carde .box .cont h4 span{
      font-size: 0.75em;
      color: white;
      font-weight: 300;
  }

  .caixa .carde .box .cont ul{
      position: relative;
  }

  .caixa .carde .box .cont ul li{
      color: white;
      list-style: none;
      margin: 5px 0;
  }

  .caixa .carde .box .cont ul li .fa-check{ 
      color: #0f0;
  }

  .caixa .carde .box .cont ul li .fa-times{ 
      color: red;
  }

  .caixa .carde .box .cont a{
      text-decoration: none;
      display: inline-block;
      position: relative;
      padding: 8px 20px;
      background-color: red;
      margin-top: 15px;
      color: white;
      font-weight: 400;
      border-radius: 15px;
  }

  .caixa .carde:nth-child(1) .box .cont a, .caixa .carde:nth-child(1) .box .cont .icon{
      background-color: #734124;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .caixa .carde:nth-child(2) .box .cont a, .caixa .carde:nth-child(2) .box .cont .icon{
      background-color: #33A65B;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .caixa .carde:nth-child(3) .box .cont a, .caixa .carde:nth-child(3) .box .cont .icon{
      background-color: #32498C;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`

export default Style