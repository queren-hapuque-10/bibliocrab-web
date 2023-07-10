import React from 'react';
import Footer from '../../components/Footer/Footer';
import PerfilCliente from '../../components/PerfilCliente/PerfilCliente';
import Navbar from '../../components/Navbar/Navbar';

function Perfil ()  {
  return (
    <main>
    <Navbar/>
    <PerfilCliente/>
    <Footer/>
    </main>
  )
}

export default Perfil