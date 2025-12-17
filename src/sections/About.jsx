import React from "react";
import { Link } from "react-router-dom";
import "../css/About.css";

function AboutSection() {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <h2 className="section-title">
          Biz Haqimizda: IT Academy vazifasi
        </h2>
        <p className="section-subtitle">
          Bizning asosiy vazifamiz – davlat tashkilotlarida ishlovchi
          xodimlarning raqamli savodxonligini zamonaviy talablar darajasiga
          ko'tarish.
        </p>

        <div className="about-grid">
          {/* 1. Maqsad */}
          <div className="mission-card">
            <h3>
              🖥 Zamonaviy ish yuritish — kompyuterni bilishdan boshlanadi!
            </h3>
            <p>
              Bizning qisqa muddatli o‘quv kursimiz davlat xizmatchilari uchun
              kompyuter bilan ishlash bo‘yicha tez va samarali bilim berishga
              qaratilgan. Agar ish jarayonida Word, Excel, PDF bilan ishlashda
              qiynalayotgan bo‘lsangiz yoki kompyuterda tez va samarali
              ishlashni istasangiz — bu kurs aynan siz uchun!
            </p>
            <Link
              to="/register/kompyuter-bilimini-oshirish"
              className="btn btn-about-register"
            >
              Kursga Ro'yxatdan O'tish
            </Link>
          </div>

          {/* 2. Nimalarni O'rganasiz? */}
          <div className="skills-card">
            <h3>Kursda O'rganiladigan Asosiy Mavzular</h3>
            <ul className="skills-list">
              <li>✔️ Word’da hujjat tayyorlash</li>
              <li>✔️ Excel’da jadval, formula va hisobotlar</li>
              <li>✔️ PDF bilan ishlash va hujjat almashinuvi</li>
              <li>
                ✔️ Elektron pochta (email) va internetdan to‘g‘ri foydalanish
              </li>
              <li>
                ✔️ Qidiruv tizimlari (Google, Yandex) bilan samarali ishlash
              </li>
              <li>
                ✔️ Sun’iy intellekt ilovalari (ChatGPT, Gemini, Midjourney va
                b.) bilan ishlash
              </li>
              <li>
                ✔️ Davlat tizimidagi elektron platformalar va rasmiy saytlar
                bilan ishlash
              </li>
              <li>
                ✔️ Ijtimoiy tarmoqlardan (Instagram, Facebook) professional
                maqsadlarda foydalanish
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
