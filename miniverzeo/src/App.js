import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/home";
import AboutPage from "./components/about";
import ServicesPage from "./components/services";
import ProductsPage from "./components/products";
import ContactPage from "./components/contact";
function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About Us</Link>
      <br />
      <Link to="/services">Our Services</Link>
      <br />
      <Link to="/products">Our Products</Link>
      <br />
      <Link to="/contact">Contact Us</Link>
      <br />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
