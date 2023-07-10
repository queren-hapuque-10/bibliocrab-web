import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function CategoriaLivros () {

    const { state } = useLocation();

	const [idCadastrolivros, setIdCadastrolivros] = useState();
    const [genero, setGenero] = useState();

    useEffect(() => {

        if (state != null && state.id != null) {

            axios.get(ENDERECO_API + "api/categorialivros/" + state.id)
            .then((response) => {
                
                setIdCadastrolivros(response.data.id)
                setGenero(response.data.genero)
            })
        }
        
    }, [state])

    function salvar() {

		let cadastrolivrosRequest = {

			genero: genero,
		}

	const [idCadastrolivros] = useState();
    if (id != null) { //Alteração:

            axios.put(ENDERECO_API + "api/categorialivros/" + idCadastrolivros, cadastrolivrosRequest)
		    .then((response) => { console.log('Categoria de produto alterado com sucesso.') })
		    .catch((error) => { console.log('Erro ao alter uma aategoria de produto.') })

        } else { //Cadastro:
        
            axios.post(ENDERECO_API + "api/categorialivros", cadastrolivrosRequest)
		    .then((response) => { console.log('Categoria de produto cadastrado com sucesso.') })
		    .catch((error) => { console.log('Erro ao incluir a categoria de produto.') })

        }
	}

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    { idCadastrolivros === undefined &&
                        <h2> <span style={{color: 'darkgray'}}> Gênero de Livros &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    { idCadastrolivros !== undefined &&
                        <h2> <span style={{color: 'darkgray'}}> Gênero de Livros &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Input
                                required
                                fluid
                                label='Gênero'
                                maxLength="200"
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)}
                            />

                        </Form>

                        <div style={{marginTop: '4%'}}>

                            <Button
                                label='Voltar'
                                circular
                                color='orange'
                                icon='reply'
                                as={Link} 
                                to='/list-categoria-produto'
                            />

                            <Button
                                label='Salvar'
                                circular
                                color='blue'
                                icon='save'
                                floated='right'
                                onClick={() => salvar()}
                            />

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}