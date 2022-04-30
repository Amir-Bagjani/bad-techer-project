import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import CoursesPage from "./pages/CoursesPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes >
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="about-me" element={<AboutPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="courses/:id" element={<CourseDetailPage />} />
        </Route>

        <Route path="/auth" element={<LoginPage />} />
      </Routes>
   
    </>
  );
}

export default App;
