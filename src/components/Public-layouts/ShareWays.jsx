import { Flex, Typography, Row, Col } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import proposal from "../../assets/images/proposals.png";
import "../Public-layouts/Styles/ShareWays.css";
import { FaAngleLeft } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineApi } from "react-icons/ai";

export default function ShareWays() {
  const [content, setContent] = useState({
    title: "وب‌سایت",
    desc: "در انتهای ساخت نقد، به شما یک لینک داده میشه که می‌تونید اونو با بقیه به اشتراک بذارین و هرکس روی لینک کلیک کنه، می‌تونه به اون نقد پاسخ بده.",
  });
  const [activeLink, setActiveLink] = useState("وب‌سایت");

  function handleLinkClick(title, desc) {
    setContent({
      title,
      desc,
    });
    setActiveLink(title);
  }

  return (
    <Flex className="pb-24" vertical>
      <Typography.Title level={3} className="px-24 text-right">
        روش‌های به اشتراک‌گذاری نقد
      </Typography.Title>

      <Flex
        justify="center"
        gap="50px"
        className="p-10"
        style={{ direction: "rtl" }}
      >
        <Flex
          align="flex-end"
          className="h-1/3 w-[360px] rounded-lg p-6 shadow-[0px_0px_3px_0.4px_rgba(60,72,88,0.15)]"
          vertical
        >
          <Flex justify="center" className="w-full">
            <Flex className="w-full text-right" gap="15px" vertical>
              <Link
                className={`${activeLink === "وب‌سایت" ? "active-link" : ""} flex items-center 
                justify-between px-[16px] py-[9px] text-right`}
                onClick={() =>
                  handleLinkClick(
                    "وب‌سایت",
                    "در انتهای ساخت نقد، به شما یک لینک داده میشه که می‌تونید اونو با بقیه به اشتراک بذارین و هرکس روی لینک کلیک کنه، می‌تونه به اون نقد پاسخ بده.",
                  )
                }
              >
                <Flex align="center" gap="10px">
                  <CgWebsite className="h-[20px] w-[20px]" />
                  وب‌سایت
                </Flex>

                <FaAngleLeft />
              </Link>
              <Link
                className={`${activeLink === "ایمیل" ? "active-link" : ""} flex items-center justify-between
                px-[16px] py-[9px] text-right`}
                onClick={() =>
                  handleLinkClick(
                    "ایمیل",
                    "می‌تونید ایمیل افرادی که می‌خواید به نقد پاسخ بدن رو در سامانه تعریف کنین تا لینک براشون ایمیل بشه.",
                  )
                }
              >
                <Flex align="center" gap="10px">
                  <HiOutlineMail className="h-[20px] w-[20px]" />
                  ایمیل
                </Flex>

                <FaAngleLeft />
              </Link>
              <Link
                className={`${activeLink === "پیامک" ? "active-link" : ""} flex items-center justify-between 
                px-[16px] py-[9px] text-right`}
                onClick={() =>
                  handleLinkClick(
                    "پیامک",
                    "می‌تونید شماره تلفن افرادی که میخواید به نقد پاسخ بدن رو در سامانه تعریف کنین تا لینک براشون پیامک بشه.",
                  )
                }
              >
                <Flex align="center" gap="10px">
                  <FiMessageSquare className="h-[20px] w-[20px]" />
                  پیامک
                </Flex>

                <FaAngleLeft />
              </Link>
              <Link
                className={`${activeLink === "API" ? "active-link" : ""} flex items-center justify-between 
                px-[16px] py-[9px] text-right`}
                onClick={() =>
                  handleLinkClick(
                    "API",
                    "ما بهتون API می‌دیم تا بتونید از اون توی وب‌سایت یا اپ خودتون استفاده کنید.",
                  )
                }
              >
                <Flex align="center" gap="10px">
                  <AiOutlineApi className="h-[20px] w-[20px]" />
                  API
                </Flex>

                <FaAngleLeft />
              </Link>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          className="w-[740px] rounded-lg px-10 py-8 shadow-[0px_0px_3px_0.4px_rgba(60,72,88,0.15)]"
          vertical
          gap="10px"
        >
          <Typography.Title level={3}>{content.title}</Typography.Title>

          <Typography.Text className="text-[16px] text-[#6c757d]">
            {content.desc}
          </Typography.Text>

          <img src={proposal} />
        </Flex>
      </Flex>
    </Flex>
  );
}
