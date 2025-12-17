// src/sections/Courses.jsx

import { Link } from "react-router-dom";
import "../css/Courses.css";

const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "Kompyuter Savodxonligi (Boshlang'ich)",
      tagline: "Raqamli dunyoda ilk qadamlaringiz.",
      description:
        "MS Office, Internetdan samarali foydalanish, fayl tizimi va asosiy kompyuter ko'nikmalarini 0 dan boshlab o'rganing. Har qanday ish uchun zaruriy asos.",
      duration: "1 Oy",
      level: "Beginner",
      color: "#f0ad4e", 
    },
    {
      id: 2,
      title: "Grafik Dizayn (Adobe Suite)",
      tagline: "Vizual kontent yaratish san'ati.",
      description:
        "Adobe Photoshop, Illustrator va InDesign da ishlashni o'rganing. Logotip, poster, veb elementlar yaratish va ranglar nazariyasi.",
      duration: "2 Oy",
      level: "Intermediate",
      color: "#d9534f", 
    },
    {
      id: 3,
      title: "Malaka Oshirish (Kompyuter Savodxonligi)",
      tagline: "Mavjud ko'nikmalarni keyingi darajaga olib chiqish.",
      description:
        "Kengaytirilgan Excel funksiyalari, bulutli xizmatlar bilan ishlash va ofis jarayonlarini avtomatlashtirish bo'yicha chuqur kurs.",
      duration: "1 Oy",
      level: "Advanced",
      color: "#5cb85c", 
    },
    {
      id: 4,
      title: "Frontend Dasturlash (React/Next)",
      tagline: "Veb-ilovalar yaratishning zamonaviy asosi.",
      description:
        "HTML, CSS, JavaScript dan boshlab React, Vite va Git texnologiyalarini o'rganib, to'liq ishlaydigan professional veb-saytlar yaratishni o'zlashtiring.",
      duration: "8 Oy",
      level: "Professional",
      color: "#9900cc", 
    },
  ];

  return (
    <section id="courses" className="courses-container">
      <h2 className="section-title">Biz taklif qilayotgan kurslar</h2>
      <p className="section-subtitle">
        Sertifikatlashtirilgan dasturlar orqali o'z sohangiz mutaxassisi
        bo'ling.
      </p>

      {/* Endi gridda 4 ta kurs bo'ladi, bu CSS moslashuvchanligini talab qiladi */}
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card-wrapper">
            <div
              className="course-card"
              style={{ borderTopColor: course.color }}
            >
              <span
                className="course-level"
                style={{ backgroundColor: course.color }}
              >
                {course.level}
              </span>

              <h3 className="card-title">{course.title}</h3>
              <p className="card-tagline">{course.tagline}</p>

              <p className="card-description">{course.description}</p>

              <div className="card-meta">
                <span>🗓️ {course.duration}</span>
                <span>📘 {course.level}</span>
              </div>

              <Link
                to={`/register/${slugify(course.title)}`}
                className="btn btn-course-enroll"
                style={{ backgroundColor: course.color }}
              >
                Hoziroq Yozilish
              </Link>
            </div>
          </div>
        ))}{" "}
      </div>
      <div className="courses-footer-action">
        <p>Barcha yo'nalishlarimizni ko'rishni xohlaysizmi?</p>
        <Link to="/all-courses" className="btn btn-secondary-action">
          To'liq Ro'yxat
        </Link>
      </div>
    </section>
  );
}

export default CoursesSection;
