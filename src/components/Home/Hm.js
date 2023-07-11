import React from 'react';
import "./Home.css";
import todolist from '../../images/todolist.png';
import {FaUser} from 'react-icons/fa';
import {RiRecycleFill} from 'react-icons/ri';
import {BsFillGearFill} from 'react-icons/bs';
import calendario from '../../images/calendario.png';
import livro from '../../images/livro.png';
import save from '../../images/save.png';
import cresc from '../../images/cresc.png';
import sicronizacao from '../../images/sicronizacao.png';
import read from '../../images/read.png';
import bookglass from '../../images/bookglass.png';
import { GiSadCrab } from 'react-icons/gi';
import livro1 from '../../images/livros1.jpg';
import livros_formatura from '../../images/livros-formatura.jpg';


export default function Hm() {
  return (
 
 <div className='holder'>


  {/*div-sobre*/}
<div className='cont-sobre'>
            <section className='sobre-mais'>
            <div className='container'>
                <div className='sobre-mais-text'>
                    <h3>Sobre nós</h3>
                    <p>
                   Desenvolvida para atender as principais dificuldades dos leitores, a plataforma
                   tem com objetivo unir a tecnologia e leitura para a promoção da eficiência e maximização da rotina de leitura.
                    </p>


                    <a href='../../About' className='btn animate-btn'>Saiba Mais</a>
                </div>
                <div className='sobre-mais-img'>
                    <img src={bookglass}/>
                </div>


        </div>
        </section>
        </div>  


        {/*services*/}


<section className='services'>
    <div className='container' id='cont-serv'>
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
        <h3>Principais Impactos</h3>
        <p>Leia os principais objetivos do cronograma pela Bibliocrab</p>
        <div className='cards'>
        <div className='card-item'>
        <center><div className='icon-obj'><FaUser size={30}/></div></center>
            <p className='nome-obj'>Pessoal</p>
            <p className='desc-obj'> Os leitores possuem mais autonomia na utilização dos materiais, com mais propriedade e de forma mais organizada.</p>
        </div>


        <div className='card-item'>
        <center><div className='icon-obj'><BsFillGearFill size={30}/></div></center>
            <p className='nome-obj'>FUNCIONAL </p>
            <p className='desc-obj'> Praticidade gerada pela possibilidade de levar todos os seus livros em uma única plataforma.</p>
        </div>


        <div className='card-item'>
        <center><div className='icon-obj'><RiRecycleFill size={30}/></div></center>
            <p className='nome-obj'>SOCIAL </p>
        <p className='desc-obj'>Mais sustentável, por ser
        menos danoso ao meio ambiente;
        Mais econômico, pela possibilidade de ter acessos simultâneos a uma mesma obra.
        </p>
        </div>
        </div>
    </div>
</section>


{/*Blog*/}
<section className='blog' id='blog'>
    <div className='container-blog'>
     <h3>Nosso Blog</h3>
        <p>Confira o blog da bibliocrab e encontre as principais novidades</p>


<div className='cards-blog'>
    <div className='card-item-blog'>
        <div className='img-blog'>
        <img src={livros_formatura}/>
        </div>


        <h4>Bibliotecas são aliadas nas universidades</h4>
        <p>"Mesmo com a facilidade de encontrar qualquer informação à distância de um clique, 
            a internet ainda não substituiu as bibliotecas em muitas universidades e instituições de ensino. 
            As salas repletas de livros, conhecimento e silêncio são uma ótima aliada da web na hora de melhorar o rendimento acadêmico."</p>
             
              <button>Ler Mais</button>
    </div>


    <div className='card-item-blog'>
       
        <div className='img-blog'>
            <img src={livro1}/>
        </div>
            <h4>Benefícios da biblioteca digital para os estudantes</h4>
       
        <p>“Com a democratização dos meios digitais, muitos estudantes têm optado por utilizar meios virtuais a meios físicos.

E quando o assunto é leitura, essa opção por meios virtuais têm obtido ainda mais destaque. 
Nesse sentido, as bibliotecas virtuais têm ganhado espaço e notoriedade,
 trazendo benefícios para os leitores.”</p>
             <button>Ler Mais</button>
    </div>


    <div className='card-item-blog'>
    <div className='img-blog'>
            <img src={todolist}/>
        </div>
        <h4>Benefícios de um cronograma de estudos</h4>
        <p>"Cronogramas de estudo servem para organizar um passo a passo eficaz e 
            simplificado com todas as tarefas e demandas que o aluno precisa dar conta na hora de se planejar. 
            No Brasil, é comum estudantes montarem um cronograma de estudos para o ENEM, applications, concursos e outras provas."</p>


             <button>Ler Mais</button>
    </div>


</div>
    </div>
</section>


        </div>
           


   


  );
}
