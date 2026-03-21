import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Advantages from "./sections/Advantages";
import Courses from "./sections/Courses";
import Contact from "./sections/Contact";
import Location from "./sections/Location";
import Teachers from "./sections/Teachers";
import React, { Suspense, lazy } from 'react';
import Footer from "./sections/Footer";

const RegistrationPage = lazy(() => import("./components/RegistrationPage"));
const AllCoursesPage = lazy(() => import("./components/AllCoursesPage"));
const AboutSection = lazy(() => import("./sections/About"));
const Certificates = lazy(() => import("./sections/Certificates"));
const Services = lazy(() => import("./sections/Services"));

import { CertificateProvider } from "./context/CertificateContext";

const HomeLayout = () => (
  <>
    <Hero />
    <Advantages />
    <Courses />
    <Teachers />
    <Contact />
    <Location />
  </>
);

function App() {
  return (
    <CertificateProvider>
      <Router>
        <Header />
        <main>
          <Suspense fallback={<div style={{ padding: "100px", textAlign: "center", minHeight: "60vh" }}><h2>Yuklanmoqda...</h2></div>}>
            <Routes>
              <Route path="/" element={<HomeLayout />} />
              <Route path="/about" element={<AboutSection />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/xizmatlar" element={<Services />} />

              <Route path="/register/:courseSlug" element={<RegistrationPage />} />
              <Route path="/all-courses" element={<AllCoursesPage />} />
              <Route
                path="*"
                element={
                  <div style={{ padding: "100px", textAlign: "center" }}>
                    <h2>404 | Sahifa topilmadi</h2>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </CertificateProvider>
  );
}

export default App;
