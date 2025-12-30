import "../css/Hero.css";
import CertificateLogo from "../assets/images/dallas-it-consulting.jpg";
import { FaCertificate, FaChalkboardTeacher, FaLaptopCode, FaArrowRight } from "react-icons/fa";

function HeroSection() {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <div className="hero-badge">
          <span>🚀 Kelajak kasblari</span>
        </div>
        <h1 className="hero-title">
          Kelajak kasbini <span className="highlight-text">Biz bilan o'zlashtiring</span>
        </h1>
        <p className="hero-subtitle">
          Kompaniyamiz tomonidan tasdiqlangan va e'tirof etilgan sertifikatlar beruvchi zamonaviy IT
          kurslari!
        </p>
        <div className="hero-features">
          <div className="feature-item">
            <FaCertificate className="feature-icon" />
            <div>
              <strong>Korxona Sertifikati:</strong> Ish beruvchilar tomonidan tan olingan hujjat.
            </div>
          </div>
          <div className="feature-item">
            <FaChalkboardTeacher className="feature-icon" />
            <div>
              <strong>Tajribali O'qituvchilar:</strong> Amaliyotga yo'naltirilgan ta'lim.
            </div>
          </div>
          <div className="feature-item">
            <FaLaptopCode className="feature-icon" />
            <div>
              <strong>Amaliy Ko'nikmalar:</strong> Darhol ishga kirishga tayyorlovchi dasturlar.
            </div>
          </div>
        </div>
        <div className="hero-actions">
          <a href="#courses" className="btn btn-primary">
            Kurslarni Ko'rish <FaArrowRight style={{ marginLeft: "8px" }} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Bepul Konsultatsiya
          </a>
        </div>
      </div>
      <div className="hero-image-placeholder">
        <div className="image-wrapper">
          <img src={CertificateLogo} alt="Sertifikat Logotipi" className="hero-main-image" />
          <div className="image-overlay"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
