import Header from "./components/Public-layouts/Header";
import Footer from "./components/Public-layouts/Footer";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/Public/AboutUs";
import Home from "./pages/Public/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
const PublicRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default PublicRouter;
