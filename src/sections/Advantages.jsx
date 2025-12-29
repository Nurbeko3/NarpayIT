import React from "react";
import "../css/Advantages.css";

function AdvantagesSection() {
  const advantages = [
    {
      icon: "✅",
      title: "Kompaniya Tasdiqlangan Sertifikat",
      description:
        "Ish beruvchilar doirasida tan olingan va sizning malakangizni isbotlovchi rasmiy hujjat. Kelajakdagi ish faoliyatingiz uchun kuchli asos.",
    },
    {
      icon: "🎓",
      title: "Amaliyotga Yo'naltirilgan Dastur",
      description:
        "Kurslarimiz nazariyadan ko'ra ko'proq real loyihalar ustida ishlashga qaratilgan. Darslar 80% amaliyotdan iborat.",
    },
    {
      icon: "💼",
      title: "Ishga Joylashish Ko'magi",
      description:
        "Eng yaxshi bitiruvchilarga kompaniyamiz yoki hamkor kompaniyalarimizda stajirovka va ishga joylashish uchun tavsiyalar beriladi.",
    },
    {
      icon: "🛠️",
      title: "Zamonaviy Texnologiyalar",
      description:
        "Biz faqatgina bozorda eng talabgir bo'lgan va bugungi kunda faol ishlatilayotgan dasturlash tillari va freymvorklarni o'rgatamiz.",
    },
    {
      icon: "⏰",
      title: "Moslashuvchan Jadval",
      description:
        "Ish yoki o'qishdan ajralmagan holda ta'lim olish imkoniyati. Darslarni o'zingizga qulay vaqtda tanlang.",
    },
    {
      icon: "📞",
      title: "Doimiy Qo'llab-Quvvatlash",
      description:
        "O'qish jarayonida va undan keyin ham barcha savollaringizga tezkor javob olishingiz uchun mutaxassislar guruhi mavjud.",
    },
  ];

  return (
    <section id="advantages" className="advantages-container">
      <h2 className="section-title">Nega aynan IT Academy?</h2>
      <p className="section-subtitle">Sizning muvaffaqiyatingiz bizning ustuvor vazifamizdir.</p>
      <div className="advantages-grid">
        {advantages.map((advantage, index) => (
          <div key={index} className="advantage-card">
            <div className="card-icon">{advantage.icon}</div>
            <h3 className="card-title">{advantage.title}</h3>
            <p className="card-description">{advantage.description}</p>
          </div>
        ))}
      </div>
      <div className="advantages-action">
        <a href="#courses" className="btn btn-main-action">
          Kurslarimiz Haqida Batafsil
        </a>
      </div>
    </section>
  );
}

export default AdvantagesSection;
