import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import crab from "../../images/crab.jpeg";
import './CadCliente.css';

function CadCliente (){
	

const [idCadastro, setIdCadastro] = useState();
const [nome, setNome] = useState();
const [dataNasc, setDataNasc] = useState();
const [email,setEmail] = useState();
const [cpf, setCpf] = useState();
const [rg, setRg] = useState();
const [foneCel, setFoneCel] = useState();
const [endereco, setEndereco] = useState();
const [criarSenha, setCriarSenha] = useState();



const { state } = useLocation();
   useEffect(() => {
	
	if (state != null && state.id != null) {
	axios.get( "api/cadastro/" + state.id)
    .then((response) => {
	setIdCadastro(response.data.id)
    setNome(response.data.nome)
	setDataNasc(formatarData(response.data.dataNasc))
    setEmail(response.data.email)
	setCpf(response.data.cpf)
	setRg(response.data.rg)
	setFoneCel(response.data.foneCel)
	setEndereco(response.data.endereco)
	setCriarSenha(response.data.criarSenha)


		})
	}
   }, [state])


	function salvar () {

		let cadastroRequest = {

			nome:nome,
			dataNasc:dataNasc,
            email:email,
			cpf:cpf,
			rg:rg,
			foneCel:foneCel,
			endereco:endereco,
			criarSenha:criarSenha,
		}

		if (idCadastro != null) { //Alteração:
			axios.put( "api/cadastro/" + idCadastro, cadastroRequest)
			.then((response) => { console.log('cadastro alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alterar o cadastro.') })
		} else { //Cadastro:
			axios.post( "api/cadastro", cadastroRequest)
			.then((response) => { console.log('Cadastrado com sucesso.') })
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
                        required/>
                    </div>
    
                    <div class="input-cadastro" id="nasccad">
                        <label for="data"> Data de Nascimento </label>
                        <input type="date" name="data" id="data"
                        value={dataNasc}
                        onChange={e => setDataNasc(e.target.value)}
                        />
                    </div>

                    <div class="input-cadastro" id="celcad">
                            <label for="foneCel"id="celab">Celular</label>
                            <input type="Celular" id="foneCel" placeholder="(99) 99999-9999" 
                            value={foneCel}
                            onChange={e => setFoneCel(e.target.value)}
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
                            value={criarSenha}
                            onChange={e => setCriarSenha(e.target.value)}
                            required/>
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
            </div>
        
            
      );
}
	export default CadCliente;