import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Layout />} />
      <Route path="/auth" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
