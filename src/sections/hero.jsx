import React, { useState, useEffect, useRef } from "react";
import "../css/Hero.css";
import CertificateLogo from "../assets/images/dallas-it-consulting.jpg";
import HeroSlide2 from "../assets/images/hero-slide-2.png";
import HeroSlide3 from "../assets/images/hero-slide-3.png";
import {
  FaCertificate,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function HeroSection() {
  const slides = [
    {
      key: "slide-1",
      title: "Kelajak kasbini",
      highlight: "Biz bilan o'zlashtiring",
      subtitle: "Komanda bilan real loyihalar ustida o'rganing — amaliy yo'nalishlar.",
      bg: `linear-gradient(to bottom, rgba(15,23,42,0.4), rgba(15,23,42,0.8)), url(${CertificateLogo})`,
    },
    {
      key: "slide-2",
      title: "Tezkor va amaliy",
      highlight: "Ishga tayyor ko'nikmalar",
      subtitle: "Kurslarimiz real ish jarayonlariga yo'naltirilgan.",
      bg: `linear-gradient(to bottom, rgba(15,23,42,0.4), rgba(15,23,42,0.8)), url(${HeroSlide2})`,
    },
    {
      key: "slide-3",
      title: "Onlayn & Ofis",
      highlight: "Fleksibil ta'lim",
      subtitle: "Sizga qulay formatda — online yoki ofisda tahsil oling.",
      bg: `linear-gradient(to bottom, rgba(15,23,42,0.4), rgba(15,23,42,0.8)), url(${HeroSlide3})`,
    },
  ];

  const [active, setActive] = useState(0);
  const timerRef = useRef(null);
  const autoplayDelay = 5000;

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const startAutoplay = () => {
    stopAutoplay();
    timerRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, autoplayDelay);
  };

  const stopAutoplay = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const goPrev = () => {
    stopAutoplay();
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    stopAutoplay();
    setActive((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="hero" className="hero-container">
      {/* Background Carousel */}
      <div className="hero-bg-carousel">
        {slides.map((s, idx) => (
          <div
            key={s.key}
            className={`bg-slide ${idx === active ? "active" : ""}`}
            style={{ background: s.bg }}
          >
            <div className="bg-overlay" />
          </div>
        ))}
      </div>

      {/* Main Content Overlay */}
      <div className="hero-content-wrapper">
        <div className="container">
          <div className="hero-badge fade-in-up">
            <span>🚀 Kelajak kasblari</span>
          </div>

          <h1 className="hero-title fade-in-up delay-1">
            {slides[active].title} <br />
            <span className="highlight-text">{slides[active].highlight}</span>
          </h1>

          <p className="hero-subtitle fade-in-up delay-2">{slides[active].subtitle}</p>

          <div className="hero-actions fade-in-up delay-3">
            <a href="#courses" className="btn btn-primary">
              Kurslarni Ko'rish <FaArrowRight style={{ marginLeft: "8px" }} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Bepul Konsultatsiya
            </a>
          </div>

          <div className="hero-features-row fade-in-up delay-4">
            <div className="feature-card">
              <FaCertificate className="feature-icon" />
              <div className="feature-text">
                <strong>Sertifikat</strong>
                <span>Ish beruvchilar tan oladi</span>
              </div>
            </div>
            <div className="feature-card">
              <FaChalkboardTeacher className="feature-icon" />
              <div className="feature-text">
                <strong>Mentorlar</strong>
                <span>Tajribali mutaxassislar</span>
              </div>
            </div>
            <div className="feature-card">
              <FaLaptopCode className="feature-icon" />
              <div className="feature-text">
                <strong>Amaliyot</strong>
                <span>Real loyihalar</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="hero-controls">
        <button className="control-btn prev" onClick={goPrev} aria-label="Previous slide">
          <FaChevronLeft />
        </button>
        <div className="dots-container">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === active ? "active" : ""}`}
              onClick={() => {
                stopAutoplay();
                setActive(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="control-btn next" onClick={goNext} aria-label="Next slide">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
