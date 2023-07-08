import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './CadCliente.css';

function CadCliente (){
	
const { state } = useLocation();
const [idCliente, setIdCliente] = useState();
const [nome, setNome] = useState();
const [dataNascimento, setDataNascimento] = useState();
const [email,setEmail] = useState();
const [cpf, setCpf] = useState();
const [rg, setRg] = useState();
const [celular, setCelular] = useState();
const [endereco, setEndereco] = useState();
const [senha, setSenha] = useState();


   useEffect(() => {
	
	if (state != null && state.id != null) {
	axios.get( "/cliente" + state.id)
    .then((response) => {
	setIdCliente(response.data.idCliente)
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


	function salvar () {

		let cadastroRequest = {

			nome:nome,
			dataNascimento:dataNascimento,
            email:email,
			cpf:cpf,
			rg:rg,
			celular:celular,
			endereco:endereco,
			senha:senha
		}

	/*	if (idCliente != null) { //Alteração:
			axios.put( "api/cadastro/" + idCliente, cadastroRequest)
			.then((response) => { console.log('cadastro alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alterar o cadastro.') })
		} else { //Cadastro:
			axios.post( "api/cadastro", cadastroRequest)
			.then((response) => { console.log('Cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o cadastro.') })
		} */

        axios.post("http://localhost:8082/cliente", cadastroRequest)
        .then((response) => { 
            console.log('Cliente cadastrado com sucesso.') 
            
    })
        .catch((error) => { console.log('Erro ao incluir o Cliente.') })  

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
<>
            <div className="cad-cliente">
         {/*<div className='crab-img'>
    <img src = {crab} alt = "" />
     </div>*/} 
            <div class="form-cadastro" id="formcadastro">
         
                <form action="#">
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
                            <input type="Celular" id="foneCel" placeholder="(99) 99999-9999" 
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
                            <input type="email" id="email" placeholder="Digite o seu email" 
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
            </div>
        </>
            
      );
}
	export default CadCliente;