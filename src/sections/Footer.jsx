import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTelegram,
  FaInstagram,
  FaYoutube,
  FaLaptopCode,
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
                <FaLaptopCode
                  style={{ fontSize: "1.2em", color: "var(--primary-color)", marginRight: "8px" }}
                />
                <span className="logo-text">Narpay IT</span>
                <span className="logo-highlight"> Academy</span>
              </Link>
            </div>
            <p className="brand-desc">
              Kelajak kasblarini biz bilan o'rganing. Zamonaviy metodika, malakali ustozlar va real
              loyihalar.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Telegram">
                <FaTelegram />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
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
                <a href="tel:+998994548065" aria-label="Telefon">+998 99 454 80 65</a>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <a href="mailto:itnarpay@gmail.com" aria-label="Email">itnarpay@gmail.com</a>
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
          <p>&copy; {currentYear} Narpay IT Academy. Barcha huquqlar himoyalangan.</p>

          <div className="footer-actions">
            <div className="footer-mobile-cta">
              <a href="tel:+998994548065" className="footer-phone-mobile" aria-label="Call us">
                <FaPhone style={{ marginRight: "8px" }} /> +998 99 454 80 65
              </a>
            </div>

            <div className="footer-desktop-cta">
              <a href="/#contact" className="btn footer-contact-btn">Aloqaga chiqish</a>
              <a href="tel:+998994548065" className="footer-phone-link" aria-label="Call us">
                <FaPhone style={{ marginLeft: "10px", marginRight: "6px" }} /> +998 99 454 80 65
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
