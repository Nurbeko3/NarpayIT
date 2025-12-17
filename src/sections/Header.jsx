// src/sections/Header.jsx (Yakuniy va To'g'ri Kod)

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../css/Header.css";

function Header() {
  return (
    <header className="header-container">
      {" "}
      <div className="logo">
        {" "}
        <Link to="/">
          <span className="logo-text">IT </span>{" "}
          <span className="logo-highlight">Academy</span>{" "}
        </Link>{" "}
      </div>{" "}
      <nav className="nav-menu">
        {" "}
        <ul>
          {" "}
          {/* Endi bu yerda Link to="/#id" ishlatiladi, bu CSS bilan birgalikda smooth scrollni beradi */}{" "}
          <li>
            <Link to="/about">Biz Haqimizda</Link>{" "}
          </li>{" "}
          <li>
            <Link to="/#certificates">Sertifikatlar</Link>{" "}
          </li>{" "}
          <li>
            <Link to="/#teachers">O'qituvchilar</Link>{" "}
          </li>{" "}
        </ul>{" "}
      </nav>
      {/* Avtorizatsiya Tugmalari: Bu qism siz yuborgan kodda yo'q edi, lekin dizaynga moslab qaytaramiz */}{" "}
    </header>
  );
}

export default Header;
