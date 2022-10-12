import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Footer from '../components/footer/Footer.jsx';
import PolygonSection from '../components/landingpage/PolygonSection.jsx';
import colors from '../global-styles/colors.js';
import '../global-styles/globalCss.css';

const Home = () => {
  return (
    <>
      <Style />
      <PolygonSection />
      <div className="propaganda">
          <video src="video.mp4" controls={true}></video>
          <img src="assets_img/close.png" className="fechar" alt="" />
          {/* <img src="assets_img/close.png" className="fechar" onClick="toggle();" alt="" /> */}
      </div>
      <span className="menuicon" id="toge"></span>
      {/* <span className="menuicon" id="toge" onClick="menuToge()"></span> */}
      <Footer />
    </>
  )
}

const Style = createGlobalStyle`
.play img{
    margin-right: 10px;
    max-width: 50px;
    width: 18%;
}
/* VIDEO PROPAGANDA */

.propaganda{
    top: 50%;
    left: 50%;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.95);
    width: 100%;
    height: 100%;
    position: fixed;
    visibility: hidden;
    opacity: 0;
    transform: translate(-50%, -50%);
}

.propaganda.active{
    visibility: visible;
    opacity: 1;
}

.propaganda video{
    outline: none;
    max-width: 900px;
}

.propaganda .fechar{
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    filter: invert(1);
    max-width: 32px;
}

/* ANIMAÇÕES */

@keyframes fade-in{
    0%
    {
        opacity: 0;
    }

    100%
    {
        opacity: 1;
    }
}

@keyframes left-in{
    0%
    {
        transform: translateX(-200px);
        opacity: 0;
    }

    100%
    {
        transform: translateX(0px);
        opacity: 1;
    }
}




.sobreempresa{
    background-color: ${colors.backgroundDark};
    display: flex;
    justify-content: center;
    align-items: center;
}


.imagem{
    width: 230%;
}

.imagem img{
    width: 60%;
}

.textosobre{
    width: 180%;
    margin-right: 6%;
}

.textosobre p{
    color: white;
    font-size: 18px;
}

.textosobre h2{
    text-align: center;
    color: #03989E;
    font-size: 50px;
}

aside{
    display: flex;
    align-items: center;

    justify-content: center;
    min-height: 100vh;
    background-color: ${colors.backgroundDark};
}

.contact{
    display: flex;
    margin-top: 200px;
    z-index: 1000;
    position: relative;
    min-width: 1100px;
    min-height: 550px;
}

.contact .contactInfo{
    top: 40px;
    position: absolute;
    width: 350px;
    height: calc(100% - 80px);
    border-radius: 10px;
    background-color: #03989E;
    z-index: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-between;
    box-shadow: 0 20px 225px rgba(0, 0, 0, 0.15);
}

.contact .contactInfo h2{
    color: white;
    font-size: 24px;
    font-weight: 500;
}

.contact .contactInfo ul.info{
    position: relative;
    margin: 20px 0;
}

.contact .contactInfo ul.info li{
    position: relative;
    list-style: none;
    margin: 20px 0;
    display: flex;
    cursor: pointer;
    align-items: flex-start;
}

.contact .contactInfo ul.info li span:nth-child(1){
    width: 30px;
    min-width: 30px;
}

.contact .contactInfo ul.info li span:nth-child(1) img{
    max-width: 100%;
    filter: invert(1);
}

.contact .contactInfo ul.info li span:nth-child(2){
    color: white;
    margin-left: 10px;
    font-weight: 300;
}

.contact .contactInfo ul.sci{
    display: flex;
    position: relative;
}

.contact .contactInfo ul.sci li{
    list-style: none;
    margin-right: 15px;
}

.contact .contactInfo ul.sci li a{
    text-decoration: none;
}

.contact .contactInfo ul.sci li a img{
    filter: invert(1);
}

.contact .contactForm{
    padding: 70px 50px;
    position: absolute;
    padding-left: 250px;
    margin-left: 150px;
    height: 100%;
    width: calc(100% - 150px);
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 50px 50px rgba(0, 0, 0, 0.25);
}

.contact .contactForm h2{
    color: #03989E;
    font-weight: 500;
    font-weight: bold;
    font-size: 24px;
}

.contact .contactForm .formbox{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 30px;
}

.contact .contactForm .formbox .input{
    position: relative;
    margin-bottom: 35px;
}

.contact .contactForm .formbox .input.w50{
    width: 47%;
}

.contact .contactForm .formbox .input.w100{
    width: 100%;
}

.contact .contactForm .formbox .input input,
.contact .contactForm .formbox .input textarea{
    width: 100%;
    padding: 5px 0;
    font-size: 16px;
    outline: none;
    border: none;
    font-weight: 300;
    border-bottom: 2px solid #03989E;
    color: #333;
    resize: none;
}

.contact .contactForm .formbox .input textarea{
    height: 120px;
}

.contact .contactForm .formbox .input input[type="submit"]{
    position: relative;
    cursor: pointer;
    background-color: #03989E;
    border-radius: 5px;
    color: white;
    border: none;
    max-width: 150px;
    padding: 12px;
}

.contact .contactForm .formbox .input input[type="submit"]:hover{
    background-color: #6FBFA2;
}

@media (max-width: 991px)
{
    .menuicon
    {
        background-repeat: no-repeat;
        z-index: 1000;
        cursor: pointer;
        position: fixed;
        top: 40px;
        width: 30px;
        right: 40px;
        height: 30px;
        background-image: url(menu.png);
        background-size: 30px;
        filter: invert(1);
    }
    .menuicon.active{
        background-image: url(close.png);
        background-repeat: no-repeat;
        z-index: 1000;
        background-size: 30px;
        filter: invert(1);
        cursor: pointer;
    }
    .nav{
        position: fixed;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .95);
        z-index: 11;
        flex-direction: column;
        border: none;
        padding: 50px;
    }
    .nav.active{
        left: 0;
    }
    .nav li{
        margin: 5px 0;
    }
    section{
        justify-content: center;
        flex-direction: column-reverse;
    }
    section.content{
        padding: 50px;
        margin-bottom: 30px;
    }
    section.content h2{
        font-size: 1.5em;
    }
    section.content p{
        font-size: 0.8em;
    }
    section.content a{
        font-size: 0.8em;
        padding: 10px;
    }
    section:before{
        clip-path: polygon(0 0, 100% 0, 100% 10%, 0 26%);
    }
    section.img{
        max-width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        padding-right: 0;
    }
    section.img img{
        max-width: 100px;
    }
}
`

export default Home; 