import { Button, Flex, Typography } from "antd";
import React from "react";
import freelancer from "../../assets/images/freelancer.png";
import StyledButton from "../Public-StyledComponents/Buttons/StyledButton";

export default function HeroSection() {
  return (
    <Flex className="mx-auto justify-center pt-10">
      <img src={freelancer} className="w-2/5" />
      <Flex
        vertical={true}
        className="items-end justify-center gap-5"
        component="section"
      >
        <Typography.Title level={1} className="text-primary-1000">
          با نقدتو ناشناس انتقاد کن
        </Typography.Title>

        <Typography.Paragraph className="text-lg text-[#6c757d]">
          در واقع ما این امکانو بهت می‌دیم تا بتونی به صورت ناشناس حرفتو به بقیه
          بزنی
        </Typography.Paragraph>

        <StyledButton
          className="h-12 w-32 rounded-lg border-primary-1000
         bg-primary-1000 font-medium text-white shadow-md
          hover:bg-primary-900 focus-visible:outline-none"
        >
          رایگان تست کن
        </StyledButton>
      </Flex>
    </Flex>
  );
}
