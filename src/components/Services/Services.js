import React from "react";
import calendario from '../../images/calendario.png';
import livro from '../../images/livro.png';
import save from '../../images/save.png';
import cresc from '../../images/cresc.png';
import sicronizacao from '../../images/sicronizacao.png';
import read from '../../images/read.png';
import Navbar from "../Navbar/Navbar";


function Services(){
    return(

<div>
<Navbar/>
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
</div>


    )
}

export default Services;