import React from "react";
import calendario from '../../images/calendario.png';
import livro from '../../images/livro.png';
import save from '../../images/save.png';
import cresc from '../../images/cresc.png';
import sicronizacao from '../../images/sicronizacao.png';
import read from '../../images/read.png';
import crab1 from '../../images/crab1.jpg';
import crab2 from '../../images/crab3.jpg';
import crab3 from '../../images/crab6.jpg';
import './Services.css';

function Services(){
    return(
<div>

    {/*Planos e Assinaturas*/}
    <section className='services'>
    <div className='container-planos' >
        <h3>Planos e Assinaturas</h3>
        <p>Pacotes de assinaturas disponíveis para o acesso à Bibliocrab!</p>
        <br></br>
        <div className='rows-cards-planos'>

            <div className='row-card-item-plano'>
             <center><img src={crab1} id="crab1"/></center>   
                <p className='nome-plano'><strong>Plano Mensal</strong></p>
                <p className='descricao-service-plano'>
              <center className="preco">Por: R$70,00</center>
               Você terá acesso à todos os recursos e funcionalidades da Bibliocrab por <center><b>1 mês!</b> </center>
                </p>
                <a href="/login"><button className="assinar">Assine agora</button></a>
            </div>


            <div className='row-card-item-plano'>
            <center><img src={crab2} id="crab2"/></center>   
                <p className='nome-plano'><strong>Plano Trimestral</strong></p>
                <p className='descricao-service-plano'>
               <center className="preco">Por: R$160,00</center>
               Você terá acesso à todos os recursos e funcionalidades da Bibliocrab por <center><b>3 meses!</b> </center>
                 </p>
                 <a href="/login"><button className="assinar">Assine agora</button></a>
            </div>


            <div className='row-card-item-plano'>
            <center><img src={crab3} id="crab3"/></center>   
                <p className='nome-plano'><strong>Plano Semestral</strong></p>
                <p className='descricao-service-plano'>
               <center className="preco">Por: R$540,00</center> 
               Você terá acesso à todos os recursos e funcionalidades da Bibliocrab por <center><b>6 meses!</b> </center>
                </p>
                <a href="/login"><button className="assinar">Assine agora</button></a>
            </div>
            </div>
            </div>
</section>
 
{/*services
<section className='services'>
    <div className='container' >
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
                <p className='nome-service'><strong>Anotações e Comentários</strong></p>
                <p className='descricao-service'>
                Os usuários podem marcar as páginas mais importantes, 
                fazer anotações e escrever comentários diretamente nos eBooks. 
                 </p>
            </div>


            <div className='row-card-item'>
                <img src={save}/>
                <p className='nome-service'><strong>Sicronização de Páginas</strong></p>
                <p className='descricao-service'>
                O leitor pode continuar exatamente de onde parou. Com a Bibliocrab, 
                é possível gravar o progresso e as atividades realizadas como: notas, destaques e todas as interações com os e-books. 
                </p>
            </div>


            <div className='row-card-item'>
                <img src={read}/>
                <p className='nome-service'><strong>Sugestão de Leituras</strong></p>
                <p className='descricao-service'>
                biblioteca virtual dinâmica, composta por uma vasta opção de livros e artigos,
                         onde o leitor poderá buscar pelo livro desejado, definir metas e
                         ter um acompanhamento personalizado do livro que ele está lendo.
                </p>
            </div>


            <div className='row-card-item'>
                <img src={cresc}/>
                <p className='nome-service'><strong>Seções de Livros</strong></p>
                <p className='descricao-service'>
                biblioteca virtual dinâmica, composta por uma vasta opção de livros e artigos,
                         onde o leitor poderá buscar pelo livro desejado, definir metas e
                         ter um acompanhamento personalizado do livro que ele está lendo.
                </p>
            </div>


            <div className='row-card-item'>
                <img src={sicronizacao}/>
                <p className='nome-service'><strong>Multiplatoforma</strong></p>
                <p className='descricao-service'>
                A Biblioteca Virtual está disponível para Desktop, Tablets e Smartphones. 
                Suas funcionalidades exclusivas, agilidade e navegação intuitiva oferecem aos leitores a melhor experiência de usuário. 
                </p>
            </div>


        </div>
    </div>
</section>*/}

</div>

    )
}

export default Services;