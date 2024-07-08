import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ConfigProvider
      theme={{
        hashed: false,
        token: {
          fontFamily: "IRANSansX",
          colorPrimary: "rgba(88, 129, 87, 0.9)",
          colorBgContainer: "#f8f9fa",
        },
      }}
    >
      <ToastContainer />
      <App />
    </ConfigProvider>
  </BrowserRouter>,
);
