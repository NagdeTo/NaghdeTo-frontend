import Header from "./components/Public-layouts/Header";
import Footer from "./components/Public-layouts/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./pages/Public/AboutUs";
import Home from "./pages/Public/Home";
import Login from "./pages/Public/Login";
import ContactUs from "./pages/Public/ContactUs";
import SignUp from "./pages/Public/SignUp";
import ForgetPassword from "./pages/Public/ForgetPassword";

const PublicRouter = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" &&
        location.pathname !== "/sign-up" &&
        location.pathname !== "/forget-password" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
      {location.pathname !== "/login" &&
        location.pathname !== "/sign-up" &&
        location.pathname !== "/forget-password" && <Footer />}
    </>
  );
};

export default PublicRouter;
