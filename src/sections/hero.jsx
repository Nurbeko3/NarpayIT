

import "../css/Hero.css";
import CertificateLogo from "../assets/images/dallas-it-consulting.jpg";

function HeroSection() {
  return (
    <section id="hero" className="hero-container">
        {" "}
      <div className="hero-content">
           {" "}
        <h1 className="hero-title">
               Kelajak kasbini{" "}
          <span className="highlight-text">Biz bilan o'zlashtiring</span>   {" "}
        </h1>
               {" "}
        <p className="hero-subtitle">
               Kompaniyamiz tomonidan tasdiqlangan va e'tirof etilgan
          sertifikatlar beruvchi zamonaviy IT kurslari!    {" "}
        </p>
           {" "}
        <div className="hero-features">
              {" "}
          <div className="feature-item">
                  Korxona Sertifikati: Ish beruvchilar tomonidan tan
            olingan hujjat.     {" "}
          </div>
              {" "}
          <div className="feature-item">
                 Tajribali O'qituvchilar: Amaliyotga yo'naltirilgan
            ta'lim.     {" "}
          </div>
              {" "}
          <div className="feature-item">
                 Amaliy Ko'nikmalar: Darhol ishga kirishga tayyorlovchi
            dasturlar.     {" "}
          </div>
             {" "}
        </div>
           {" "}
        <div className="hero-actions">
              {" "}
          <a href="#courses" className="btn btn-primary">
                  Kurslarni Ko'rish     {" "}
          </a>
              {" "}
          <a href="#contact" className="btn btn-secondary">
                  Bepul Konsultatsiya     {" "}
          </a>
             {" "}
        </div>
          {" "}
      </div>
         {/* Rasm joylashuvi va stillari */}  {" "}
      <div className="hero-image-placeholder">
           {" "}
        <img
          src={CertificateLogo}
          alt="Sertifikat Logotipi"
          className="hero-main-image"
        />{" "}
        {/* Yangi class qo'shildi */}   {" "}
        <p className="image-caption">
          IT sohasidagi imkoniyatlaringizni oching!
        </p>
          {" "}
      </div>
       {" "}
    </section>
  );
}

export default HeroSection;
