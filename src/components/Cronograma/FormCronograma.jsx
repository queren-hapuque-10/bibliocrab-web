import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Form } from 'semantic-ui-react';
import { mensagemErro, notifyError, notifySuccess } from '../../components/util/Util';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function FormCronograma () {

	const { state } = useLocation();

	const [idCronograma, setIdCronograma] = useState();
	const [livro, setLivro] = useState();
	const [domingo, setDomingo] = useState();
	const [segunda, setSegunda] = useState();
	const [terca, setTerca] = useState();
    const [quarta, setQuarta] = useState();
    const [quinta, setQuinta] = useState();
    const [sexta, setSexta] = useState();
    const [sabado, setSabado] = useState();


	useEffect(() => {

		if (state != null && state.id != null) {
			
			axios.get("http://localhost:8082/cronograma/" + state.id)
			.then((response) => {
				setIdCronograma(response.data.id)
				setLivro(response.data.livro)
				setDomingo(response.data.domingo)
				setSegunda(response.data.segunda)
				setTerca(response.data.terca)
                setQuarta(response.data.quarta)
                setQuinta(response.data.quinta)
                setSexta(response.data.sexta)
                setSabado(response.data.sabado)
			})
		}
		
	}, [state])

	function salvar() {

		let cronogramaRequest = {

			livro:livro,
            domingo:domingo,
            segunda:segunda,
            terca:terca,
            quarta:quarta,
            quinta:quinta,
            sexta:sexta,
            sabado:sabado,
            domingo:domingo
		}

		if (idCronograma != null) { //Alteração:

			axios.put("http://localhost:8082/cronograma/" + idCronograma, cronogramaRequest)
			.then((response) => { console.log('lista alterada com sucesso.') })
			.catch((error) => { console.log('Erro ao alterar a lista.') })

		} else { //Cadastro:
			
			axios.post("http://localhost:8082/cronograma/", cronogramaRequest)
			.then((response) => { notifySuccess('Cronograma cadastrado com sucesso.')		})
			.catch((error) => { if (error.response) {
				notifyError(error.response.data.errors[0].defaultMessage)
				} else {
				notifyError(mensagemErro)
				} 
				})
		}  

} 

	return(
		<div>
			 <Navbar />

< div className="body-livro" id="body-crono">
   <ToastContainer/>     
            <div class="container-livro">
      <h1 class="form-title">Cadastre seu Cronograma</h1>
      <Form>
        <div class="main-user-info">
          <div class="user-input-box">
            <label for="fullName">Livro</label>
            <input type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Livro a acompanhar"
                    value={livro}
					onChange={e => setLivro(e.target.value)}
                    />
          </div>
          <div class="user-input-box">
            <label for="username">Domingo</label>
            <input type="text"
                    id="username"
                    name="username"
                    placeholder="Páginas a ler"
                    value={domingo}
					onChange={e => setDomingo(e.target.value)}
                    />
          </div>
          <div class="user-input-box">
            <label for="email">Segunda</label>
            <input type="text"
                    id="phonenumber"
                    name="email"
                    placeholder="Páginas a ler"
                    value={segunda}
					onChange={e => setSegunda(e.target.value)}
                    />
          </div>
          <div class="user-input-box">
            <label for="phoneNumber">Terça</label>
            <input type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Páginas a ler"
                    value={terca}
					onChange={e => setTerca(e.target.value)}
                    />
          </div>
          <div class="user-input-box">
            <label for="password">Quarta</label>
            <input type="text"
                    id="password"
                    name="number"
                    placeholder="Páginas a ler"
                    value={quarta}
					onChange={e => setQuarta(e.target.value)}
                    />
          </div>
          <div class="user-input-box">
            <label for="confirmPassword">Quinta</label>
            <input type="text"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Páginas a ler"
                    value={quinta}
					onChange={e => setQuinta(e.target.value)}
                    />
          </div>

		  <div class="user-input-box">
            <label for="confirmPassword">Sexta</label>
            <input type="text"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Páginas a ler"
                    value={sexta}
					onChange={e => setSexta(e.target.value)}
                    />
          </div>

		  <div class="user-input-box">
            <label for="confirmPassword">Sábado</label>
            <input type="text"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Páginas a ler"
                    value={sabado}
					onChange={e => setSabado(e.target.value)}
                    />
          </div>

        </div>
        <div class="form-submit-btn">
          <input type="submit" value="Cadastrar Cronograma" 	onClick={() => salvar()}/>
		  <Link to="/perfil">
			<input type="submit" value="Visualizar Cronograma" id="view"/>
		  </Link>
        </div>
      </Form>

    </div>
        </div>
		<Footer/>
		</div>
	)
                }
