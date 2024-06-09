import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import DashboardLayout from "./components/Dashboard-layouts/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddCriticism from "./pages/AddCriticism/AddCriticism";
import { Routes, Route } from "react-router-dom";
import ResponseList from "./pages/Responses/ResponseList";
import Answer from "./pages/Answer/Answer";

import Header from "./components/Public-layouts/Header";
import Footer from "./components/Public-layouts/Footer";
import { useLocation } from "react-router-dom";
import AboutUs from "./pages/Public/AboutUs";
import Home from "./pages/Public/Home";
import Login from "./pages/Public/Login";
import ContactUs from "./pages/Public/ContactUs";
import SignUp from "./pages/Public/SignUp";
import ForgetPassword from "./pages/Public/ForgetPassword";

const App = () => {
  const cookies = new Cookies();
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(cookies.get("access_token"));
  }, [cookies]);

  const location = useLocation();

  return (
    <div className={`App `}>
      {location.pathname !== "/login" &&
        location.pathname !== "/sign-up" &&
        location.pathname !== "/forget-password" &&
        !token && <Header />}

      {token ? (
        <DashboardLayout>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-criticism" element={<AddCriticism />} />
            <Route path="response-list" element={<ResponseList />} />
            <Route path="answer" element={<Answer />} />
          </Routes>
        </DashboardLayout>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
      )}

      {location.pathname !== "/login" &&
        location.pathname !== "/sign-up" &&
        location.pathname !== "/forget-password" &&
        !token && <Footer />}
    </div>
  );
};
export default App;
