import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './CadLivros.css';

function CadLivros (){
	

	const [idCadastrolivros, setIdCadastrolivros] = useState();
const [imagem, setImagem] = useState();
const [titulo, setTitulo] = useState();
const [sinopse,setSinopse] = useState();
const [qtdpag, setQtdpag] = useState();
const [autor, setAutor] = useState();
const [lacamento, setLancamento] = useState();

const { state } = useLocation();
   useEffect(() => {
	
	if (state != null && state.id != null) {
	axios.get( "api/cadastrolivros/" + state.id)
    .then((response) => {
	setIdCadastrolivros(response.data.id)
    setImagem(response.data.imagem)
    setTitulo(response.data.titulo)
	setSinopse(response.data.sinopse)
	setQtdpag(response.data.qtdpag)
    setAutor(response.data.autor)
	setLancamento(formatarData(response.data.lacamento))

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
			lacamento:lacamento,
		}

		if (idCadastrolivros != null) { //Alteração:
			axios.put( "api/cadastrolivros/" + idCadastrolivros, cadastrolivrosRequest)
			.then((response) => { console.log('livro alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alterar o cadastro.') })
		} else { //Cadastro:
			axios.post( "api/cadastrolivros", cadastrolivrosRequest)
			.then((response) => { console.log('Livro cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o cadastro.') })
		}
 
	}

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
	 
        return(
            <div className="cad-livros">
            <>
            <div class="form-cadastro" id="formcadastro">

         
         
                <form action="#">
                <p id="cad">Cadastrar Livro</p>

                <div class="input-imagem" id="imgcad">
                    <label class="picture" tabIndex="0">Imagem
                    <input type="url" id="homepage" name="homepage" placeholder="Adicione o link da imagem"
                     value={imagem}
                     onChange={e => setImagem(e.target.value)}
                     required/>

                    </label>
                    </div>

                    <div class="input-cadastro" id="titcad">
                        <label for="titulo" id="titlab">Título</label>
                        <input type="text" id="titulo" placeholder="Digite o título do livro" 
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                        required/>
                    </div>

                    <div class="input-cadastro" id="sinopsecad">
                        <label for="sinopse" id="sinopselab">Sinopse </label>
                        <input type="text" id="sinopse" placeholder="Digite a sinopse do livro" 
                        value={sinopse}
                        onChange={e => setSinopse(e.target.value)}
                        required/>
                    </div>
                   

                    <div class="input-cadastro" id="pagcad">
                            <label for="qtdoag"id="paglab">Quantidade de páginas</label>
                            <input type="quantidade" id="pag" placeholder="Digite a quantidade de páginas"
                            value={qtdpag}
                            onChange={e => setQtdpag(e.target.value)}
                            required/>
                        </div>
                   
                        <div class="input-cadastro" id="autorcad">
                            <label for="autor" id="autorlab">Autor</label>
                            <input type="autor" id="autor" placeholder="Digite o autor do livro" 
                            value={autor}
                            onChange={e => setAutor(e.target.value)}
                            required/>
                        </div>

                        <div class="input-cadastro" id="pagcad">
                        <label for="data">Data de Lançamento</label>
                        <input type="date" name="data" id="data"
                        value={lacamento}
                        onChange={e => setLancamento(e.target.value)}
                        />
                       </div>
                        
                        <div class="input-cadastro" id="primbutcad">
                        <Link to={"/"}>
                    <button id='primbotao'>Voltar</button>
                    </Link>
                    </div>

                    <div class="input-cadastro" id="segbutcad">
                    <Link to={"/FormAssinatura"}>
                    <button id='segbotao' >Próximo</button>
                    </Link>
                </div>
    
    
    
                   
    
                </form>
            </div>
        
                </>
                </div>
      );
}

	export default CadLivros;
