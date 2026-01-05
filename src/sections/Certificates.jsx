import { useCertificates } from "../context/CertificateContext";
import QRCode from "react-qr-code";
import "../css/Certificates.css";

function Certificates() {
  const { certificates } = useCertificates();

  // Use reverse to show newest first if desired, or just map
  const displayCertificates = [...certificates].reverse();
  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        <h2 className="certificates-title">Bitiruvchilar sertifikatlari</h2>
        <p className="certificates-subtitle">
          Kurslarni muvaffaqiyatli yakunlagan o&apos;quvchilarimizning namuna sertifikatlari. Har
          bir sertifikatda QR kod orqali haqiqiyligini tekshirish mumkin (hozircha namuna
          ko&apos;rinishida).
        </p>

        <div className="certificates-grid">
          {displayCertificates.map((cert) => {
            const qrData = `O'quvchi: ${cert.studentName}\nKurs: ${cert.courseName}\nID: ${cert.qrLabel}\nSana: ${cert.date}\nBerildi: IT Academy\nLink: ${window.location.origin}/certificates`;

            return (
              <div key={cert.id} className="certificate-card">
                <div className="certificate-header">
                  <span className="certificate-badge">Narpay IT Academy</span>
                </div>

                <div className="certificate-body">
                  <div className="certificate-main-text">
                    <p className="certificate-label">SERTIFIKAT</p>
                    <p className="certificate-text">
                      Ushbu sertifikat egasi{" "}
                      <span className="certificate-name">{cert.studentName}</span> {cert.courseName}{" "}
                      kursini muvaffaqiyatli tamomlaganini tasdiqlaydi.
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
                </div>

                <div className="certificate-footer">
                  <div className="certificate-signature">
                    <div className="signature-line" />
                    <p className="signature-label">Akademiya direktori</p>
                  </div>
                  <div className="certificate-qr">
                    <div className="qr-container">
                      <QRCode
                        value={qrData}
                        size={80}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        viewBox={`0 0 256 256`}
                      />
                    </div>
                    <p className="qr-caption" style={{ marginLeft: "10px" }}>
                      QR orqali tekshirish
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
