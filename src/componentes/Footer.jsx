import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <a href="https://www.instagram.com/huellas_encuadernacion/?hl=es-la" target="_blank" rel="noopener noreferrer" className="footer-link">
        <FaInstagram /> Instagram
      </a>
      <a href="https://wa.me/56983108961" target="_blank" rel="noopener noreferrer" className="footer-link">
        <FaWhatsapp /> WhatsApp
      </a>
      <p className="footer-title">Huellas Encuadernación</p>
    </footer>
  );
}

export default Footer;
