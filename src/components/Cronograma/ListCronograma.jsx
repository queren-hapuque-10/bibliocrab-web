import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table } from 'semantic-ui-react';
import {FaEdit} from 'react-icons/fa';
import {HiTrash} from 'react-icons/hi';
import './ListCronograma.css';

class ListCronograma extends React.Component{

    state = {

        listaCronograma: [],
      
    }

    componentDidMount = () => {
      
        this.carregarLista();
      
    }

    carregarLista = () => {

        axios.get("http://localhost:8082/cronograma/")
        .then((response) => {
          
            this.setState({
               listaCronograma: response.data
            })
        })

    };




    remover = async (id) => {
        console.log(id);

        await axios.delete('http://localhost:8082/cronograma/' + id)
        .then((response) => {
   
            console.log('Listagem removida com sucesso.')
   
            axios.get("http://localhost:8082/cronograma/")
            .then((response) => {
           
                this.setState({
                    listaCronograma: response.data
                })
            })
        })
        .catch((error) => {
            console.log('Erro ao remover o cronograma.')
        })
    };

    render(){
        return(
            <div>
                <div className='cont-crono' style={{marginTop: '4%'} }>

                    <Container textAlign='justified' >

                        <h2 style={{ textAlign:'center'}}> CRONOGRAMA </h2>

                        <Divider />

                        <div style={{textAlign:'center'}}>
                            <Link to={'/form-cronograma'}>
                            <Button className='btn' id='btn-crono' >
                                  Adicionar +
                            </Button>
                            </Link>

                            <br/><br/><br/>
                      
                            <Table className='table table-responsive' >

                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell id="livro">Livro</Table.HeaderCell>
                                        <Table.HeaderCell>Domingo</Table.HeaderCell>
                                        <Table.HeaderCell>Segunda</Table.HeaderCell>
                                        <Table.HeaderCell>Terça</Table.HeaderCell>
                                        <Table.HeaderCell>Quarta</Table.HeaderCell>
                                        <Table.HeaderCell>Quinta</Table.HeaderCell>
                                        <Table.HeaderCell>Sexta</Table.HeaderCell>
                                        <Table.HeaderCell>Sábado</Table.HeaderCell>

                                        <Table.HeaderCell width={2} id="acoes"> Ações</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                          
                                <Table.Body>

                                    { this.state.listaCronograma.map(c => (

                                        <Table.Row key={c.id}> 
                                            <Table.Cell>{c.livro}</Table.Cell>
                                            <Table.Cell>{c.domingo}</Table.Cell>
                                            <Table.Cell>{c.segunda}</Table.Cell>
                                            <Table.Cell>{c.terca}</Table.Cell>
                                            <Table.Cell>{c.quarta}</Table.Cell>
                                            <Table.Cell>{c.quinta}</Table.Cell>
                                            <Table.Cell>{c.sexta}</Table.Cell>
                                            <Table.Cell>{c.sabado}</Table.Cell>
                                            <Table.Cell>
                                              
                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar as tarefas da semana'
                                                icon>
                                            <Link to="/form-cronograma" state={{id: c.id}} style={{color: 'blue'}}> <FaEdit /></Link>
                                            </Button> &nbsp;
                                                   
                                                <Button
                                                   inverted
                                                   circular
                                                   style={{color: 'red'}}
                                                   title='Clique aqui para remover as tarefas da semana' 
                                                   onClick={e => this.remover(c.id)}
                                                   ><HiTrash/></Button>

                                            </Table.Cell>
                                        </Table.Row>
                                    ))}

                               </Table.Body>
                           </Table>
                       </div>
                   </Container>
               </div>
                
           </div>
       )
   }
}

export default ListCronograma;