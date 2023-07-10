import React from 'react';
import CadCliente from '../../components/FormCliente/CadCliente';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Form ()  {
  return (
    <main>
    <Navbar/>
    <ToastContainer />
    <CadCliente/>
    <Footer/>
    </main>
  )
}

export default Form