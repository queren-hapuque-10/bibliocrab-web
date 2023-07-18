import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import ListLivro from '../../components/ListLivro/ListLivro';

function ListLivroCliente ()  {
  return (
    <main>
    <Navbar/>
    <ListLivro/>
    <Footer/>
    </main>
  )
}

export default ListLivroCliente