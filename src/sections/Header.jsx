import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../css/Header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">
          <span className="logo-text">IT </span>
          <span className="logo-highlight">Academy</span>
        </Link>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <Link to="/about">Biz Haqimizda</Link>
          </li>
          <li>
            <Link to="/#certificates">Sertifikatlar</Link>
          </li>
          <li>
            <Link to="/#teachers">O'qituvchilar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
