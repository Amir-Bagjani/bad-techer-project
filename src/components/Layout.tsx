import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";

const Layout = () => {
  return (
    <main>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/about-me" element={<AboutPage />} />
     </Routes>
    </main>
  )
}

export default Layout