import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, Flex, Typography } from "antd";

import Header from "./Header";
import Footer from "./Footer";
const PublicLayout = () => {
  return (
    <Layout
    style={{
      direction: "rtl",
      minHeight: "100vh",
    }}
    >
      <Header />
        <Outlet />
      <Footer />
    </Layout>
  );
};

export default PublicLayout;
