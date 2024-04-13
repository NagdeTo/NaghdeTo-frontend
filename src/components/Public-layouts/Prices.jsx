import { Flex, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Public-layouts/Styles/Prices.css";
import PriceCards from "./PriceCards";

export default function Prices() {
  const [activeLink, setActiveLink] = useState("ماهانه");

  function handleLinkClick(title) {
    setActiveLink(title);
  }

  const plans = ["رایگان", "پلن A", "پلن B", "پلن C"];
  const prices = [0, 50, 100, 300];
  const naghds = [1, 5, 10, 20];
  const answers = [20, 30, 50, 100];
  const ribbonContents = ["رایگان", "برای شروع"];

  return (
    <Flex
      className="p-24"
      justify="flex-end"
      vertical
      style={{ direction: "rtl" }}
      gap="50px"
    >
      <Typography.Title level={3} className="mb-0">
        قیمت‌هامون
      </Typography.Title>

      <Flex justify="space-between" align="center" className="mt-[-40px]">
        <Typography.Paragraph className="mb-0 text-lg text-[#6c757d]">
          اینو اول بگم که نقدتو برای شروع رایگانه و می‌تونی همین الان تست کنی و
          اگه راضی بودی، پلن‌های دیگمونو بخری.
        </Typography.Paragraph>

        <Flex className="rounded-4xl bg-primary-200 px-2 py-2 text-white">
          <Link
            className={`${activeLink === "ماهانه" ? "active-link-prices" : "text-black"} px-4 py-2`}
            onClick={() => handleLinkClick("ماهانه")}
          >
            ماهانه
          </Link>
          <Link
            className={`${activeLink === "سالانه" ? "active-link-prices" : "text-black"} px-4 py-2`}
            onClick={() => handleLinkClick("سالانه")}
          >
            سالانه
          </Link>
        </Flex>
      </Flex>

      <Flex justify="space-between">
        {prices.map((price, i) => {
          return (
            <PriceCards
              plan={plans[i]}
              price={price}
              naghdCount={naghds[i]}
              answerCount={answers[i]}
              key={i}
              ribbon={i < 2}
              ribbonContent={ribbonContents[i]}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}
