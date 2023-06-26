import React from 'react';
import "./About.css";
import cantinho from '../../images/image-removebg-preview (11).png';
import bookglass from '../../images/image-removebg-preview (8).png';
import chico from '../../images/image-removebg-preview (14).png';
import {AiFillRead} from 'react-icons/ai';
import {GoChecklist} from 'react-icons/go';
import {LuCalendarClock} from 'react-icons/lu';

const About = () => {
  return (
    <div>
<section className='about'>
      <div className='container_about'>
        <div className='section-title'>
          <h2 id="quemsomos">Quem Somos?</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {cantinho} alt = "" />
          </div>

          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Sobre a Bibliocrab</h2>

            <p className='fs-17'> 
               Com raízes do movimento "Manguebeat", desenvolvemos uma biblioteca virtual interativa
              com foco na organização da rotina de leitura dos usuários.
             </p>

            <p className='fs-17'>A BiblioCrab foi criada com o intuito de incentivar e proporcionar
             a busca pelo conhecimento, com o uso e geração da informação através de livros virtuais, 
             fazendo da imersão tecnológica o principal viés de eficiência para a disponibilidade à leitura.</p>

             </div>
        </div>
      </div>
    </section>


      <section className='propostas'>
    <div className='cont_proposta'>
        <h3>Proposta de Valor</h3>
        <p>Leia os principais objetivos do cronograma pela Bibliocrab</p>
        <div className='cards-proposta'>
        <div className='card-item-proposta'>
            <center><div className='icon-obj'><AiFillRead size={30}/></div></center>
            <p className='nome-obj'>META</p>
            <p className='desc-obj'> Eficiência de leitura de acordo com cada disponibilidade de tempo.</p>
        </div>

        <div className='card-item-proposta'>
        <center><div className='icon-obj'><LuCalendarClock size={30}/></div></center>
            <p className='nome-obj'>INCENTIVO </p>
            <p className='desc-obj'> Avisos, metas e interação com a plataforma.</p>
        </div>

        <div className='card-item-proposta'>
        <center><div className='icon-obj'><GoChecklist size={30}/></div></center>
            <p className='nome-obj'>DIFERENCIAL </p>
            <p className='desc-obj'>Cronograma personalizado, sugestão de leitura.
</p>
        </div>
        </div>
    </div>
</section>

<div className='cont-missao'>
            <section className='sobre-mais missao'>
            <div className='container'> 
                <div className='sobre-mais-text'>
                    <h3>Nossa Missão</h3>
                    <p>
              Nossa missão é dar constância às rotinas de leitura, 
              através de uma manutenção cronológica para proporcionar e manter uma eficiência aos leitores.
                    </p>
                    <a className='btn animate-btn'> Uma manutenção virtual no mangue literário.</a>
                </div>
                <div className='sobre-mais-img'>
                    <img src={bookglass}/>
                </div> 

        </div>
        </section>
        </div> 

        <div className='section-title'>
          <h2 id="manguetown">BEM-VINDOS ao MANGUETOWN da leitura!</h2>
        </div>
<section className='about'>
      <div className='container_about'>

  
        <div className='about-content grid'>
            
          <div className='about-text'>
            
            <h2 id='mangue-title'>Releitura - O manifesto "Caranguejos com cérebro"</h2>

            <p id='releitura'>
            “Emergência! Um rápido update de leitura ou as cidades pifam seu armazenamento! 
            </p>

            <p> 
            Não é preciso ser leitor para saber que a maneira mais simples de parar a rotina de um sujeito 
            é a falta de<b> organização de seu tempo</b>. O modo mais rápido, também, de mudar a rotina de uma cidade é alagar suas ruas e poluir seus rios. 
           </p>
           
           <p>
            O que fazer para não afundar-se na alienação do tempo configurado num sistema que robotiza os 
            cidadãos?
          </p>

          <p><b>
          Como devolver o ânimo, incentivar a leitura e recarregar as baterias da cidade? </b>
          </p>

          <p>
        <b>Simples!</b> Basta startar o cronograma que levará energia à lama e estimulará a organização na rotina dos leitores.
          </p>

             </div>
 <div className='about-img'>
            <img src = {chico} alt = "" />
          </div>

        </div>

      </div>
    </section>

    <section className='propostas'>
    <div className='cont_proposta'>
        <h3>Conceitualização</h3>
        <p>Leia os principais impactos da bibliocrab na sociedade</p>
        <div className='cards-proposta'>
        <div className='card-item-context'>
            <p className='nome-obj'>Manguebit</p>
            <p className='desc-obj'> Os leitores possuem mais autonomia na utilização dos materiais, com mais propriedade e de forma mais organizada.</p>
        </div>

        <div className='card-item-context'>
            <p className='nome-obj'>Caranguejo CPU </p>
            <p className='desc-obj'> Praticidade gerada pela possibilidade de levar todos os seus livros em uma única plataforma.</p>
        </div>

        <div className='card-item-context'>
            <p className='nome-obj'>Roteador na Lama </p>
        <p className='desc-obj'>
        Amplio de acessibilidade e incentivo à leitura.
</p>
        </div>
        </div>
    </div>
</section>


    </div>
    


  )
}

export default About