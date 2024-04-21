import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";

import { Menu, Flex, Typography } from "antd";
import "./Styles/Sidebar.css";
const Sidebar = (props) => {
  const { collapsed, setCollapsed } = props;
  const items = [
    {
      key: 1,
      icon: (
        // <Flex className="justify-cenetr flex w-[50px] pl-1">
        <AiOutlineHome width={"100%"} size={25} className="mt-0.5" />
        // </Flex>
      ),
      label: <Typography className="text-lg font-medium">خانه</Typography>,
    },
    {
      key: 2,
      icon: (
        //<Flex className="justify-cenetr flex pl-1">
        <FiPlus size={25} />
        //</Flex>
      ),
      label: <Typography className="text-lg font-medium">نقد جدید</Typography>,
    },
  ];
  return (
    <Menu
      className="mt-2" // direction="right"
      defaultSelectedKeys={["1"]}
      // defaultOpenKeys={["sub1"]}
      mode="inline"
      // collapsed={collapsed}
      items={items}
    ></Menu>
  );
};

export default Sidebar;
