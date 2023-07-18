import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Form } from 'semantic-ui-react';
import './CadCliente.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {mensagemErro, notifyError, notifySuccess } from '../../components/util/Util';


function CadCliente (){
	
const { state } = useLocation();

const [idCliente, setIdCliente] = useState();
const [nome, setNome] = useState();
const [dataNascimento, setDataNascimento] = useState();
const [cpf, setCpf] = useState();
const [rg, setRg] = useState();
const [celular, setCelular] = useState();
const [endereco, setEndereco] = useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();

   useEffect(() => {
	
	if (state != null && state.id != null) {

	axios.get("http://localhost:8082/cliente" + state.id)
    .then((response) => {
	setIdCliente(response.data.id)
    setNome(response.data.nome)
	setDataNascimento(formatarData(response.data.dataNascimento))
    setEmail(response.data.email)
	setCpf(response.data.cpf)
	setRg(response.data.rg)
	setCelular(response.data.celular)
	setEndereco(response.data.endereco)
	setPassword(response.data.password)
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

		let ClienteRequest = {

			nome: nome,
			dataNascimento: dataNascimento,
			cpf: cpf,
			rg: rg,
			celular: celular,
			endereco: endereco,
            email: email,
            password: password
		}

        
    	if (idCliente != null) { //Alteração:

			axios.put("http://localhost:8082/cliente/" + idCliente, ClienteRequest)
			.then((response) => { console.log('Dados alterados com sucesso.') })
			.catch((error) => { console.log('Erro ao alterar.') })

		} else { //Cadastro:
			
			axios.post("http://localhost:8082/cliente/", ClienteRequest)
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
            
            < div className="body-livro" id="body-cliente">

            <ToastContainer/>
      
      <div class="container-livro" id="cad-cliente">
      <h1 class="form-title">Cadastro</h1>
      <Form>
        <div class="main-user-info">
          <div class="user-input-box">
            <label>Nome</label>
            <input type="text"
                    name="nome"
                    placeholder="Nome"
                    value={nome}
					          onChange={e => setNome(e.target.value)}
            />
          </div>

          <div class="user-input-box">
            <label>Data de Nascimento</label>
            <input type="text"
                    name="data"
                    placeholder="dd/MM/yyyy"
                    value={dataNascimento}
					onChange={e => setDataNascimento(e.target.value)}
                    />
          </div>

          <div class="user-input-box">
            <label>CPF</label>
            <input type="text"
                    name="cpf"
                    placeholder="999.999.999-99"
                    value={cpf}
					onChange={e => setCpf(e.target.value)}
                    />
          </div>
          
          <div class="user-input-box">
            <label>RG</label>
            <input type="text"
                    name="rg"
                    placeholder="99.999.999"
                    value={rg}
					onChange={e => setRg(e.target.value)}
                    />
          </div>
          <div class="user-input-box">
            <label>Endereço</label>
            <input type="text"
                    name="endereco"
                    placeholder="Cidade - UF, Bairro, Rua, N°"
                    value={endereco}
					onChange={e => setEndereco(e.target.value)}
                    />
          </div>


          <div class="user-input-box">
            <label >Celular</label>
            <input type="text"
                    placeholder="(99) 9 9999-9999"
                    value={celular}
					onChange={e => setCelular(e.target.value)}
                    
                    />
          </div>

          <div class="user-input-box">
            <label>E-mail</label>
            <input type="email"
                    placeholder="email@example.com"
                    value={email}
					onChange={e => setEmail(e.target.value)}
                    
                    />
          </div>

          <div class="user-input-box">
            <label >Senha</label>
            <input type="password"
                    placeholder="********"
                    value={password}
					onChange={e => setPassword(e.target.value)}
                    
                    />
          </div>
        </div>

 <Link to="/login">
			<p className="p-login">Já tem uma conta?<b> Fazer Login</b></p>
		  </Link>
        <div class="form-submit-btn">
          <input type="submit" value="Cadastrar" id="btn-cliente"	onClick={() => salvar()}/>

         

        </div>
        
      </Form>
    </div>
        </div>
            
      );
}
	export default CadCliente;