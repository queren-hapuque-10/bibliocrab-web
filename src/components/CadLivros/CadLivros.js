import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './CadLivros.css';
import {mensagemErro, notifyError, notifySuccess } from '../../components/util/Util';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function CadLivros (){
	
const [idCadastrolivros, setIdCadastrolivros] = useState();
const [imagem, setImagem] = useState();
const [titulo, setTitulo] = useState();
const [sinopse,setSinopse] = useState();
const [qtdpag, setQtdpag] = useState();
const [autor, setAutor] = useState();
const [lancamento, setLancamento] = useState();

const { state } = useLocation();
   useEffect(() => {
	
	if (state != null && state.id != null) {
	axios.get("http://localhost:8082/livro/" + state.id)
    .then((response) => {
	setIdCadastrolivros(response.data.id)
    setImagem(response.data.imagem)
    setTitulo(response.data.titulo)
	setSinopse(response.data.sinopse)
	setQtdpag(response.data.qtdpag)
    setAutor(response.data.autor)
	setLancamento(response.data.lancamento)

		})
	}
   }, [state])


	function salvar () {

		let cadastrolivrosRequest = {

			imagem:imagem,
			titulo:titulo,
            sinopse:sinopse,
			qtdpag:qtdpag,
            autor:autor,
			lancamento:lancamento,
		}

		if (idCadastrolivros != null) { //Alteração:
			axios.put( "http://localhost:8082/livro/" + idCadastrolivros, cadastrolivrosRequest)
			.then((response) => { console.log('livro alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alterar o cadastro.') })
		} else { //Cadastro:
			axios.post( "http://localhost:8082/livro/", cadastrolivrosRequest)
			.then((response) => { notifySuccess('Livro cadastrado com sucesso.')		})
			.catch((error) => { if (error.response) {
				notifyError(error.response.data.errors[0].defaultMessage)
				} else {
				notifyError(mensagemErro)
				} 
				})
		}  
 
	}
	 
        return(
        < div className="body-livro">
            <ToastContainer/>
            <div class="container-livro">
      <h1 class="form-title">Cadastro de Livros</h1>
      <form action="#">
        <div class="main-user-info">
          <div class="user-input-box">
            <label for="fullName">Título</label>
            <input type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Título do livro"
                    value={titulo}
					onChange={e => setTitulo(e.target.value)}
                    />
          </div>
          <div class="user-input-box">
            <label for="username">Autor</label>
            <input type="text"
                    id="username"
                    name="username"
                    placeholder="Autor do livro"
                    value={autor}
					onChange={e => setAutor(e.target.value)}
                    />
          </div>
          <div class="user-input-box">
            <label for="email">Sinopse</label>
            <input type="text"
                    id="phonenumber"
                    name="email"
                    placeholder="Sinopse do livro"
                    value={sinopse}
					onChange={e => setSinopse(e.target.value)}
                    />
          </div>
          <div class="user-input-box">
            <label for="phoneNumber">Imagem</label>
            <input type="url"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="URL da imagem"
                    value={imagem}
					onChange={e => setImagem(e.target.value)}
                    />
          </div>
          <div class="user-input-box">
            <label for="password">Páginas</label>
            <input type="number"
                    id="password"
                    name="number"
                    placeholder="Quantidade de Páginas"
                    value={qtdpag}
					onChange={e => setQtdpag(e.target.value)}
                    />
          </div>
          <div class="user-input-box">
            <label for="confirmPassword">Lançamento</label>
            <input type="date"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Data de lançamento"
                    value={lancamento}
					onChange={e => setLancamento(e.target.value)}
                    
                    />
          </div>
        </div>
        <div class="form-submit-btn">
          <input type="submit" value="Cadastrar Livro" 	onClick={() => salvar()}/>
        </div>
      </form>
    </div>
        </div>
      )
}

	export default CadLivros;
