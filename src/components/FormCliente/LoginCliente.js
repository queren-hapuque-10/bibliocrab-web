import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './LoginCliente.css';

function LoginCliente (){
	

const [idLogin, setIdLogin] = useState();
const [email,setEmail] = useState();
const [senha, setSenha] = useState();



const { state } = useLocation();
   useEffect(() => {
	
	if (state != null && state.id != null) {
	axios.get( "api/login/" + state.id)
    .then((response) => {
	setIdLogin(response.data.id)
    setEmail(response.data.email)
	setSenha(response.data.senha)


		})
	}
   }, [state])


	function salvar () {

		let loginRequest = {

            email:email,
			senha:senha,
		}

		if (idLogin != null) { //Alteração:
			axios.put( "api/login/" + idLogin, loginRequest)
			.then((response) => { console.log('login alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alterar o login.') })
		} else { //login:
			axios.post( "api/login", loginRequest)
			.then((response) => { console.log('cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o login.') })
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
                <p id="cad">Login</p>
          
                        <div class="input-cadastro" id="emailcad">
                            <label for="email" id="emailab">E-mail</label>
                            <input type="email" id="email" placeholder="Digite o seu email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required/>
                        </div>
        

                         <div class="input-cadastro" id="senhacad">
                            <label for="senha" id="senhalab">Criar Senha</label>
                            <input type="senha" id="senha" placeholder="EX:12345678" 
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            required/>
                        </div>
                        <h1 id="log"> Não tem uma conta? <a href="/cadcliente" id="link"> Cadastro </a> </h1>
                        <div class="input-cadastro" id="primbutcad">
                        <Link to={"/"}>
                    <button id='primbotao'>Voltar</button>
                    </Link>
                    </div>
                    
                    <div class="input-cadastro" id="segbutcad">
                    <Link to={"/book"}>
                    <button id='segbotao' >Entrar</button>
                    </Link>
                </div>
    
                </form>
            </div>
            </div>
        
            
      );
}
	export default LoginCliente;