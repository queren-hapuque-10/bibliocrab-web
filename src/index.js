import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import BookDetails from "./components/BookDetails/BookDetails";
import { AppProvider } from './context';
import './index.css';
import Ab from './pages/About/Ab';
import Acervo from './pages/Acervo/Acervo';
import Adm from './pages/FormAdm/Adm';
import Form from './pages/FormCliente/Form';
import Home from './pages/Home/Home';
import Servicos from './pages/Servicos/Servicos';
import Perfil from './pages/Perfil/Perfil';
import FormCronograma from './components/Cronograma/FormCronograma';
import ListCronograma from './components/Cronograma/ListCronograma';
import FormAssinatura from './pages/FormCliente/FormAssinatura';
import Livros from './pages/CadLivros/Livros';
import LoginClient from './pages/FormCliente/LoginClient';
import AdmLog from './pages/FormAdm/AdmLog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<Ab />} />
          <Route path = "/book" element = {<Acervo />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
          <Route path ='/services' element = {<Servicos/>}/>
          <Route path = "/cadcliente" element = {<Form/>}/>
          <Route path = "/cadadm" element = {<Adm/>}/>
          <Route path = "/login" element = {<LoginClient/>}/>
          <Route path = '/perfil' element = {<Perfil/>}/>
          <Route path = '/form-cronograma' element = {<FormCronograma/>}/>
          <Route path = '/list-cronograma' element = {<ListCronograma/>}/>
          <Route path = "/loginadm" element = {<AdmLog/>}/>
          <Route path = "/assinatura" element = {<FormAssinatura/>}/>
          <Route path = "/cadlivros" element = {<Livros/>}/>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
