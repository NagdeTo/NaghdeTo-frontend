import { Flex, Typography } from "antd";
import React from "react";
import voiceAssistant from "../../assets/images/Voice assistant-rafiki.png";
import StyledButton from "../Public-StyledComponents/Buttons/StyledButton";

export default function HeroSection() {
  return (
    <Flex
      className="relative pt-[9.5rem]"
      justify="center"
      gap="20px"
      id="hero-section"
    >
      <img src={voiceAssistant} className="freelancer w-2/5" />
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

        <Typography.Paragraph
          className="max-w-[550px] text-lg text-[#6c757d]"
          style={{ direction: "rtl" }}
        >
          در واقع ما این امکانو بهت می‌دیم تا بتونی به صورت ناشناس حرفتو به بقیه
          بزنی.
        </Typography.Paragraph>

        <StyledButton>رایگان تست کن</StyledButton>
      </Flex>
    </Flex>
  );
}
