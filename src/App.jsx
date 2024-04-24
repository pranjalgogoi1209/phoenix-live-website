/** @format */

import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutPage from "./pages/aboutPage/AboutPage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import PreLoader from "./components/home/preLoader/PreLoader";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      {/* <PreLoader /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
