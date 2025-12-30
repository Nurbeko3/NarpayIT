import React from "react";
import {
  FaCheckCircle,
  FaUserGraduate,
  FaBriefcase,
  FaLaptopCode,
  FaClock,
  FaHeadset,
} from "react-icons/fa";
import "../css/Advantages.css";

function AdvantagesSection() {
  const advantages = [
    {
      icon: <FaCheckCircle />,
      title: "Tasdiqlangan Sertifikat",
      description:
        "Ish beruvchilar doirasida tan olingan va sizning malakangizni isbotlovchi rasmiy hujjat. Kelajakdagi ish faoliyatingiz uchun kuchli asos.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Amaliy Dastur",
      description:
        "Kurslarimiz nazariyadan ko'ra ko'proq real loyihalar ustida ishlashga qaratilgan. Darslar 80% amaliyotdan iborat.",
    },
    {
      icon: <FaBriefcase />,
      title: "Ishga Joylashish",
      description:
        "Eng yaxshi bitiruvchilarga kompaniyamiz yoki hamkor kompaniyalarimizda stajirovka va ishga joylashish uchun tavsiyalar beriladi.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Zamonaviy Texnologiyalar",
      description:
        "Biz faqatgina bozorda eng talabgir bo'lgan va bugungi kunda faol ishlatilayotgan dasturlash tillari va freymvorklarni o'rgatamiz.",
    },
    {
      icon: <FaClock />,
      title: "Moslashuvchan Jadval",
      description:
        "Ish yoki o'qishdan ajralmagan holda ta'lim olish imkoniyati. Darslarni o'zingizga qulay vaqtda tanlang.",
    },
    {
      icon: <FaHeadset />,
      title: "Support 24/7",
      description:
        "O'qish jarayonida va undan keyin ham barcha savollaringizga tezkor javob olishingiz uchun mutaxassislar guruhi mavjud.",
    },
  ];

  return (
    <section id="advantages" className="advantages-container">
      <div className="advantages-header">
        <h2 className="section-title">
          Nega aynan <span className="highlight-text">IT Academy?</span>
        </h2>
        <p className="section-subtitle">Sizning muvaffaqiyatingiz bizning ustuvor vazifamizdir.</p>
      </div>

      <div className="advantages-grid">
        {advantages.map((advantage, index) => (
          <div key={index} className="advantage-card">
            <div className="icon-wrapper">{advantage.icon}</div>
            <h3 className="card-title">{advantage.title}</h3>
            <p className="card-description">{advantage.description}</p>
          </div>
        ))}
      </div>
      <div className="advantages-action">
        <a href="#courses" className="btn-glow">
          Kurslarimizni Ko'rish
        </a>
      </div>
    </section>
  );
}

export default AdvantagesSection;
