import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { GiCrabClaw } from 'react-icons/gi';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer(){

    return(

<div>
<footer>
<div id="footer_content">
    <div id="footer_contacts">

    <Link to = "/" className='logo-footer' >
            <h2>BIBLIOCRAB</h2>
                </Link> 
    
<br/>
        <div id="footer_social_media">
            <a href="#" class="footer-link" id="instagram">
            <FaInstagram size={15} />
            </a>

            <a href="#" class="footer-link" id="facebook">
            <FaFacebookF size={15}/>
            </a>

            <a href="#" class="footer-link" id="whatsapp">
                <FaWhatsapp size={15} />
            </a>
        </div>
    </div>
    
    <ul class="footer-list">
        <li>
            <h3>Quem Somos</h3>
        </li>
        <li>
            <a href="/about" class="footer-link">Quem Somos</a>
        </li>
        <li>
            <a href="#" class="footer-link">Editoras Parceiras</a>
        </li>
        <li>
            <a href="#" class="footer-link">Clientes</a>
        </li>
    </ul>

    <ul class="footer-list">
        <li>
            <h3>Serviços</h3>
        </li>        
        <li>
            <a href="/services" class="footer-link">Assinaturas</a>
        </li>

        <li>
            <a href="/loginadm" class="footer-link">Administrador</a>
        </li>

        <li>
            <a href="/cadadm" class="footer-link">Ajuda</a>
        </li>
    </ul>

    <div id="footer_subscribe">
        <h3>Subscribe</h3>

        <p>
        Digite seu e-mail para 
        ser notificado sobre nossas novidades
        </p>

        <div id="input_group">
            <input type="email" id="email" placeholder='e-mail'/>
            <button>
            <GiCrabClaw size={22}/>
            </button>
        </div>
    </div>
</div>

<div id="footer_copyright">
© 2023 by bibliocrab.com
</div>
</footer>
</div>

    )
}

export default Footer;