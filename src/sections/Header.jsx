import React from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaCertificate, FaChalkboardTeacher, FaLaptopCode, FaTools } from "react-icons/fa";
import "../App.css";
import "../css/Header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">
          <FaLaptopCode style={{ fontSize: "1.4em", color: "var(--primary-color)" }} />
          <span className="logo-text">Narpay IT</span>
          <span className="logo-highlight"> Academy</span>
        </Link>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <Link to="/about">
              <FaInfoCircle style={{ marginRight: "5px" }} /> Biz Haqimizda
            </Link>
          </li>
          <li>
            <Link to="/certificates">
              <FaCertificate style={{ marginRight: "5px" }} /> Sertifikatlar
            </Link>
          </li>
          <li>
            <Link to="/xizmatlar">
              <FaTools style={{ marginRight: "5px" }} /> Xizmatlar
            </Link>
          </li>
          <li>
            <Link to="/#teachers">
              <FaChalkboardTeacher style={{ marginRight: "5px" }} /> O'qituvchilar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
