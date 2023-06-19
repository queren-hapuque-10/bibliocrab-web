import React from 'react';
import aboutImg from "../../images/about-img.png";
import "./About.css";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2 id="quemsomos">Quem Somos</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Sobre a BiblioCrab</h2>
            <p className='fs-17'>A BiblioCrab foi criada com o intuito de incentivar e proporcionar
             a busca pelo conhecimento, com o uso e geração da informação através de livros virtuais, 
             fazendo da imersão tecnológica o principal viés de eficiência para a disponibilidade à leitura.</p>
             </div>
        </div>
      </div>
    </section>
  )
}

export default About