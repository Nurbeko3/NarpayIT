import React from "react";
import "../css/Certificates.css";

const certificatesData = [
  {
    id: 1,
    studentName: "Aliyev Akmal",
    courseName: "Frontend Development",
    date: "2025-05-20",
    qrLabel: "QR kod (misol uchun)",
  },
  {
    id: 2,
    studentName: "Karimova Dilnoza",
    courseName: "Graphic Design",
    date: "2025-06-01",
    qrLabel: "QR kod (misol uchun)",
  },
  {
    id: 3,
    studentName: "Rasulov Jahongir",
    courseName: "Python Backend",
    date: "2025-06-15",
    qrLabel: "QR kod (misol uchun)",
  },
];

function Certificates() {
  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        <h2 className="certificates-title">Bitiruvchilar sertifikatlari</h2>
        <p className="certificates-subtitle">
          Kurslarni muvaffaqiyatli yakunlagan o&apos;quvchilarimizning namuna
          sertifikatlari. Har bir sertifikatda QR kod orqali haqiqiyligini
          tekshirish mumkin (hozircha namuna ko&apos;rinishida).
        </p>

        <div className="certificates-grid">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-header">
                <span className="certificate-badge">Narpay IT Academy</span>
              </div>

              <div className="certificate-body">
                <p className="certificate-label">SERTIFIKAT</p>
                <p className="certificate-text">
                  Ushbu sertifikat egasi{" "}
                  <span className="certificate-name">{cert.studentName}</span>{" "}
                  {cert.courseName} kursini muvaffaqiyatli tamomlaganini tasdiqlaydi.
                </p>

                <div className="certificate-info-row">
                  <div>
                    <p className="certificate-info-label">Kurs nomi</p>
                    <p className="certificate-info-value">{cert.courseName}</p>
                  </div>
                  <div>
                    <p className="certificate-info-label">Berilgan sana</p>
                    <p className="certificate-info-value">{cert.date}</p>
                  </div>
                </div>
              </div>

              <div className="certificate-footer">
                <div className="certificate-signature">
                  <div className="signature-line" />
                  <p className="signature-label">Akademiya direktori</p>
                </div>
                <div className="certificate-qr">
                  <div className="qr-placeholder">
                    <span>{cert.qrLabel}</span>
                  </div>
                  <p className="qr-caption">
                    QR orqali sertifikat haqiqiyligini tekshirish
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;


