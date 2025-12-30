import React, { createContext, useState, useEffect, useContext } from "react";

const CertificateContext = createContext();

export const useCertificates = () => useContext(CertificateContext);

export const CertificateProvider = ({ children }) => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    // Initial seed data
    const initialData = [
      {
        id: 1,
        studentName: "Aliyev Akmal",
        courseName: "Frontend Development",
        date: "2025-05-20",
        qrLabel: "Sertifikat ID: 1001",
      },
      {
        id: 2,
        studentName: "Karimova Dilnoza",
        courseName: "Graphic Design",
        date: "2025-06-01",
        qrLabel: "Sertifikat ID: 1002",
      },
      {
        id: 3,
        studentName: "Rasulov Jahongir",
        courseName: "Python Backend",
        date: "2025-06-15",
        qrLabel: "Sertifikat ID: 1003",
      },
    ];

    const stored = localStorage.getItem("certificates");
    if (stored) {
      setCertificates(JSON.parse(stored));
    } else {
      setCertificates(initialData);
      localStorage.setItem("certificates", JSON.stringify(initialData));
    }
  }, []);

  const addCertificate = (cert) => {
    const newCert = { ...cert, id: Date.now() }; // Simple unique ID
    const updated = [newCert, ...certificates];
    setCertificates(updated);
    localStorage.setItem("certificates", JSON.stringify(updated));
  };

  const deleteCertificate = (id) => {
    const updated = certificates.filter((c) => c.id !== id);
    setCertificates(updated);
    localStorage.setItem("certificates", JSON.stringify(updated));
  };

  return (
    <CertificateContext.Provider value={{ certificates, addCertificate, deleteCertificate }}>
      {children}
    </CertificateContext.Provider>
  );
};
