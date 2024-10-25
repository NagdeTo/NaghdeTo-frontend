import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import DashboardLayout from "./components/Dashboard-layouts/Layout";
import ListCriticism from "./pages/Criticism/ListCriticism";
import AddCriticism from "./pages/Criticism/AddCriticism";
import { Routes, Route, Navigate } from "react-router-dom";
import ResponseList from "./pages/Responses/ResponseList";
import Answer from "./pages/Answer/Answer";
import PublicLayout from "./components/Public-layouts/Layout";
import { useLocation } from "react-router-dom";
import AboutUs from "./pages/Public/AboutUs";
import Home from "./pages/Public/Home";
import Login from "./pages/Public/Login";
import ContactUs from "./pages/Public/ContactUs";
import SignUp from "./pages/Public/SignUp";
import ForgetPassword from "./pages/Public/ForgetPassword";
import { Spin } from "antd";
import EditCriticism from "./pages/Criticism/EditCriticism";

const App = () => {
  const cookies = new Cookies();
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const publicPaths = ["/login", "/sign-up", "/forget-password"];

  const dashboardPaths = [
    "/dashboard",
    "/add-criticism",
    "/response",
    "/answer",
  ];

  const showHeaderFooter =
    !publicPaths.includes(location.pathname) &&
    !dashboardPaths.includes(location.pathname) &&
    !location.pathname.startsWith("/response");

  useEffect(() => {
    setToken(cookies.get("access_token"));
    setLoading(false);
  }, [cookies,token]);

  return (
    <div className="App">
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <Routes >
            {token ? (
            
              <Route  element={<DashboardLayout/>}>
                <Route path="/list-criticism" element={<ListCriticism />} />
                <Route path="/add-criticism" element={<AddCriticism />} />
                <Route path="/edit-criticism/:id" element={<EditCriticism />} />
                <Route path="/response-list/:id" element={<ResponseList />} />
                {["/login","/sign-up" ].map(path => <Route path={path} element={<Navigate to='/list-criticism' />} />)}
              </Route>
                
              ) : (
                <Route  element={<PublicLayout/>}>
                {["/list-criticism","/add-criticism","/response-list/:id"  ].map(path => <Route path={path} element={<Navigate to='/login' />} />)}
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
              </Route>
            )}
            <Route  element={<PublicLayout/>}>
              <Route path="/answer/:id" element={<Answer />} />
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
            </Route>
          </Routes>

          
        </>
      )}
    </div>
  );
};

export default App;
