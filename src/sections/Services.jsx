import React from "react";
import { Link } from "react-router-dom";
import { FaWindows, FaLinux, FaTools, FaNetworkWired, FaGlobe, FaDownload, FaPhoneAlt } from "react-icons/fa";
import "../css/Services.css";

function Services() {
  return (
    <section className="services-container">
      <div className="services-header">
        <h2 className="section-title">Xizmatlarimiz</h2>
        <p className="section-subtitle">Sizga qulay va professional xizmatlar — ofisdan tortib onlaynga qadar</p>
      </div>

      <div className="services-grid">
        <Link to="/#contact" className="service-link" aria-label="Kompyuterni Windows qilib berish">
          <article className="service-card" role="button" tabIndex="0">
            <div className="service-icon"><FaWindows /></div>
            <div className="service-body">
              <h3>Kompyuterni Windows qilib berish</h3>
              <p>Operatsion tizimni o'rnatish, optimallashtirish va xavfsizlik sozlamalarini qilish.</p>
              <ul>
                <li>Windows 10/11 o'rnatish</li>
                <li>Kerakli dasturlar va yangilanishlar</li>
                <li>Tizim optimallashtirish</li>
              </ul>
            </div>
          </article>
        </Link>

        <Link to="/#contact" className="service-link" aria-label="Kompyuterni Linux qilib berish">
          <article className="service-card" role="button" tabIndex="0">
            <div className="service-icon"><FaLinux /></div>
            <div className="service-body">
              <h3>Kompyuterni Linux qilib berish</h3>
              <p>Ubuntu, Debian, yoki boshqa tarqatmalar bo'yicha to'liq sozlash va xizmat ko'rsatish.</p>
              <ul>
                <li>Dual-boot yoki to'liq Linux</li>
                <li>Server va xizmatlar sozlamalari</li>
                <li>Terminal va paketlar bilan ishlash</li>
              </ul>
            </div>
          </article>
        </Link>

        <Link to="/#contact" className="service-link" aria-label="Driverlarni o'rnatib berish">
          <article className="service-card" role="button" tabIndex="0">
            <div className="service-icon"><FaTools /></div>
            <div className="service-body">
              <h3>Driverlarni o'rnatib berish</h3>
              <p>Barcha qurilmalar uchun sertifikatlangan va mos drayverlarni topib, o'rnatamiz.</p>
              <ul>
                <li>Chipset, video, audio, tarmoq</li>
                <li>Avtomatik va qo'lda yangilash</li>
                <li>Muammolarni aniqlash va tuzatish</li>
              </ul>
            </div>
          </article>
        </Link>

        <Link to="/#contact" className="service-link" aria-label="Sayt yaratib berish">
          <article className="service-card" role="button" tabIndex="0">
            <div className="service-icon"><FaGlobe /></div>
            <div className="service-body">
              <h3>Sayt yaratib berish</h3>
              <p>Oddiy landingdan murakkab korporativ sayt va onlayn-do'konlargacha.</p>
              <ul>
                <li>Responsiv dizayn va SEO'ga tayyor</li>
                <li>CMS (WordPress) yoki statik sayt</li>
                <li>Tez ochiladigan, xavfsiz va ishonchli</li>
              </ul>
            </div>
          </article>
        </Link>

        <Link to="/#contact" className="service-link" aria-label="Telegram botlar yaratib berish">
          <article className="service-card" role="button" tabIndex="0">
            <div className="service-icon"><FaNetworkWired /></div>
            <div className="service-body">
              <h3>Telegram botlar yaratib berish</h3>
              <p>Foydalanuvchi bilan aloqani avtomatlashtirish uchun botlar ishlab chiqamiz.</p>
              <ul>
                <li>Ma'lumotli botlar va ma'lumot bazasi integratsiyasi</li>
                <li>To'lovlar, bildirishnomalar, admin panel</li>
                <li>ChatGPT / AI integratsiya — istak bo'yicha</li>
              </ul>
            </div>
          </article>
        </Link>

        <Link to="/#contact" className="service-link" aria-label="Programmalarni o'rnatish">
          <article className="service-card" role="button" tabIndex="0">
            <div className="service-icon"><FaDownload /></div>
            <div className="service-body">
              <h3>Siz xohlagan programmalarni o'rnatib ham beramiz</h3>
              <p>Ofis paketlari, antiviruslar, maxsus va ta'lim dasturlarini tez va to'g'ri o'rnatamiz.</p>
              <ul>
                <li>Microsoft Office va LibreOffice</li>
                <li>Antiviruslar va xavfsizlik dasturlari</li>
                <li>Maxsus ish dasturlari va o'quv ilovalari</li>
              </ul>
            </div>
          </article>
        </Link>
      </div>

      <div className="services-cta">
        <p>Qo'shimcha ma'lumot va narxlar: <span className="contact-phone"><FaPhoneAlt style={{ marginRight: "8px" }} /> <a href="tel:+998994548065">+998 99 454 80 65</a></span></p>
        <a href="tel:+998994548065" className="btn btn-services-contact">Aloqaga chiqish</a>
      </div>
    </section>
  );
}

export default Services;
