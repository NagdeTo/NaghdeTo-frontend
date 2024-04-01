import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Menu, Flex, Typography } from "antd";

const Sidebar = (props) => {
  const { collapsed, setCollapsed } = props;
  const items = [
    {
      key: 2,
      icon: <AiOutlineHome  size={25}/>,
      label:<Typography className="text-lg font-medium	">خانه</Typography>,
      style:{
        backgroundColor:"primary[200]"
      }
    },
  ];
  return (
    <Flex style={{ width: collapsed ? "68px" : "190px" }}>
      <Menu
        className="pt-5"
        direction="right"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
      />
    </Flex>
  );
};

export default Sidebar;
