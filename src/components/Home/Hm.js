import React from 'react';
import "./Home.css";
import lendo from '../../images/lendo.png';
import {AiFillRead} from 'react-icons/ai';
import {GoChecklist} from 'react-icons/go';
import {AiFillCalculator} from 'react-icons/ai';
import {LuCalendarClock} from 'react-icons/lu';
import calendario from '../../images/calendario.png';
import livro from '../../images/livro.png';
import save from '../../images/save.png';
import cresc from '../../images/cresc.png';
import sicronizacao from '../../images/sicronizacao.png';
import read from '../../images/read.png';
import bookglass from '../../images/bookglass.png';
import { GiSadCrab } from 'react-icons/gi';
import banner2 from '../../images/banner2.png';

export default function Hm() {
  return (
  
 <div className='holder'>

  {/*div-sobre*/}
<div className='cont-sobre'>
            <section className='sobre-mais'>
            <div className='container'> 
                <div className='sobre-mais-text'>
                    <h3>Sobre nós</h3>
                    <p>biblioteca virtual dinâmica, composta por uma vasta opção de livros e artigos</p>
                    <a href='#' className='btn animate-btn'>Sobre nós</a>
                </div>
                <div className='sobre-mais-img'>
                    <img src={bookglass}/>
                </div> 

        </div>
        </section>
        </div>  

        {/*services*/}

<section className='services'>
    <div className='container'>
        <h3>Por que escolher a Bibliocrab?</h3>
        <p>Conheça as principais funcionalidades e benefícios que oferecemos!</p>
        <div className='rows-cards'>

            <div className='row-card-item'>
                <img src={calendario}/>
                <p className='nome-service'><strong>Definição de Metas</strong></p>
                <p className='descricao-service'>
                biblioteca virtual dinâmica, composta por uma vasta opção de livros e artigos,
                         onde o leitor poderá buscar pelo livro desejado, definir metas e 
                         ter um acompanhamento personalizado do livro que ele está lendo.
                </p>
            </div>

            <div className='row-card-item'>
                <img src={livro}/>
                <p className='nome-service'><strong>acompanhamento da leitura</strong></p>
                <p className='descricao-service'>
                biblioteca virtual dinâmica, composta por uma vasta opção de livros e artigos,
                         onde o leitor poderá buscar pelo livro desejado, definir metas e 
                         ter um acompanhamento personalizado do livro que ele está lendo.
                </p>
            </div>

            <div className='row-card-item'>
                <img src={save}/>
                <p className='nome-service'><strong>Sicronização de páginas</strong></p>
                <p className='descricao-service'>
                biblioteca virtual dinâmica, composta por uma vasta opção de livros e artigos,
                         onde o leitor poderá buscar pelo livro desejado, definir metas e 
                         ter um acompanhamento personalizado do livro que ele está lendo.
                </p>
            </div>

            <div className='row-card-item'>
                <img src={read}/>
                <p className='nome-service'><strong>Sugestão de leituras</strong></p>
                <p className='descricao-service'>
                biblioteca virtual dinâmica, composta por uma vasta opção de livros e artigos,
                         onde o leitor poderá buscar pelo livro desejado, definir metas e 
                         ter um acompanhamento personalizado do livro que ele está lendo.
                </p>
            </div>

            <div className='row-card-item'>
                <img src={cresc}/>
                <p className='nome-service'><strong>Seções de livros</strong></p>
                <p className='descricao-service'>
                biblioteca virtual dinâmica, composta por uma vasta opção de livros e artigos,
                         onde o leitor poderá buscar pelo livro desejado, definir metas e 
                         ter um acompanhamento personalizado do livro que ele está lendo.
                </p>
            </div>

            <div className='row-card-item'>
                <img src={sicronizacao}/>
                <p className='nome-service'><strong>Sicronização de páginas</strong></p>
                <p className='descricao-service'>
                biblioteca virtual dinâmica, composta por uma vasta opção de livros e artigos,
                         onde o leitor poderá buscar pelo livro desejado, definir metas e 
                         ter um acompanhamento personalizado do livro que ele está lendo.
                </p>
            </div>

        </div>
    </div>
</section>

{/*newsletter*/}
<section className='newslatter'>
<div id="subscribe-news">
        <h2>Receba nossa Newsletter</h2>

        <p>
        Digite seu e-mail para 
        ser notificado sobre nossas novidades
        </p>

        <div id="input_group_news">
            <input type="email" id="email" placeholder='e-mail'/>
            <button>
            <GiSadCrab id='crab-news' size={22}/>
            </button>
        </div>
    </div>
</section>

{/*Objetivos*/}
<section className='objetivos'>
    <div className='container'>
        <h3>Objetivos do Cronograma</h3>
        <p>Leia os principais objetivos do cronograma pela Bibliocrab</p>
        <div className='cards'>
        <div className='card-item'>
            <center><div className='icon-obj'><AiFillRead size={30}/></div></center>
            <p className='nome-obj'>Incentivo e Interação</p>
            <p className='desc-obj'>Incentivo através da interação - 
            Crescimento do mangue através da realização de metas.</p>
        </div>

        <div className='card-item'>
        <center><div className='icon-obj'><LuCalendarClock size={30}/></div></center>
            <p className='nome-obj'>Divisão da Leitura</p>
            <p className='desc-obj'>Cálculo e organização da leitura
            através da disponibilidade de tempo.</p>
        </div>

        <div className='card-item'>
        <center><div className='icon-obj'><GoChecklist size={30}/></div></center>
            <p className='nome-obj'>CheckLists de validaçãos</p>
            <p className='desc-obj'>Checklists semanais para acompanhamento</p>
        </div>
        </div>
    </div>
</section>

{/*Blog*/}
<section className='blog' id='blog'>
    <div className='container-blog'>
            <h3>Blog</h3>

<div className='cards-blog'>
    <div className='card-item-blog'>
        <img />
        <h4></h4>
        <p></p>
    </div>

    <div className='card-item-blog'>
        <img />
        <h4></h4>
        <p></p>
    </div>

    <div className='card-item-blog'>
        <img />
        <h4></h4>
        <p></p>
    </div>

    <div className='card-item-blog'>
        <img />
        <h4></h4>
        <p></p>
    </div>
</div>
    </div>
</section>


        </div>
            

   

  );
}
