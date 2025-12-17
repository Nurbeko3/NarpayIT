// src/components/RegistrationPage.jsx (yoki sections/RegistrationPage.jsx)

import { useState } from "react";
import { useParams } from "react-router-dom"; // URL parametrlarini olish uchun qo'shildi
import "../css/RegistrationPage.css";

// URL dagi slugni o'qiydigan funksiya (oldin berilgan)
const unslugify = (slug) => {
  if (!slug) return "Tanlangan Kurs (Avtomatik)";
  const readable = slug.replace(/-/g, " ");
  return readable
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};

// Telegram botga yuborish mantig'i
const sendToTelegram = async (formData) => {
  const BOT_TOKEN = "8577440616:AAEo-w3bW_LrLISNy8gDnH_ndPVUp96ySxM";
  const CHAT_ID = "7349754297";

  // Template literal endi to'g'ri formatlangan
  const message = `Yangi Kursga Ro'yxatdan O'tish!
---------------------------------
Foydalanuvchi: ${formData.fullName}
Telefon: ${formData.phone}
Kurs: ${formData.course}
Izoh: ${formData.notes || "Yo'q"}
  `;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (response.ok) {
      return true;
    } else {
      const errorBody = await response.json();
      console.error(
        "Telegram API xatosi:",
        response.status,
        response.statusText
      );
      console.error("Telegram xato javobi:", errorBody);
      return false;
    }
  } catch (error) {
    console.error("So'rov yuborishda xato:", error);
    return false;
  }
};

function RegistrationPage() {
  const { courseSlug } = useParams();
  const readableCourseTitle = unslugify(courseSlug);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    course: readableCourseTitle,
    notes: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Yuborilmoqda...");

    if (!formData.fullName || !formData.phone) {
      setStatus("❌ Iltimos, Ism va Telefon raqamni kiriting.");
      return;
    }

    const success = await sendToTelegram(formData);

    if (success) {
      setStatus(
        "✅ Ro'yxatdan o'tish muvaffaqiyatli! Tez orada siz bilan bog'lanamiz."
      );
      setFormData({
        fullName: "",
        phone: "",
        course: readableCourseTitle,
        notes: "",
      });
    } else {
      setStatus(
        "❌ Xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring yoki to'g'ridan-to'g'ri qo'ng'iroq qiling."
      );
    }
  };

  return (
    <section className="registration-page-container">
      <div className="registration-form-box">
        <h2 className="form-title">Kursga Ro'yxatdan O'tish</h2>
        <p className="course-info">
          Tanlangan kurs: <strong>{readableCourseTitle}</strong>
        </p>

        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="fullName">To'liq Ism (Familiya, Ism)</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Aliyev Valijon"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefon Raqam</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+998 XX YYY ZZ TT"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Qo'shimcha Izoh (ixtiyoriy)</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              placeholder="Qaysi vaqtda qo'ng'iroq qilish qulay?"
            />
          </div>

          <button
            type="submit"
            className="btn btn-submit-form"
            disabled={status === "Yuborilmoqda..."}
          >
            {status === "Yuborilmoqda..."
              ? "Yuborilmoqda..."
              : "Ro'yxatdan O'tishni Yakunlash"}
          </button>

          {status && (
            <p
              className={`form-status ${
                status.startsWith("✅") ? "success" : "error"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default RegistrationPage; // Export default qo'shilgan
