import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Menu, Flex, Typography } from "antd";
import "./Styles/Sidebar.css"
const Sidebar = (props) => {
  const { collapsed, setCollapsed } = props;
  const items = [
    {
      key: 1,
      icon: <Flex className="w-[50px] flex justify-cenetr pl-1"><AiOutlineHome  size={25}/></Flex>,
      label:<Typography className="text-lg font-medium	">خانه</Typography>,
      
    },
  ];
  return (
    
      <Menu
        className={` pt-5 pr`}
        // direction="right"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        // mode="inline"
        // collapsed={collapsed}
        items={items}
      >
      </Menu>
  );
};

export default Sidebar;
