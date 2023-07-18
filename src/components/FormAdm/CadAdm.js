import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Form } from "semantic-ui-react";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {mensagemErro, notifyError, notifySuccess } from '../../components/util/Util';
import './CadAdm.css';

function CadAdm (){
	
const [idCadastroadm, setIdCadastroadm] = useState();
const [nome, setNome] = useState();
const [dataNascimento, setDataNascimento] = useState();
const [email,setEmail] = useState();
const [cpf, setCpf] = useState();
const [rg, setRg] = useState();
const [celular, setCelular] = useState();
const [endereco, setEndereco] = useState();
const [senha, setSenha] = useState();


const { state } = useLocation();
   useEffect(() => {
	
	if (state != null && state.id != null) {
	axios.get( "http://localhost:8082/adm" + state.id)
    .then((response) => {
	setIdCadastroadm(response.data.id)
    setNome(response.data.nome)
	setDataNascimento(formatarData(response.data.dataNascimento))
    setEmail(response.data.email)
	setCpf(response.data.cpf)
	setRg(response.data.rg)
	setCelular(response.data.celular)
	setEndereco(response.data.endereco)
	setSenha(response.data.senha)


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

		let cadastroadmRequest = {

			nome:nome,
			dataNascimento:dataNascimento,
            email:email,
			cpf:cpf,
			rg:rg,
			celular:celular,
			endereco:endereco,
			senha:senha
		}

		if (idCadastroadm != null) { //Alteração:
			axios.put( "http://localhost:8082/adm/" + idCadastroadm, cadastroadmRequest)
			.then((response) => { console.log('cadastro alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alterar o cadastro.') })
		} else { //Cadastro:
			axios.post( "http://localhost:8082/adm/", cadastroadmRequest)
            .then((response) => { notifySuccess('Cadastrado com sucesso!')		})
			.catch((error) => { if (error.response) {
				notifyError(error.response.data.errors[0].defaultMessage)
				} else {
				notifyError(mensagemErro)
				} 
				})
		}
 
	}
	
        return(
            < div className="body-livro" id="body-adm">

            <ToastContainer/>
      
      <div class="container-livro" id="cad-adm">
      <h1 class="form-title">Cadastro de ADM</h1>
      <Form>
        <div class="main-user-info">
          <div class="user-input-box" id="inp-adm">
            <label>Nome</label>
            <input type="text"
                    name="nome"
                    
                    placeholder="Nome"
                    value={nome}
					onChange={e => setNome(e.target.value)}
            />
          </div>

          <div class="user-input-box" id="inp-adm">
            <label>Data de Nascimento</label>
            <input type="date"
                    name="data"
                    placeholder="dd/MM/yyyy"
                    value={dataNascimento}
					onChange={e => setDataNascimento(e.target.value)}
                    />
          </div>

          <div class="user-input-box" id="inp-adm">
            <label>CPF</label>
            <input type="text"
                    name="cpf"
                    placeholder="999.999.999-99"
                    value={cpf}
					onChange={e => setCpf(e.target.value)}
                    />
          </div>
          
          <div class="user-input-box" id="inp-adm">
            <label>RG</label>
            <input type="text"
                    name="rg"
                    placeholder="99.999.999"
                    value={rg}
					onChange={e => setRg(e.target.value)}
                    />
          </div>
          <div class="user-input-box" id="inp-adm">
            <label>Endereço</label>
            <input type="text"
                    name="endereco"
                    placeholder="Cidade - UF, Bairro, Rua, N°"
                    value={endereco}
					onChange={e => setEndereco(e.target.value)}
                    />
          </div>


          <div class="user-input-box" id="inp-adm">
            <label >Celular</label>
            <input type="text"
                    placeholder="(99) 9 9999-9999"
                    value={celular}
					onChange={e => setCelular(e.target.value)}
                    
                    />
          </div>

          <div class="user-input-box" id="inp-adm">
            <label>E-mail</label>
            <input type="email"
                    placeholder="email@example.com"
                    value={email}
					onChange={e => setEmail(e.target.value)}
                    
                    />
          </div>

          <div class="user-input-box" id="inp-adm">
            <label>Senha</label>
            <input type="password"
                    placeholder="********"
                    value={senha}
					onChange={e => setSenha(e.target.value)}
                    
                    />
          </div>
        </div>

        <Link to="/loginadm">
			<p className="p-loginadm">Já tem uma conta?<b> Fazer Login</b></p>
		  </Link>
        <div class="form-submit-btn">
          <input type="submit" value="Cadastrar" id="btn-adm"	onClick={() => salvar()}/>

         

        </div>
        
      </Form>
    </div>
        </div>
      );
}
	export default CadAdm;