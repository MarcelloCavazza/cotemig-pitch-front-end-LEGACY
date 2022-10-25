import React from "react";
import Style from "./style";

const Plans = () => {
  return (
    <>
      <Style />
      <h1 id="plano">Planos Para Advogados:</h1>
      <main>
        <div className="caixa">
          <div className="carde neumorph">
            <div className="box">
              <div className="cont">
                <div className="icon">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <h3>Simples</h3>
                <h4>
                  <span>R$</span>9,90
                </h4>
                <ul>
                  <li>
                    <i className="fas fa-check"></i>Acesso ao app
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Remove propagandas
                  </li>
                  <li>
                    <i className="fas fa-times"></i>Notificações Controladas
                  </li>
                  <li>
                    <i className="fas fa-times"></i>Regiões Ilimitadas
                  </li>
                  <li>
                    <i className="fas fa-times"></i>Opção de linkar redes sociais
                  </li>
                </ul>
                <a href="#">Peça agora</a>
              </div>
            </div>
          </div>

          <div className="carde neumorph">
            <div className="box">
              <div className="cont">
                <div className="icon">
                  <i className="fas fa-plane"></i>
                </div>
                <h3>Padrão</h3>
                <h4>
                  <span>R$</span>19,90{" "}
                </h4>
                <ul>
                  <li>
                    <i className="fas fa-check"></i>Acesso ao app
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Remove propagandas
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Notificações Controladas
                  </li>
                  <li>
                    <i className="fas fa-times"></i>Regiões Ilimitadas
                  </li>
                  <li>
                    <i className="fas fa-times"></i>Opção de linkar redes sociais
                  </li>
                </ul>
                <a href="#">Peça agora</a>
              </div>
            </div>
          </div>

          <div className="carde neumorph">
            <div className="box">
              <div className="cont">
                <div className="icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3>Premium</h3>
                <h4>
                  <span>R$</span>39,90
                </h4>
                <ul>
                  <li>
                    <i className="fas fa-check"></i>Acesso ao app
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Remove propagandas
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Notificações Controladas
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Regiões Ilimitadas
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Opção de linkar redes sociais
                  </li>
                </ul>
                <a href="#">Peça agora</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <h1>Taxa Opcional Para Clientes:</h1>
      <main>
        <div className="caixa">
          <div className="carde neumorph">
            <div className="box">
              <div className="cont">
                <div className="icon">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <h3>Taxa</h3>
                <h4>
                  <span>R$</span>9,90
                </h4>
                <ul>
                  <li>
                    <i className="fas fa-check"></i>Remove propagandas
                  </li>
                </ul>
                <a href="#">Peça agora</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Plans;
