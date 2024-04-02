import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ConfigProvider
      theme={{
        hashed: false,
        token: {
          fontFamily: "IRANSansX",
          colorPrimary: "rgba(88, 129, 87, 0.9)",
          // darkItemSelectedBg: "rgba(233, 245, 219, 1)",
          colorBgContainer: "#f8f9fa",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </BrowserRouter>,
);
