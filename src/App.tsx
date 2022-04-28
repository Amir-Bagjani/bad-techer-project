import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
