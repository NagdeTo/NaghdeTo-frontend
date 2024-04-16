import { Flex, Typography } from "antd";
import React from "react";

export default function Comment({ star, comment, name, job, photo }) {
  return (
    <Flex
      className="h-[200px] w-[600px] bg-pink-300 
      shadow-[0px_3px_3px_0.4px_rgba(60,72,88,0.15)]"
      vertical
    >
      <Flex>{star}</Flex>
      <Typography.Paragraph>{comment}</Typography.Paragraph>
      <Typography.Title level={3}>
        {name}
        {job}
      </Typography.Title>
    </Flex>
  );
}
