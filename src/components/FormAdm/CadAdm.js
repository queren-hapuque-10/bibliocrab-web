import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
const [matricula, setMatricula] = useState();
const [senha, setSenha] = useState();


const { state } = useLocation();
   useEffect(() => {
	
	if (state != null && state.id != null) {
	axios.get( "http://localhost:8082/adm" + state.id)
    .then((response) => {
	setIdCadastroadm(response.data.id)
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

		let cadastroadmRequest = {

			nome:nome,
			dataNascimento:dataNascimento,
            email:email,
			cpf:cpf,
			rg:rg,
			celular:celular,
			endereco:endereco,
			senha:senha,
            matricula: matricula
		}

		if (idCadastroadm != null) { //Alteração:
			axios.put( "http://localhost:8082/adm" + idCadastroadm, cadastroadmRequest)
			.then((response) => { console.log('cadastro alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alterar o cadastro.') })
		} else { //Cadastro:
			axios.post( "http://localhost:8082/adm", cadastroadmRequest)
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
         <div className="cad-adm">
            <ToastContainer/>
            <>
        
            <div class="form-cadastro" id="formcadastro">
         
                <form>
                <p id="cad">Cadastrar-se</p>

                    <div class="input-cadastro" id="nomecad">
                        <label for="nome" id="nomelab">Nome Completo </label>
                        <input type="text" id="nome" placeholder="Digite o seu nome completo" 
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        required/>
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
                            <input type="tel" id="foneCel" placeholder="(99) 99999-9999" 
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
                            <input type="text" id="endereco" placeholder="Digite o seu endereço" 
                            value={endereco}
                            onChange={e => setEndereco(e.target.value)}
                            required/>
                        </div>

                        <div class="input-cadastro" id="nomecad">
                        <label for="nome" id="nomelab">Matrícula</label>
                        <input type="text" id="nome" placeholder="Digite o seu nome completo" 
                        value={matricula}
                        onChange={e => setMatricula(e.target.value)}
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
                            <input type="password" id="criarSenha" placeholder="EX:12345678" 
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            required/>
                        </div>

                        <h1 id="log"> Já tem uma conta? <a href="/loginadm" id="link"> Login </a> </h1>
                       
                       {/* <div class="input-cadastro" id="primbutcad">
                        <Link to={"/"}>
                    <button id='primbotao'>Voltar</button>
                    </Link>
                    </div>*/}

                    <div id="btnadmconf">
                    <button id='admconf' onClick={() => salvar()}>Confirmar</button>
                </div>

                </form>
            </div>
        
                </>
                </div>
      );
}
	export default CadAdm;