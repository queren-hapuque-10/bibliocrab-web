import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './LoginCliente.css';
import { registerSuccessfulLoginForJwt } from "../util/AuthenticationService";
import { notifyError } from "../util/Util";
import { ToastContainer } from "react-toastify";
import { Form } from 'semantic-ui-react';

function LoginCliente (){
	
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');

    function entrar() {
        
        if (username !== '' && senha !== '') {

            let authenticationRequest = {
                username: username,
                password: senha,
            }
    
            axios.post("http://localhost:8082/login", authenticationRequest)
            .then((response) => {

                registerSuccessfulLoginForJwt(response.data.token, response.data.expiration)
                navigate("/perfil");
                
            })
            .catch((error) => {

                notifyError('Usuário não encontrado')
            })
        }
    }

	
        return(

            <div className="cad-cliente">
                <ToastContainer/>
            <div class="form-cadastro" id="formcadastro">
         
                <Form>
                <p id="cad">LOGIN</p>
          
                        <div class="input-cadastro" id="emailcad">
                            <label for="email" id="emailab">E-mail</label>
                            <input type="email" id="email" placeholder="Digite o seu email" 
                             value={username}
                             onChange={e => setUsername(e.target.value)}
                            required/>
                        </div>
        

                         <div class="input-cadastro" id="senhacad">
                            <label for="senha" id="senhalab">Senha</label>
                            <input type="senha" id="senha" placeholder="Digite a sua senha" 
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            required/>
                        </div>
                        <h1 id="log"> Não tem uma conta? <a href="/cadcliente" id="link"> Cadastre-se </a> </h1>
                        <div class="input-cadastro" id="primbutcad">
                      
                <Link to={"/"}>
                    <button id='primbotao'>Voltar</button>
                    </Link>
                    </div>
                    
                    <div class="input-cadastro" id="segbutcad">
               
                    <button id='segbotao'  onClick={() => entrar()}>
                    Entrar</button>
                  
                </div>
    
                </Form>
            </div>
            </div>
        
            
      );
}
	export default LoginCliente;