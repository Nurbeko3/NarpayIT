import React, { createContext, useState, useEffect, useContext } from "react";

const CertificateContext = createContext();

export const useCertificates = () => useContext(CertificateContext);

export const CertificateProvider = ({ children }) => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch("https://api-narpay-backend.onrender.com/api/certificates");
        if (!response.ok) {
          throw new Error("Failed to fetch certificates");
        }
        const result = await response.json();
        // Check if the response follows the { success: true, data: [...] } structure
        if (result.success && Array.isArray(result.data)) {
          setCertificates(result.data);
        } else if (Array.isArray(result)) {
          // Fallback in case endpoint just returns an array directly in some future
          setCertificates(result);
        } else {
          // Fallback or empty if format is unexpected
          console.error("Unexpected API structure:", result);
          setCertificates([]);
        }
      } catch (err) {
        console.error("Error loading certificates:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <CertificateContext.Provider value={{ certificates, loading, error }}>
      {children}
    </CertificateContext.Provider>
  );
};
