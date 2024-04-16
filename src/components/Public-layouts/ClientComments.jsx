import React from "react";
import { Carousel, Flex, Typography } from "antd";
import bg from "../../assets/images/shape2.png";
import "../Public-layouts/Styles/ClientComments.css";
import Comment from "./Comment";

export default function ClientComments() {
  return (
    <Flex
      align="center"
      gap="20px"
      className="p-24"
      style={{ backgroundImage: `url(${bg})` }}
      vertical
    >
      <Typography.Title level={3}>نظرات مشتریان</Typography.Title>
      <Typography.Text className="text-lg text-[#6c757d]">
        نگاهی بندازیم به برخی نظرات مشتریان{" "}
        <span className="font-semibold text-primary-700">نقدتو</span>
      </Typography.Text>
      <Carousel
        // autoplay
        className="flex w-[600px] justify-center"
      >
        <Comment />
        <div className="h-20 bg-red-400">test</div>
        <div className="h-20 bg-red-400">test</div>
        <div className="h-20 bg-red-400">test</div>
      </Carousel>
    </Flex>
  );
}
