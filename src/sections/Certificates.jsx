import React, { useRef, useState } from "react";
import { useCertificates } from "../context/CertificateContext";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import CertificateDownloadTemplate from "../components/CertificateDownloadTemplate";
import "../css/Certificates.css";
import { FaDownload } from "react-icons/fa";

function Certificates() {
  const { certificates, loading, error } = useCertificates();
  const certificateRef = useRef(null);
  const [downloadingId, setDownloadingId] = useState(null);
  const [tempCertificate, setTempCertificate] = useState(null);

  const handleDownload = async (cert) => {
    setDownloadingId(cert.id || cert.qrLabel); // Use a unique ID
    setTempCertificate(cert);

    // Allow time for the hidden component to render with the new data
    setTimeout(async () => {
      if (certificateRef.current) {
        try {
          const canvas = await html2canvas(certificateRef.current, {
            scale: 2, // Improve quality
            useCORS: true,
            logging: false,
            backgroundColor: "#ffffff",
          });

          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("l", "mm", "a4");
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();

          pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
          pdf.save(`Sertifikat_${cert.studentName.replace(/\s+/g, "_")}.pdf`);
        } catch (err) {
          console.error("PDF generation failed:", err);
          alert("Sertifikatni yuklab olishda xatolik yuz berdi.");
        } finally {
          setDownloadingId(null);
          setTempCertificate(null);
        }
      }
    }, 500); // 500ms delay to ensure rendering
  };

  if (loading) {
    return (
      <section id="certificates" className="certificates-section">
        <div className="certificates-container">
          <h2 className="certificates-title">Yuklanmoqda...</h2>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="certificates" className="certificates-section">
        <div className="certificates-container">
          <h2 className="certificates-title" style={{ color: "red" }}>
            Xatolik yuz berdi: {error}
          </h2>
        </div>
      </section>
    );
  }

  // Use reverse to show newest first if desired
  const displayCertificates = [...certificates].reverse();

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        <h2 className="certificates-title">Bitiruvchilar sertifikatlari</h2>
        <p className="certificates-subtitle">
          Kurslarni muvaffaqiyatli yakunlagan o&apos;quvchilarimizning namuna sertifikatlari. Har
          bir sertifikatda QR kod orqali haqiqiyligini tekshirish mumkin.
        </p>

        <div style={{ textAlign: 'center', marginBottom: '30px', color: '#10b981', fontWeight: 'bold', fontSize: '1.2rem' }}>
          Jami bitiruvchilar: {certificates.length} nafar
        </div>

        <div className="certificates-grid">
          {displayCertificates.map((cert) => {
            const qrData = `O'quvchi: ${cert.studentName}\nKurs: ${cert.courseName}\nID: ${cert.qrLabel}\nSana: ${cert.date}\nBerildi: Narpay IT Academy\nLink: ${window.location.origin}/certificates`;
            const isDownloading = downloadingId === (cert.id || cert.qrLabel);

            return (
              <div key={cert.id || cert.qrLabel} className="certificate-card">
                <div className="certificate-header">
                  <span className="certificate-badge">Narpay IT Academy</span>
                  {/* Download Button */}
                  <button
                    className="download-btn"
                    onClick={() => handleDownload(cert)}
                    disabled={!!downloadingId}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--primary-color)',
                      fontSize: '1.2rem',
                      padding: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                    title="Sertifikatni yuklab olish"
                  >
                    {isDownloading ? (
                      <span style={{ fontSize: '0.8rem' }}>Yuklanmoqda...</span>
                    ) : (
                      <FaDownload />
                    )}
                  </button>
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
                    <p className="signature-label">O'quv markazi direktori</p>
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

      {/* Hidden Render Area for PDF Generation */}
      <div style={{ position: "absolute", top: "-10000px", left: "-10000px" }}>
        {tempCertificate && (
          <CertificateDownloadTemplate ref={certificateRef} certificate={tempCertificate} />
        )}
      </div>
    </section>
  );
}

export default Certificates;
