/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useCertificates } from "../context/CertificateContext";
import "../css/AdminPanel.css";

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check if already logged in on mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem("adminAuth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "Mesi2025!") {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuth", "true");
      setError("");
    } else {
      setError("Login yoki parol noto'g'ri!");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("adminAuth");
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-container">
        <div className="admin-login-wrapper">
          <div className="login-card">
            <h2>Admin Panelga Kirish</h2>
            <form onSubmit={handleLogin} className="login-form">
              <input
                type="text"
                placeholder="Login"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-input"
              />
              <input
                type="password"
                placeholder="Parol"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
              <button type="submit" className="btn-primary">
                Kirish
              </button>
              {error && <p className="error-msg">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    );
  }

  return <Dashboard onLogout={handleLogout} />;
};

const Dashboard = ({ onLogout }) => {
  const { certificates, addCertificate, deleteCertificate } = useCertificates();
  const [newCert, setNewCert] = useState({
    studentName: "",
    courseName: "",
    date: "",
    qrLabel: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newCert.studentName || !newCert.courseName || !newCert.date) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    addCertificate({
      ...newCert,
      qrLabel: newCert.qrLabel || `ID: ${Date.now()}`,
    });

    setNewCert({ studentName: "", courseName: "", date: "", qrLabel: "" });
  };

  return (
    <div className="admin-container">
      <div className="admin-dashboard">
        <div className="dashboard-header">
          <h2>Admin Boshqaruv Paneli</h2>
          <button onClick={onLogout} className="btn-danger">
            Chiqish
          </button>
        </div>

        <h3>Yangi sertifikat qo'shish</h3>
        <form onSubmit={handleSubmit} className="add-cert-form">
          <input
            type="text"
            placeholder="O'quvchi F.I.SH"
            value={newCert.studentName}
            onChange={(e) => setNewCert({ ...newCert, studentName: e.target.value })}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Kurs nomi"
            value={newCert.courseName}
            onChange={(e) => setNewCert({ ...newCert, courseName: e.target.value })}
            className="form-input"
          />
          <input
            type="date"
            placeholder="Sana"
            value={newCert.date}
            onChange={(e) => setNewCert({ ...newCert, date: e.target.value })}
            className="form-input"
          />
          <input
            type="text"
            placeholder="QR Kod / ID (ixtiyoriy)"
            value={newCert.qrLabel}
            onChange={(e) => setNewCert({ ...newCert, qrLabel: e.target.value })}
            className="form-input"
          />
          <button type="submit" className="btn-primary">
            Qo'shish
          </button>
        </form>

        <h3>Mavjud sertifikatlar ({certificates.length})</h3>
        <div className="table-container">
          <table className="cert-table">
            <thead>
              <tr>
                <th>F.I.SH</th>
                <th>Kurs</th>
                <th>Sana</th>
                <th>ID</th>
                <th>Amallar</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((cert) => (
                <tr key={cert.id}>
                  <td>{cert.studentName}</td>
                  <td>{cert.courseName}</td>
                  <td>{cert.date}</td>
                  <td>{cert.qrLabel}</td>
                  <td>
                    <button onClick={() => deleteCertificate(cert.id)} className="btn-danger">
                      O'chirish
                    </button>
                  </td>
                </tr>
              ))}
              {certificates.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>
                    Hozircha sertifikatlar yo'q
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
