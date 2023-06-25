
import Navbar from "../../components/Navbar/Navbar"
import home from "../../images/home.jpg";

import './Inicio.css';

function Inicio (){
    return(
        <main>
             <div classNameName="container-fluid">
          
          <div id="mainSlider" classNameName="carousel slide" data-ride="carousel">
            <ol classNameName="carousel-indicators">
              <li data-target="#mainSlider" data-slide-to="0" classNameName="active"></li>
              <li data-target="#mainSlider" data-slide-to="1"></li>
              <li data-target="#mainSlider" data-slide-to="2"></li>
            </ol>
            <div classNameName="carousel-inner">
              <div classNameName="carousel-item active">
                <img src={home} classNameName="d-block w-100" alt="Projetos de e-commerce"/>
    
                <div classNameName="carousel-caption d-md-block">
                  <h1>Quer criar um e-commerce?</h1>
                  <p>Conte conosco, temos mais de 30 lojas no portfólio.</p>
                  <a href="#" classNameName="main-btn">Ver portfólio</a>
                </div>
              </div>
              <div classNameName="carousel-item">
                <img src={home} className="d-block w-100" alt="Engenharia de software"/>
                <div classNameName="carousel-caption d-md-block">
                  <h1>Está querendo tirar o projeto do papel?</h1>
                  <p>Nossa equipe de engenharia de software está pronta para lhe atender.</p>
                  <a href="#" className="main-btn">Entre em contato</a>
                </div>
              </div>
              <div className="carousel-item">
                <img src={home} className="d-block w-100" alt="Manutenção em software"/>
                <div className="carousel-caption d-md-block">
                  <h1>Está buscando manutenção no seu software?</h1>
                  <p>A hDC conta com engenheiros altamente qualificados para resolver seu problema.</p>
                  <a href="#" className="main-btn">Entre em contato</a>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#mainSlider" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#mainSlider" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          </div>
   


        </main>
       
    )

}

export default Inicio