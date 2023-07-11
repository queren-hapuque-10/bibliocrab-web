import React from "react";
import axios from "axios";
import {mensagemErro, notifyError, notifySuccess } from '../../components/util/Util';
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar/Navbar";

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
<ToastContainer/>
			<div style={{marginTop: '3%'}}>

				<Container textAlign='justified' >

					{ idCronograma === undefined &&
						<h2> <span style={{color: 'darkgray'}}> Cronograma &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
					}
					{ idCronograma != undefined &&
						<h2> <span style={{color: 'darkgray'}}> Cronograma &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
					}
					<Divider />

					<div style={{marginTop: '4%'}}>

						<Form style={{textAlign:'center'}}>

							<Form.Group widths='equal'>

								<Form.Input
									required
									fluid
									label='Livro'
									maxLength="100"
									value={livro}
									onChange={e => setLivro(e.target.value)}
								/>

								<Form.Input
									fluid
									label='Segunda'
										value={segunda}
										onChange={e => setSegunda(e.target.value)}
									/> 

                                <Form.Input
									fluid
									label='Terça'
									width={6}
										value={terca}
										onChange={e => setTerca(e.target.value)}
									/> 
                                    
                                    <Form.Input
									required
									fluid
									label='Quarta'
									maxLength="100"
									value={quarta}
									onChange={e => setQuarta(e.target.value)}
								/>

                                <Form.Input
									fluid
									label='Quinta'
										value={quinta}
										onChange={e => setQuinta(e.target.value)}
									/> 

                            </Form.Group>
                           

                            <Form.Group widths='equal'>

                                <Form.Input
									fluid
									label='Sexta'
									width={6}
										value={sexta}
										onChange={e => setSexta(e.target.value)}
									/> 
                                    
                                    <Form.Input
									required
									fluid
									label='Sábado'
									maxLength="100"
									value={sabado}
									onChange={e => setSabado(e.target.value)}
								/>

                                    <Form.Input
									required
									fluid
									label='Domingo'
									maxLength="100"
									value={domingo}
									onChange={e => setDomingo(e.target.value)}
								/>


							</Form.Group>

							<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

								<Button
									type="button"
									inverted
									circular
									icon
									labelPosition='left'
									color='orange'
								>
									<Icon name='reply' />
									<Link to={'/list-Cronograma'}>Voltar</Link>
								</Button>

								<Container textAlign='right'>
									
									<Button
										inverted
										circular
										icon
										labelPosition='left'
										color='blue'
										floated='right'
										onClick={() => salvar()}
									>
										<Icon name='save' />
										Salvar
									</Button>
									
								</Container>

							</Form.Group>

						</Form>
					</div>
				</Container>
			</div>
		</div>
	)
                }
