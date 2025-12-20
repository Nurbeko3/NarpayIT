// src/sections/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-grid">
        {/* 1. Logotip va Qisqacha Ma'lumot */}
        <div className="footer-about">
          <div className="logo">
            <Link to="/">
              <span className="logo-text">IT </span>
              <span className="logo-highlight">Academy</span>
            </Link>
          </div>
          <p>
            Zamonaviy IT kasblarni professional darajada o'rgatamiz va korxona
            tomonidan tasdiqlangan sertifikat beramiz.
          </p>
        </div>

        {/* 2. Tezkor Havolalar */}
        <div className="footer-links">
          <h4>Tezkor Havolalar</h4>
          <ul>
            <li>
              <Link to="/">Bosh Sahifa</Link>
            </li>
            {/* <a> dan Link ga o'zgartirildi, agar to'g'ri router mavjud bo'lsa */}
            <li>
              <Link to="/#courses">Kurslar</Link>
            </li>
            <li>
              <Link to="/all-courses">Katalog</Link>
            </li>
            <li>
              <Link to="/#contact">Aloqa</Link>
            </li>
          </ul>
        </div>

        {/* 4. Aloqa va Ijtimoiy Tarmoqlar */}
        <div className="footer-contact">
          <h4>Biz Bilan Bog'laning</h4>
          {/* Aniq telefon raqami va manzilni qo'shdik */}
          <p>
            📞 <a href="tel:+998994548065">+998 99 454 80 65</a>
          </p>
          <p>
            ✉️ <a href="mailto:itnarpay@gmail.com">itnarpay@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} IT Site Academy. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
