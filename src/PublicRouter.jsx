import Header from "./components/Public-layouts/Header";
import Footer from "./components/Public-layouts/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./pages/Public/AboutUs";
import Home from "./pages/Public/Home";
import Login from "./pages/Public/Login";
import ContactUs from "./pages/Public/ContactUs";

const PublicRouter = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {location.pathname !== "/login" && <Footer />}
    </>
  );
};

export default PublicRouter;
