import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTelegramPlane,
  FaPaperPlane,
  FaUser,
  FaQuestionCircle,
} from "react-icons/fa";
import "../css/Contact.css";

const sendContactToTelegram = async (formData) => {
  const BOT_TOKEN = "8446382414:AAFGRuMBTCL6VYyUwNc0mu8bxM3mb5PXf4o";
  const CHAT_ID = "2015144654";

  const message = `
*Yangi Aloqa Xabari!*
---------------------------------
*Foydalanuvchi*: ${formData.fullName}
*Telefon*: ${formData.phone}
*Telegram*: ${formData.telegram || "Kiritilmagan"}
*Savol*: ${formData.question}
 `;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "MarkdownV2",
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("So'rov yuborishda xato:", error);
    return false;
  }
};

function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    telegram: "",
    question: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Yuborilmoqda...");

    if (!formData.fullName || !formData.phone || !formData.question) {
      setStatus("❌ Iltimos, barcha majburiy maydonlarni to'ldiring.");
      return;
    }

    const success = await sendContactToTelegram(formData);

    if (success) {
      setStatus("✅ Xabaringiz yuborildi! Tez orada javob beramiz.");
      setFormData({ fullName: "", phone: "", telegram: "", question: "" });
    } else {
      setStatus("❌ Xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring.");
    }
  };

  return (
    <section id="contact" className="contact-container">
      <h2 className="section-title">
        Biz Bilan <span className="highlight-text">Bog'laning</span>
      </h2>
      <p className="section-subtitle">
        Savollaringiz bormi yoki batafsil ma'lumot kerakmi? Biz har doim aloqadamiz!
      </p>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Aloqa Ma'lumotlari</h3>
          <div className="info-item">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>
            <div>
              <h4>Telefon</h4> <p>+998 99 454 80 65</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div>
              <h4>Email</h4> <p>itnarpay@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4>Manzil</h4>
              <p>
                Samarqand viloyati, Narpay tumani Imom Buhoriy ko'chasi 114-uy. Mo'ljal: Eski
                29-kollej
              </p>
            </div>
          </div>
          <div className="social-links">
            <a href="https://t.me/uzsnur19805" target="_blank" rel="noopener noreferrer">
              <div className="social-icon telegram-icon">
                <FaTelegramPlane />
              </div>
            </a>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <h3>Murojaat Yuborish</h3>
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="To'liq Ism"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefon Raqam"
                required
              />
            </div>
            <div className="form-group animated-input">
              <input
                type="text"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                placeholder="@Telegram Username (Ixtiyoriy)"
              />
              <div className="telegram-hint">@ kiriting (Aloqa uchun muhim)</div>
            </div>
            <div className="form-group">
              <textarea
                name="question"
                value={formData.question}
                onChange={handleChange}
                rows="4"
                placeholder="Savolingizni yozing..."
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-contact-submit"
              disabled={status === "Yuborilmoqda..."}
            >
              {status === "Yuborilmoqda..." ? "Yuborilmoqda..." : "Xabarni Yuborish"}
            </button>
            {status && (
              <p className={`form-status ${status.startsWith("✅") ? "success" : "error"}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
