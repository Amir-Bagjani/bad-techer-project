import { Routes, Route } from "react-router-dom";
import CoursesPage from "../pages/CoursesPage";
import HomePage from "../pages/HomePage";
import CourseDetailPage from "../pages/CourseDetailPage";
import BlogsPage from "../pages/BlogsPage";
import BlogDetailPage from "../pages/BlogDetailPage";
import CartPage from "../pages/CartPage";
import ProfilePage from "../pages/ProfilePage";
import BookmarkPage from "../pages/BookmarkPage";
import NotFound from "../pages/NotFound";
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
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="blogs/:blogSlug" element={<BlogDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="profile">
          <Route index element={<ProfilePage />} />
          <Route path="bookmark" element={<BookmarkPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default Layout;
