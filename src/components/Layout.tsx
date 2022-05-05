import { Routes, Route } from "react-router-dom";
import CoursesPage from "../pages/CoursesPage";
import HomePage from "../pages/HomePage";
import CourseDetailPage from "../pages/CourseDetailPage";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BlogPage from "../pages/BlogPage";
import CartPage from "../pages/CartPage";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="courses/:id" element={<CourseDetailPage />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default Layout;
