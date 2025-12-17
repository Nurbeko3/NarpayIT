// src/App.jsx (Yakuniy va To'g'ri Kod)

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Komponentlaringizni import qilish
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Advantages from "./sections/Advantages";
import Courses from "./sections/Courses";
import Contact from "./sections/Contact"; // Contact
import Location from "./sections/Location"; // Location
import Footer from "./sections/Footer";

// Alohida Sahifalar
import RegistrationPage from "./components/RegistrationPage";
import AllCoursesPage from "./components/AllCoursesPage";
import AboutSection from "./sections/About"; // About

// ASOSIY FIX: HomeLayout ichiga barcha bosh sahifa sectionlarini guruhlaymiz
const HomeLayout = () => (
  <>
    <Hero />
    <Advantages />
    <Courses />
    {/* CONTACT va LOCATION ni bu yerga qaytardik */}
    <Contact />
    <Location />{" "}
  </>
);

function App() {
  return (
    <Router>
      <Header />{" "}
      <main>
        {" "}
        <Routes>
          {" "}
          {/* 1. Bosh sahifa yo'li (HomeLayout hamma sectionlarni yuklaydi) */}
          <Route path="/" element={<HomeLayout />} />
          {/* 2. "Biz Haqimizda" sahifasi */}
          <Route path="/about" element={<AboutSection />} />
          {/* 3. Qolgan sahifalar */}{" "}
          <Route path="/register/:courseSlug" element={<RegistrationPage />} />
          <Route path="/all-courses" element={<AllCoursesPage />} />
          {/* 4. 404 xatosi */}{" "}
          <Route
            path="*"
            element={
              <div style={{ padding: "100px", textAlign: "center" }}>
                <h2>404 | Sahifa topilmadi</h2>{" "}
              </div>
            }
          />{" "}
        </Routes>{" "}
      </main>{" "}
      {/* FOOTER alohida turadi, chunki u sahifaning eng ostida bo'lishi kerak */}
      <Footer />{" "}
    </Router>
  );
}

export default App;
