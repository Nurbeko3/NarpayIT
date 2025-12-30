import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaLaptopHouse, FaArrowRight } from "react-icons/fa";
import "../css/About.css";

function AboutSection() {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <h2 className="section-title">
          Biz Haqimizda: <span className="highlight-text">IT Academy vazifasi</span>
        </h2>
        <p className="section-subtitle">
          Bizning asosiy vazifamiz – davlat tashkilotlarida ishlovchi xodimlarning raqamli
          savodxonligini zamonaviy talablar darajasiga ko'tarish.
        </p>

        <div className="about-grid">
          <div className="mission-card">
            <div className="card-icon-header">
              <FaLaptopHouse className="header-icon" />
            </div>
            <h3>Zamonaviy ish yuritish — kompyuterni bilishdan boshlanadi!</h3>
            <p>
              Bizning qisqa muddatli o‘quv kursimiz davlat xizmatchilari uchun kompyuter bilan
              ishlash bo‘yicha tez va samarali bilim berishga qaratilgan. Agar ish jarayonida Word,
              Excel, PDF bilan ishlashda qiynalayotgan bo‘lsangiz yoki kompyuterda tez va samarali
              ishlashni istasangiz — bu kurs aynan siz uchun!
            </p>
            <Link to="/register/kompyuter-bilimini-oshirish" className="btn btn-about-register">
              Kursga Ro'yxatdan O'tish <FaArrowRight />
            </Link>
          </div>

          <div className="skills-card">
            <h3>Kursda O'rganiladigan Asosiy Mavzular</h3>
            <ul className="skills-list">
              <li>
                <FaCheckCircle className="check-icon" /> Word’da hujjat tayyorlash
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> Excel’da jadval, formula va hisobotlar
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> PDF bilan ishlash va hujjat almashinuvi
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> Elektron pochta va internetdan foydalanish
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> Qidiruv tizimlari (Google) bilan ishlash
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> Sun’iy intellekt (AI) bilan ishlash
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> Davlat xizmatlari portallari bilan ishlash
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> Ijtimoiy tarmoqlardan professional
                foydalanish
              </li>
            </ul>
          </div>
        </div>

        <div className="contact-prompt">
          <p>Malaka oshirish bo'yicha qo'shimcha savollaringiz bormi?</p>
          <Link to="/#contact" className="btn btn-about-contact">
            Aloqaga Chiqish
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
