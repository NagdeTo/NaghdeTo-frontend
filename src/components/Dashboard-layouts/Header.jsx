import React, { useState } from "react";
import { PageHeader } from "@ant-design/pro-components";
import { Dropdown, Button, Space, Avatar, Menu, Flex } from "antd";
import { IoExitOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import Sidebar from "./Sidebar";
import Typography from "antd/es/typography/Typography";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router";

const DashboardHeader = () => {
  const [scroll, setScroll] = useState(false);

  const cookies = new Cookies();

  // const menu = (
  //   <Menu onClick={handleMenuClick}>
  //     <Menu.Item key="profile">پروفایل</Menu.Item>
  //     <Menu.Item key="settings">تنظیمات</Menu.Item>
  //     <Menu.Item key="logout">خروج</Menu.Item>
  //   </Menu>
  // );

  const navigate = useNavigate();

  const items = [
    {
      key: 1,
      danger: true,
      label: "Log Out",
      icon: <IoExitOutline size={20} />,
      onClick: () => {
        cookies.remove("access_token");
        navigate("/");
      },
    },
  ];

  addEventListener("scroll", (event) => {
    if (window.scrollY == 0) {
      setScroll(false);
      return;
    }
    setScroll(true);
  });

  return (
    <PageHeader
      // className={`${scroll ? "bg-grey" : "bg-white"} `}
      // style={{ direction: "rtl" }}
      backIcon={
        <Dropdown key="1" menu={{ items }} trigger={["hover"]}>
          <Avatar size={40} icon={<RxAvatar size={30} />} />
        </Dropdown>
      }
      // backIcon={<IoMdSearch color="rgba(0, 0, 0, 0.65)" size={20} />}
      onBack={() => {}}
      subTitle=" "
      extra={[
        <Flex key={1} vertical={false} className="items-center gap-3">
          <Typography className="text-xl	 text-placeHolder">Search</Typography>
          <IoMdSearch color="rgba(0, 0, 0, 0.65)" size={30} />
        </Flex>,
      ]}
    ></PageHeader>
  );
};

export default DashboardHeader;
