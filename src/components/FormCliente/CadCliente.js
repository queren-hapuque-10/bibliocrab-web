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
const [email, setEmail] = useState();
const [cpf, setCpf] = useState();
const [rg, setRg] = useState();
const [celular, setCelular] = useState();
const [endereco, setEndereco] = useState();
const [senha, setSenha] = useState();

   useEffect(() => {
	
	if (state != null && state.id != null) {

	axios.get("http://localhost:8082/cliente" + state.id)
    .then((response) => {
	setIdCliente(response.data.id)
    setNome(response.data.nome)
	setDataNascimento(response.data.dataNascimento)
    setEmail(response.data.email)
	setCpf(response.data.cpf)
	setRg(response.data.rg)
	setCelular(response.data.celular)
	setEndereco(response.data.endereco)
	setSenha(response.data.senha)
		})
	}
   }, [state])


	function salvar () {

		let ClienteRequest = {

			nome: nome,
			dataNascimento: dataNascimento,
            email: email,
			cpf: cpf,
			rg: rg,
			celular: celular,
			endereco: endereco,
			senha: senha
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
            
<>
<ToastContainer/>

          
 <div className="cad-cliente">
            <div class="form-cadastro" id="formcadastro">
         
                <Form >
                <p id="cad">Criar Conta</p>
                
                    <div class="input-cadastro" id="nomecad">
                        <label for="nome" id="nomelab">Nome Completo </label>
                        <input type="text" id="nome" placeholder="Digite o seu nome completo" 
                        value={nome} 
                        onChange={e => setNome(e.target.value)}
                        />
                    </div>
    
                    <div class="input-cadastro" id="nasccad">
                        <label for="data"> Data de Nascimento </label>
                        <input type="date" name="data" id="data"
                        value={dataNascimento}
                        onChange={e => setDataNascimento(e.target.value)}
                        />
                    </div>

                    <div class="input-cadastro" id="celcad">
                            <label for="foneCel"id="celab">Celular</label>
                            <input type="celular" id="foneCel" placeholder="(99) 99999-9999" 
                            value={celular}
                            onChange={e => setCelular(e.target.value)}
                            required/>
                        </div>
                   
                        <div class="input-cadastro" id="cpfcad">
                            <label for="cpf" id="cpflab">CPF</label>
                            <input type="cpf" id="cpf" placeholder="999.999.999-99" 
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                            required/>
                        </div>

                         <div class="input-cadastro" id="rgcad">
                            <label for="rg" id="rglab">RG</label>
                            <input type="rg" id="rg" placeholder="99.999.999-99" 
                            value={rg}
                            onChange={e => setRg(e.target.value)}
                            required/>
                        </div>

                        

                         <div class="input-cadastro" id="endcad">
                            <label for="endereco" id="endlab">Endereço</label>
                            <input type="endereco" id="endereco" placeholder="Digite o seu endereço" 
                            value={endereco}
                            onChange={e => setEndereco(e.target.value)}
                            required/>
                        </div>

                        <div class="input-cadastro" id="emailcad">
                            <label for="email" id="emailab">E-mail</label>
                            <input type="email" id="nome" placeholder="Digite o seu email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required/>
                        </div>
        

                         <div class="input-cadastro" id="senhacad">
                            <label for="criarSenha" id="senhalab">Criar Senha</label>
                            <input type="senha" id="criarSenha" placeholder="EX:12345678" 
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            required/>
                        </div>
                        <h1 id="log"> Já tem uma conta? <a href="/login" id="link"> Login </a> </h1>
                        <div class="input-cadastro" id="primbutcad">
                        <Link to={"/login"}>
                    <button id='primbotao'>Login</button>
                    </Link>
                    </div>
                    
                    <div class="input-cadastro" id="segbutcad">
                    <Link to={"/assinatura"} >
                    <button id='segbotao' onClick={() => salvar()}>Salvar</button>
                    </Link>
                </div>
    
                </Form>
            </div>
            </div> 
        </>
            
      );
}
	export default CadCliente;