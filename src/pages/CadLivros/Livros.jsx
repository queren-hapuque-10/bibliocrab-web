import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import CadLivros from '../../components/CadLivros/CadLivros';
function Livros ()  {
  return (
    <main>
    <Navbar/>
    <CadLivros/>
    <Footer/>
    </main>
  )
}

export default Livros