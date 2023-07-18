import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './CadLivros.css';
import { Form } from 'semantic-ui-react';
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
	  setLancamento(formatarData(response.data.lancamento))

		})
	}
   }, [state])

   function formatarData(dataParam) {

    if (dataParam == null || dataParam == '') {
        return ''
    }
    
    let dia = dataParam.substr(8,2);
    let mes = dataParam.substr(5,2);
    let ano = dataParam.substr(0,4);
    let dataFormatada = dia + '/' + mes + '/' + ano;

    return dataFormatada
}

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
      .then((response) => { notifySuccess('Livro alterado com sucesso.')		})
			.catch((error) => { if (error.response) {
				notifyError(error.response.data.errors[0].defaultMessage)
				} else {
				notifyError(mensagemErro)
				} 
				})

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
      <h2 class="form-title">Cadastro de Livros</h2>
      <Form>
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
            <input type="textarea"
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
            <label for="dtLancamento">Lançamento</label>
            <input type="text"
                    id="confirmPassword"
                    placeholder="Data de lançamento"
                    value={lancamento}
					onChange={e => setLancamento(e.target.value)}
                    
                    />
          </div>
        </div>

        <div class="form-submit-btn">
          <input type="submit" value="Cadastrar Livro" 	onClick={() => salvar()}/>

          <Link to="/livroslist">
			<input type="submit" value="Visualizar os Livros" id="view"/>
		  </Link>

        </div>
        
      </Form>
    </div>
        </div>
      )
}

	export default CadLivros;
