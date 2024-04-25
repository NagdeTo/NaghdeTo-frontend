import Header from "./components/Public-layouts/Header";
import Footer from "./components/Public-layouts/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./pages/Public/AboutUs";
import Home from "./pages/Public/Home";
import Login from "./pages/Public/Login";
import ContactUs from "./pages/Public/ContactUs";
import SignUp from "./pages/Public/SignUp";

const PublicRouter = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/sign-up" && (
        <Header />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      {location.pathname !== "/login" && location.pathname !== "/sign-up" && (
        <Footer />
      )}
    </>
  );
};

export default PublicRouter;
