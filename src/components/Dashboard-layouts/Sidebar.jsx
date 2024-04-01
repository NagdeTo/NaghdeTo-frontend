import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Button, Menu, Flex, Image } from "antd";
import logo from "../../assets/images/logo.svg";

const Sidebar = (props) => {
  const { collapsed, setCollapsed } = props;
  const items = [
    {
      key: 2,
      icon: <FaHome />,
      label: "خانه",
    },
  ];
  return (
    <Flex style={{ width: collapsed ? "68px" : "200px" }}>
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
