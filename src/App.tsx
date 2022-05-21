import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import Admin from "./pages/Admin";
import AdminList from "./pages/AdminList";
import AdminListDetail from "./pages/AdminListDetail";
import LoginPage from "./pages/LoginPage";
import LoginPageNew from "./pages/LoginPageNew";

function App() {
  return (
    <Routes>
      <Route path="/about-me" element={<AboutPage />} />
      <Route path="/auth" element={<LoginPage />} />
      <Route path="/login" element={<LoginPageNew />} />
      <Route path="/admin">
          <Route index element={<Admin />} />
          <Route path="users" element={<AdminList />} />
          <Route path="users/:userID" element={<AdminListDetail />} />
        </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
}

export default App;
