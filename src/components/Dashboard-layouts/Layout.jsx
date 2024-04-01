import { Breadcrumb, Layout, Menu, Flex, Typography } from "antd";
import DashboardHeader from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import logo from "../../assets/images/logo.svg";

const DashboardLayout = () => {
  const { Header, Content, Footer, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout
      className="bg-grey"
      style={{
        direction: "rtl",
        minHeight: "100vh",
      }}
    >
      <Sider
        className={`h-screen bg-grey ${!collapsed && "shadow-md"}`}
        collapsed={collapsed}
        onMouseOver={() => setCollapsed(false)}
        onMouseOut={() => setCollapsed(true)}
      >
        <Flex
          className={`w-[full] items-center bg-grey ${collapsed ? "justify-center pr-5" : "justify-around"}  pt-2`}
          vertical={false}
        >
          <img src={logo} />
          {!collapsed && <Typography>نقدیتو</Typography>}
        </Flex>
        <Sidebar
          className="!important bg-grey"
          collapsed={collapsed}
          setCollapsed={(v) => setCollapsed(v)}
        />
      </Sider>
      <Layout>
      <Header className=" w-full bg-grey">
        <DashboardHeader />
      </Header>
      <Content className="mx-[16px] mt-3">
        <Flex className="min-h-10 rounded-xl bg-white p-5">hey!</Flex>
      </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
