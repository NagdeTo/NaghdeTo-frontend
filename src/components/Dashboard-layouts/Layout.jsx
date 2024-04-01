import { Breadcrumb, Layout, Menu, Flex, Typography } from "antd";
import DashboardHeader from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import logo from "../../assets/images/logo.svg";

const DashboardLayout = ({ children }) => {
  const { Header, Content, Footer, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout
      className="bg-grey pl-5"
      style={{
        direction: "rtl",
        minHeight: "100vh",
      }}
    >
      <Sider
        className={`h-screen bg-grey pr-2 pt-1 ml-5 ${!collapsed && "shadow-md"}`}
        collapsed={collapsed}
        onMouseOver={() => setCollapsed(false)}
        onMouseOut={() => setCollapsed(true)}
      >
        <Flex
          className={`w-[full] items-center bg-grey ${collapsed ? "justify-center pr-5" : "justify-start pr-2 gap-1"}  pt-2`}
          vertical={false} 
        >
          <img src={logo} />
          {!collapsed && <Typography className="text-xl font-bold">نقدیتو</Typography>}
        </Flex>
        <Sidebar
        
          className=" bg-grey"
          collapsed={collapsed}
          setCollapsed={(v) => setCollapsed(v)}
        />
      </Sider>
      <Layout>
      <Header className=" w-full bg-grey">
        <DashboardHeader />
      </Header>
      <Content className="mx-[16px] mt-3">
        { children }
      </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
