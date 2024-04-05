import { Button, Flex, Typography } from "antd";
import React from "react";
import StyledButton from "../Public-StyledComponents/Buttons/StyledButton";
import bg from "../../assets/images/shape2.png";

export default function Test() {
  return (
    <Flex
      className="py-24"
      align="center"
      vertical
      style={{ backgroundImage: `url(${bg})`, backgroundColor: "#f8f9fc " }}
    >
      <Typography.Title level={2}>
        👇اگه برات جالب شد بزن رو دکمه زیر تا تست کنی
      </Typography.Title>

      <StyledButton>رایگان تست کن</StyledButton>
    </Flex>
  );
}
