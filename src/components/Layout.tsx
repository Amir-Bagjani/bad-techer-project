import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import CoursesPage from "../pages/CoursesPage";
import HomePage from "../pages/HomePage";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default Layout;
