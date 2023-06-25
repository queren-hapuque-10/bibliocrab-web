import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Hm from '../../components/Home/Hm'
import Teste from './Teste';
import Footer from '../../components/Footer/Footer';
import Services from '../../components/Services/Services';
import Banner from '../../components/Home/Banner';

function Home ()  {
  return (
    <main>
      <Navbar/>
      <Banner/>
      <Hm/>
    <Footer/>
    </main>
  )
}

export default Home