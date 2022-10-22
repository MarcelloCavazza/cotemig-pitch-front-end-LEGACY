import { createGlobalStyle } from 'styled-components'

const Style = createGlobalStyle`

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
    background-color: rgba(255, 255, 255, 0.01);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
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

  & .container .card .contente:hover{
    opacity: 1;
    transform: translateY(-20px);
  }

  & .container .card .contente .img{
    position: relative;
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
    border: 10px solid rgba(255, 255, 255, 0.05);
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
`

export default Style;