import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import ListLivro from '../../components/CadLivros/ListLivro';

function ListLivros ()  {
  return (
    <main>
    <Navbar/>
    <ListLivro/>
    <Footer/>
    </main>
  )
}

export default ListLivros