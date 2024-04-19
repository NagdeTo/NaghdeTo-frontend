import { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Layout, Menu, Flex, Typography } from "antd";
import DashboardHeader from "./Header";
import logo from "../../assets/images/logo.svg";
import "./Styles/Layout.css";

import {
 
  FormOutlined,
  HomeOutlined,
} from "@ant-design/icons";
const DashboardLayout = ({ children }) => {
  const { Header, Content, Footer, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(true);

  const items = [
    {
      key: 1,

      icon: <HomeOutlined className="text-xl" />,
      label: <Link to="/dashboard" className="text-lg font-medium">خانه</Link>,
    },
    {
      key: 2,
      style: {
        marginTop: "20px",
      },
      icon: (
        <FormOutlined className="text-xl" />
      ),
      label: <Link to="/add-criticism" className="text-lg font-medium">نقد جدید</Link>,
    },
  ];

  return (
    <Layout
      // trigger={null}
      className="bg-grey pl-5"
      style={{
        direction: "rtl",
        minHeight: "100vh",
      }}
    >
      <Sider
        style={{ flex: "none" }}
        className={`h-screen bg-grey ${!collapsed && "shadow-md"} basis-0 `}
        collapsed={collapsed}
        onMouseOver={() => setCollapsed(false)}
        onMouseOut={() => setCollapsed(true)}
      >
        <Flex
          className={`w-[full] items-center bg-grey ${collapsed ? "justify-center" : "justify-start  gap-1"}  pt-4`}
          vertical={false}
        >
          <img src={logo} width={collapsed ? 400 : 100}/>
          {!collapsed && (
            <Typography className="text-xl font-bold">نقدتو</Typography>
          )}
        </Flex>
        <Menu
          className="mt-7" // direction="right"
          defaultSelectedKeys={["1"]}
          // defaultOpenKeys={["sub1"]}
          mode="inline"
          // collapsed={collapsed}
          items={items}
        ></Menu>
      </Sider>
      <Layout>
        <Header className=" w-full bg-grey">
          <DashboardHeader />
        </Header>
        <Content className="mx-[16px] mt-3">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
