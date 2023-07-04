import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';
import Home from './pages/Home/Home';
import BookDetails from "./components/BookDetails/BookDetails";
import Acervo from './pages/Acervo/Acervo';
import Ab from './pages/About/Ab';
import Bk from './pages/Acervo/Usuario/Bk';
import Servicos from './pages/Servicos/Servicos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<Ab />} />
          <Route path = "/book" element = {<Acervo />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
          <Route path = "/books" element = {<Bk/>} />
          <Route path='/services' element = {<Servicos/>}/>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
