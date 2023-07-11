import React from "react";
import "./PerfilCliente.css";
import {MdEmail} from 'react-icons/md';
import {FaPhone} from 'react-icons/fa';
import {BsFillCalendarRangeFill} from 'react-icons/bs';
import {FaSwatchbook} from 'react-icons/fa';
import {BsBookmarkCheckFill} from 'react-icons/bs';
import {BsFillBookmarkStarFill} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {SiInstagram} from 'react-icons/si';
import {ImExit} from 'react-icons/im';
import {FcLike} from 'react-icons/fc';
import perfil from '../../images/icon_crab.png';
import ListCronograma from "../Cronograma/ListCronograma";
import axios from "axios";
import { render } from "@testing-library/react";


class PerfilCliente extends React.Component{
/*
    state = {

        listaCliente: [],
        cliente: null
      
    }

    componentDidMount = () => {
        let idCliente=1

        console.log(idCliente)
      
        axios.get("http://localhost:8082/cliente/"+idCliente)
        .then((response) => {
            console.log(response)
            this.setState({
               cliente: response.data
            })
        })  
    }
*/
    render(){
    return(
        <div className="cont-perfil"> 
      <section class="section-perfil-usuario">
    <div class="perfil-usuario-header">
        <div class="perfil-usuario-portada">
            <div class="perfil-usuario-avatar">
                <img src={perfil} alt="img-avatar"/>
                <button type="button" class="button-avatar">
                    <i><FcLike size={22}/></i>
                </button>
            </div>
            <button type="button" class="button-portada">
                <ImExit  id="icon-img"/> Sair
            </button>
        </div>
    </div>
    <div class="perfil-usuario-body">
        <div class="perfil-usuario-bio">
            <h3 class="titulo">{/*{this.state.cliente.nome}*/} Nome</h3>
            <p class="texto">Leitora Eclética, adoro Romances!!</p>
        </div>
        <div class="perfil-usuario-footer">
            <ul class="lista-dados">
                
                <li><i className="icon"><MdEmail fontSize={21}/></i>E-mail:</li>
                <li><i class="icon"><FaPhone/></i> Telefone:</li>
                <li><i class="icon"><BsFillCalendarRangeFill/></i> Data de Nascimento:</li>
            </ul>
            <ul class="lista-dados">
                <li><i class="icon"><FaSwatchbook/></i> Livros Lidos</li>
                <li><i class="icon"><BsFillBookmarkStarFill/></i> Livros Favoritos</li>
                <li><i class="icon"><BsBookmarkCheckFill/></i> Cronograma</li>
            </ul>
        </div>

    </div>
</section>
<section className="">

</section>
<section className="perfil-cronograma">
                <div className="cronograma">
<ListCronograma/>

                </div>
                <br></br><br></br>
            </section>


</div>


    )
}
  
}

export default PerfilCliente