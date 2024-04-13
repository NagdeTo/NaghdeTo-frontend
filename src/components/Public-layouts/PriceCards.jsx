import { Button, Flex, Typography } from "antd";
import React from "react";
import "../Public-layouts/Styles/Prices.css";

export default function PriceCards({
  plan,
  price,
  naghdCount,
  answerCount,
  ribbon,
  ribbonContent,
}) {
  return (
    <Flex
      className="card relative h-[300px] w-[260px] cursor-pointer rounded-lg border-b-[3px]
       border-b-primary-1000 p-6 shadow-[0px_0px_3px_0.4px_rgba(60,72,88,0.15)] 
       transition-all duration-300 ease-in-out hover:scale-105"
      vertical
      justify="space-between"
    >
      {ribbon && <span className="ribbon" data-content={ribbonContent}></span>}
      <Typography.Title className="text-primary-1000" level={5}>
        {plan}
      </Typography.Title>
      <Typography.Title level={5}>{price} هزار تومان</Typography.Title>

      <Flex vertical>
        <Typography.Title level={5}>تعداد نقد: {naghdCount}</Typography.Title>
        <Typography.Title level={5}>
          تعداد پاسخ‌دهنده: تا {answerCount} نفر
        </Typography.Title>
      </Flex>

      <Button
        className="flex w-20 items-center justify-center 
      bg-primary-1000 px-2 py-5 font-semibold text-white shadow-[0px_3px_5px_0px_rgba(88,129,87,0.3)]"
      >
        شروع
      </Button>
    </Flex>
  );
}
