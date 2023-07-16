import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Divider, Header, Icon, Modal, Segment, Card, Image, Menu } from 'semantic-ui-react';
import {FaEdit} from 'react-icons/fa';
import {HiTrash} from 'react-icons/hi';
import {FaFilter} from 'react-icons/fa';

import './ListLivro.css';

class ListLivro extends React.Component{

    state = {

        listaLivro: [],
        openModal: false,
        livroObj: {},
        menuFiltro: false,
        titulo: ''
    }

    componentDidMount = () => {
      
        this.carregarLista();
      
    }

    carregarLista = () => {

        axios.get("http://localhost:8082/livro/")
        .then((response) => {
          
            this.setState({
                listaLivro: response.data
            })
        })
    };

    handleMenuFiltro = () => {
        this.state.menuFiltro === true ? this.setState({menuFiltro: false}) : this.setState({menuFiltro: true})
    }
 
    handleChangeTitulo = (e, {value}) => {
        this.setState({
            titulo: value
        }, () => this.filtrarLivros())
    }

    filtrarLivros = () => {

        let formData = new FormData();

        formData.append('titulo', this.state.titulo);
 
        axios.post("http://localhost:8082/livro/filtrar", formData)
        .then((response) => {
            this.setState({
                listaLivro: response.data
            })
        })
   
    }
 
 
    formatarData = (dataParam) => {

        if (dataParam == null || dataParam == '') {
            return ''
        }
        
        let dia = dataParam.substr(8,2);
        let mes = dataParam.substr(5,2);
        let ano = dataParam.substr(0,4);
        let dataFormatada = dia + '-' + mes + '-' + ano;

        return dataFormatada
    };

    setOpenModal = (val) => {

        this.setState({ 
            openModal: val
        })
    };

    remover = async (id) => {
        console.log(id);

        await axios.delete('http://localhost:8082/livro/' + id)
        .then((response) => {
   
            console.log('Listagem removida com sucesso.')
   
            axios.get("http://localhost:8082/livro/")
            .then((response) => {
           
                this.setState({
                    listaLivro: response.data
                })
            })
        })
        .catch((error) => {
            console.log('Erro ao remover o livro.')
        })
    };


    exibirDetalheLivro = (id) => {

        axios.get("http://localhost:8082/livro/" + id)
        .then((response) => {
          
            this.setState({
                livroObj: response.data,
                openModal: true,
            })
        })

    };

    render(){
        return(

        <div>

<br/><br/>
<Menu compact>
        <Menu.Item
        name='menuFiltro'
        active={this.state.menuFiltro === true}
        onClick={this.handleMenuFiltro}
        className="btn-filter"
        >
        <FaFilter size={18}/>&nbsp;
           Filtrar
        </Menu.Item>
        </Menu>
        <br/>
        { this.state.menuFiltro ?
                                <Segment>
                                    <div className="div-form-filt">
                                    <Form className="form-filtros">
                                <div className="input-tit">

                                            <Form.Input
                                                value={this.state.titulo}
                                                onChange={this.handleChangeTitulo}
                                                label='Título'
                                                placeholder='Pesquisar por título'
                                                labelPosition='left'
                                            />                            
                        </div>
                                    </Form></div>
                                </Segment>:""
                            }

<br/>
        <div className="container-livros">
            <br/><br/>
        <div className="card-grid">
            { this.state.listaLivro.map(l => (  

        <Card className="card" key={l.id}>
        <Image className="img-capa" src={l.imagem} />
        <Card.Content>
        <Card.Header className="tit-liv">{l.titulo}</Card.Header>
        <Card.Meta className="autor">{l.autor}</Card.Meta>
        <Card.Meta>{l.qtdPag}</Card.Meta>
        </Card.Content>

        <Card.Content extra>
        
        <Link to="/cadlivros"  state={{id: l.id}}>
        <button className="details" id="alterar">Alterar</button>
        </Link>

        <a className="details"
        onClick={e => this.exibirDetalheLivro(l.id)}
        >Detalhes</a>

            <a id="deletar" className="details" onClick={e => this.remover(l.id)}>Deletar</a>
            
        </Card.Content>

            </Card>
             ))}
             
        </div>
        <div>
            <Link to={"/cadlivros"}> 
            <button id="cadLivro">Novo</button>
            </Link>
       
        </div>
        </div>

        <Modal className="modal-detalhes"
            basic
            onClose={() => this.setOpenModal(false)}
            onOpen={() => this.setOpenModal(true)}
            open={this.state.openModal}
        >
          <Modal.Header className="modal-tit">Detalhes</Modal.Header>
                <hr/><br/>
                <Modal.Content image className="modal-desc">
            <div className="div-img"><Image align="left" className="modal-img" src={this.state.livroObj.imagem} /></div>                    <Modal.Description>
                      
                       <div className="div-p"> 
                       <Header className="tit">{this.state.livroObj.titulo}</Header>
                        <p><strong>Autor: </strong>{this.state.livroObj.autor}</p>
                        <p><strong>Data de Lançamento: </strong>{this.formatarData(this.state.livroObj.lancamento)}</p>
                        <p><strong>N° de Páginas: </strong>{this.state.livroObj.qtdpag}</p><br/>
                        <p><strong>Sobre: </strong>{this.state.livroObj.sinopse}</p>
                       </div>
                     
                       
                    </Modal.Description>
                </Modal.Content>
                <hr/>
                <Modal.Actions>
                <Button  className="modal-fechar" onClick={() => this.setOpenModal(false)}>Fechar</Button>
                </Modal.Actions>
            
            </Modal>

  </div>
                                           
       )
   }
}

export default ListLivro;