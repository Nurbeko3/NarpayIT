// src/components/AllCoursesPage.jsx

import { Link } from "react-router-dom";
import "../css/AllCoursesPage.css"; // Stil faylini import qilish

const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

function AllCoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Kompyuter Savodxonligi (Boshlang'ich)",
      tagline: "Raqamli dunyoda ilk qadamlaringiz.",
      description:
        "MS Office, Internetdan samarali foydalanish, fayl tizimi va asosiy kompyuter ko'nikmalarini 0 dan boshlab o'rganing. Har qanday ish uchun zaruriy asos.",
      duration: "1.5 Oy",
      level: "Beginner",
      color: "#f0ad4e",
    },
    {
      id: 2,
      title: "Grafik Dizayn (Adobe Suite)",
      tagline: "Vizual kontent yaratish san'ati.",
      description:
        "Adobe Photoshop, Illustrator va InDesign da ishlashni o'rganing. Logotip, poster, veb elementlar yaratish va ranglar nazariyasi.",
      duration: "3 Oy",
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
      title: "Frontend Dasturlash (React/Vite)",
      tagline: "Veb-ilovalar yaratishning zamonaviy asosi.",
      description:
        "HTML, CSS, JavaScript dan boshlab React, Vite va Git texnologiyalarini o'rganib, to'liq ishlaydigan professional veb-saytlar yaratishni o'zlashtiring.",
      duration: "6 Oy",
      level: "Professional",
      color: "#9900cc",
    }, // Yangi kurs qo'shildi
  ];

  return (
    <section className="all-courses-container">
      <div className="page-header">
        <h1 className="page-title">Barcha Kurslar Katalogi</h1>
        <p className="page-subtitle">
          O'zingizga mos keladigan yo'nalishni tanlang va ro'yxatdan o'ting.
        </p>
      </div>

      <div className="course-list-grid">
        {courses.map((course) => (
          <div key={course.id} className="list-card">
            <span
              className="list-level"
              style={{ backgroundColor: course.color }}
            >
              {course.level}
            </span>

            <div className="list-content">
              <h3 className="list-title">{course.title}</h3>
              <p className="list-description">{course.description}</p>

              <div className="list-meta">
                <span>🗓️ {course.duration}</span>
                <span>📚 {course.level}</span>
              </div>
            </div>

            <Link
              to={`/register/${slugify(course.title)}`}
              className="btn list-btn-enroll"
              style={{ backgroundColor: course.color }}
            >
              Yozilish
            </Link>
          </div>
        ))}
      </div>

      <div className="page-footer-action">
        <p>Savollaringiz bormi? Biz bilan bog'laning!</p>
        <Link to="/#contact" className="btn btn-secondary-contact">
          {" "}
          {/* /#contact qilib to'g'irlandi */}
          Aloqa
        </Link>
      </div>
    </section>
  );
}

export default AllCoursesPage;
