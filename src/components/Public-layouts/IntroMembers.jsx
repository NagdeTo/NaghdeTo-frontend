import { Flex, Typography } from "antd";
import React from "react";
import first from "../../assets/images/01.jpg";
import second from "../../assets/images/02.jpg";
import third from "../../assets/images/03.jpg";
import fourth from "../../assets/images/04.jpg";
import "../../components/Public-layouts/Styles/IntroMembers.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function IntroMembers() {
  return (
    <Flex
      align="center"
      className="py-36"
      gap="20px"
      vertical
      id="intro-members"
    >
      <Typography.Title level={3} className="mb-0">
        با اعضای تیم نقدتو بیشتر آشنا شو
      </Typography.Title>

      <Typography.Text className="text-lg text-[#6c757d]">
        تیم ما تشکیل شده از بچه‌های با انگیزه دانشگاه اصفهان
      </Typography.Text>

      <Flex gap="50px" className="relative">
        <Flex vertical align="center" gap="10px" className="team-member">
          <img src={first} className="h-[180px] rounded-[50%]" />
          <Flex gap="10px" className="socials absolute top-[80px] opacity-0">
            <Link>
              <FaLinkedinIn className="h-5 w-5 text-[#535657] hover:text-primary-1000" />
            </Link>
            <Link>
              <FaTwitter className="h-5 w-5 text-[#535657] hover:text-primary-1000" />
            </Link>
            <Link>
              <FaInstagram className="h-5 w-5 text-[#535657] hover:text-primary-1000" />
            </Link>
            <Link>
              <FaGithub className="h-5 w-5 text-[#535657] hover:text-primary-1000" />
            </Link>
          </Flex>
          <Typography.Title level={5} className="mb-0">
            یاسین فخار
          </Typography.Title>
          <Typography.Text
            className="text-base text-[#6c757d]"
            style={{ direction: "rtl" }}
          >
            برنامه‌نویس ML
          </Typography.Text>
        </Flex>
        <Flex vertical align="center" gap="10px" className="team-member">
          <img src={second} className="h-[180px] rounded-[50%]" />
          <Flex gap="10px" className="socials absolute top-[80px] opacity-0">
            <Link>
              <FaLinkedinIn className="h-5 w-5 text-[#535657] hover:text-primary-1000" />
            </Link>
            <Link>
              <FaTwitter className="h-5 w-5 text-[#535657] hover:text-primary-1000" />
            </Link>
            <Link>
              <FaInstagram className="h-5 w-5 text-[#535657] hover:text-primary-1000" />
            </Link>
            <Link>
              <FaGithub className="h-5 w-5 text-[#535657] hover:text-primary-1000" />
            </Link>
          </Flex>
          <Typography.Title level={5} className="mb-0">
            فاطمه عبادی
          </Typography.Title>
          <Typography.Text
            className="text-base text-[#6c757d]"
            style={{ direction: "rtl" }}
          >
            برنامه‌نویس Frontend
          </Typography.Text>
        </Flex>
        <Flex vertical align="center" gap="10px" className="team-member">
          <img src={third} className="h-[180px] rounded-[50%]" />
          <Flex gap="10px" className="socials absolute top-[80px] opacity-0">
            <Link>
              <FaLinkedinIn className="h-5 w-5 text-[#535657] hover:text-primary-1000" />
            </Link>
            <Link>
              <FaTwitter className="h-5 w-5 text-[#535657] hover:text-primary-1000" />
            </Link>
            <Link>
              <FaInstagram className="h-5 w-5 text-[#535657] hover:text-primary-1000" />
            </Link>
            <Link>
              <FaGithub className="h-5 w-5 text-[#535657] hover:text-primary-1000" />
            </Link>
          </Flex>
          <Typography.Title level={5} className="mb-0">
            حانیه موحدیان
          </Typography.Title>
          <Typography.Text
            className="text-base text-[#6c757d]"
            style={{ direction: "rtl" }}
          >
            برنامه‌نویس Frontend
          </Typography.Text>
        </Flex>
        <Flex vertical align="center" gap="10px" className="team-member">
          <img src={fourth} className="h-[180px] rounded-[50%]" />
          <Flex gap="10px" className="socials absolute top-[80px] opacity-0">
            <Link>
              <FaLinkedinIn className="h-5 w-5 text-[#535657] hover:text-primary-1000" />
            </Link>
            <Link>
              <FaTwitter className="h-5 w-5 text-[#535657] hover:text-primary-1000" />
            </Link>
            <Link>
              <FaInstagram className="h-5 w-5 text-[#535657] hover:text-primary-1000" />
            </Link>
            <Link>
              <FaGithub className="h-5 w-5 text-[#535657] hover:text-primary-1000" />
            </Link>
          </Flex>
          <Typography.Title level={5} className="mb-0">
            علی نصری
          </Typography.Title>
          <Typography.Text
            className="text-base text-[#6c757d]"
            style={{ direction: "rtl" }}
          >
            برنامه‌نویس Backend
          </Typography.Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
