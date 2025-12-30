import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Advantages from "./sections/Advantages";
import Courses from "./sections/Courses";
import Contact from "./sections/Contact";
import Location from "./sections/Location";
import Footer from "./sections/Footer";
import RegistrationPage from "./components/RegistrationPage";
import AllCoursesPage from "./components/AllCoursesPage";
import AboutSection from "./sections/About";
import Certificates from "./sections/Certificates";
import AdminPanel from "./components/AdminPanel";
import { CertificateProvider } from "./context/CertificateContext";

const HomeLayout = () => (
  <>
    <Hero />
    <Advantages />
    <Courses />
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
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/admin" element={<AdminPanel />} />
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
        </main>
        <Footer />
      </Router>
    </CertificateProvider>
  );
}

export default App;
