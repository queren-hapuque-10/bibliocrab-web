import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './LoginAdm.css';

function LoginAdm (){
	

const [idLoginadm, setIdLoginadm] = useState();
const [email,setEmail] = useState();
const [senha, setSenha] = useState();



const { state } = useLocation();
   useEffect(() => {
	
	if (state != null && state.id != null) {
	axios.get( "http://localhost:8082/loginadm" + state.id)
    .then((response) => {
	setIdLoginadm(response.data.id)
    setEmail(response.data.email)
	setSenha(response.data.senha)


		})
	}
   }, [state])


	function salvar () {

		let loginadmRequest = {

            email:email,
			senha:senha,
		}

		if (idLoginadm != null) { //Alteração:
			axios.put( "http://localhost:8082/loginadm" + idLoginadm, loginadmRequest)
			.then((response) => { console.log('login alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alterar o login.') })
		} else { //login:
			axios.post( "http://localhost:8082/loginadm", loginadmRequest)
			.then((response) => { console.log('login cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o login.') })
		}
 
	}
        return(

            <div className="log-adm">
         {/*<div className='crab-img'>
    <img src = {crab} alt = "" />
     </div>*/} 
            <div class="form-cadastro" id="formcadastro">
         
                <form action="#">
                <p id="cad">LOGIN</p>
          
                        <div class="input-cadastro" id="emailcad">
                            <label for="email" id="emailab">Matrícula</label>
                            <input type="text" id="email" placeholder="Digite o seu email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required/>
                        </div>
        
                         <div class="input-cadastro" id="senhacad">
                            <label for="senha" id="senhalab">Senha</label>
                            <input type="senha" id="senha" placeholder="Digite a sua senha" 
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            required/>
                        </div>

                        <h1 id="log"> Não tem uma conta? <a href="/cadadm" id="link"> Cadastro </a> </h1>
                        <div class="input-cadastro" id="primbutcad">
                        <Link to={"/cadadm"}>
                    <button id='primbotao'>Voltar</button>
                    </Link>
                    </div>
                    
                    <div class="input-cadastro" id="segbutcad">
                    <Link to={"/cadlivros"}>
                    <button id='segbotao'>Entrar</button>
                    </Link>
                </div>
    
                </form>
            </div>
            </div>
        
            
      );
}
	export default LoginAdm;