import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-router-dom';
import logoImg from "../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#241E58"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">

            <li className='nav-item'>
              <Link to = "/about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Sobre</Link>
            </li>

            <li className='nav-item'>
              <Link to = "/book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Acervo</Link>
            </li>
            
            <li className='nav-item'>
              <Link to = "/services" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>planos</Link>
            </li>

         { /* <li className='nav-item'>
              <Link to = "/perfil" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>perfil</Link>
            </li>*/} 

            <li className='nav-item'>
              <Link to = "/login" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'><FaUserCircle size={28}/></Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar