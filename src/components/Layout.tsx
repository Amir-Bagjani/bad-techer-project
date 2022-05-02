import { Routes, Route } from "react-router-dom";
import CoursesPage from "../pages/CoursesPage";
import HomePage from "../pages/HomePage";
import CourseDetailPage from "../pages/CourseDetailPage";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/:id" element={<CourseDetailPage />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default Layout;
