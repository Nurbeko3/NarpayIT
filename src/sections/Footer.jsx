import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTelegram,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "../css/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo footer-logo">
              <Link to="/">
                <span className="logo-text">IT </span>
                <span className="logo-highlight">Academy</span>
              </Link>
            </div>
            <p className="brand-desc">
              Kelajak kasblarini biz bilan o'rganing. Zamonaviy metodika, malakali ustozlar va real
              loyihalar.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">
                <FaTelegram />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Sahifalar</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/">Bosh Sahifa</Link>
              </li>
              <li>
                <a href="/#courses">Kurslar</a>
              </li>
              <li>
                <Link to="/certificates">Sertifikatlar</Link>
              </li>
              <li>
                <Link to="/about">Biz Haqimizda</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Bog'lanish</h4>
            <ul className="contact-list">
              <li>
                <FaPhone className="contact-icon" />
                <a href="tel:+998994548065">+998 99 454 80 65</a>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <a href="mailto:itnarpay@gmail.com">itnarpay@gmail.com</a>
              </li>
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>Narpay tumani, Oqtosh sh.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} IT Academy. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
