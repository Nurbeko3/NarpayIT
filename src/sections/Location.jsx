import React from "react";
import "../css/Location.css";

function LocationSection() {
  // Yandex Maps iframe manbasini to'g'ridan-to'g'ri joylashtirish
  // Xavfsizlik sababli React da ba'zi iframe xususiyatlari cheklanishi mumkin, ammo bu odatiy usul.
  const mapIframeSrc = "https://yandex.uz/map-widget/v1/-/CLsvAHjf";

  // Xaritani to'liq saytga moslashtirish uchun bizning stilimiz bilan birga ishlatiladi.

  return (
    <section id="location" className="location-container">
      <h2 className="section-title">Bizning Joylashuvimiz</h2>
      <p className="section-subtitle">
        Oson topish uchun xaritada ko'ring va bizga tashrif buyuring.
      </p>

      <div className="location-grid">
        {/* 1. Xarita Joylashuvi (Embedded Map) */}
        <div className="map-wrapper">
          {/* Yandex Maps iframe kodini joylashtirish */}
          <iframe
            src={mapIframeSrc}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen={true}
            style={{ border: "0", borderRadius: "10px" }}
            title="O'quv Markaz Manzili Xaritasi"
          ></iframe>
        </div>

        {/* 2. Kontakt Ma'lumotlari va Ish Vaqti */}
        <div className="location-info">
          <h3>Aloqa & Ish Vaqti</h3>

          <div className="info-item">
            <div className="info-icon">📍</div>
            <div>
              <h4>Manzilimiz</h4>
              {/* Joylashuvni yanada aniqroq ko'rsatamiz */}
              <p>
                Samarqand viloyati, Narpay tumani Imom Buhoriy ko'chasi 114-uy.
                Mo'ljal: Eski 29-kollej
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📞</div>
            <div>
              <h4>Telefon</h4>
              <p>+998 99 454 80 65</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">⏰</div>
            <div>
              <h4>Ish Vaqti</h4>
              <p>Dushanba - Shanba: 09:00 dan 18:00 gacha</p>
              <p>Yakshanba: Dam olish kuni</p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps?q=39.937690,65.932115&ll=39.937690,65.932115&z=16"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-get-directions"
          >
            Marshrutni Ko'rish
          </a>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
