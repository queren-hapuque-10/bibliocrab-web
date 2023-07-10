import React from 'react';
import CadAdm from '../../components/FormAdm/CadAdm';
import Navbar from '../../components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Footer from '../../components/Footer/Footer';

function Adm ()  {
  return (
    <main>
    <Navbar/>
    <ToastContainer />
    <CadAdm/>
    <Footer/>
    </main>
  )
}

export default Adm