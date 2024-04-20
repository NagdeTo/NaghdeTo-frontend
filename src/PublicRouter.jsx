import Header from "./components/Public-layouts/Header";
import Footer from "./components/Public-layouts/Footer";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/Public/AboutUs";
import Home from "./pages/Public/Home";

const PublicRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default PublicRouter;
