import { Button, Flex, Typography } from "antd";
import React from "react";
import freelancer from "../../assets/images/freelancer.png";
import StyledButton from "../Public-StyledComponents/Buttons/StyledButton";

export default function HeroSection() {
  return (
    <Flex className="pt-10" justify="center">
      <img src={freelancer} className="w-2/5" />
      <Flex
        vertical={true}
        className="items-end"
        component="section"
        justify="center"
        gap="20px"
      >
        <Typography.Title level={1} className="text-primary-1000">
          با نقدتو ناشناس انتقاد کن
        </Typography.Title>

        <Typography.Paragraph className="text-lg text-[#6c757d]">
          در واقع ما این امکانو بهت می‌دیم تا بتونی به صورت ناشناس حرفتو به بقیه
          بزنی
        </Typography.Paragraph>

        <StyledButton>رایگان تست کن</StyledButton>
      </Flex>
    </Flex>
  );
}
