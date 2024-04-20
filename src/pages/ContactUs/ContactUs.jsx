import React from "react";
import Image from "../../assets/images/contact-us.svg";
import { Row, Col, Typography, Flex } from "antd";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <Row align="center" justify="space-around" className="h-full pt-20 ">
      <Col span={8}>
        <img src={Image} className="hidden md:block" />
      </Col>
      <Col span={10} className="flex flex-col ">
        <Typography className="text-4xl		font-black	">
          از طریق راه‌های زیر میتوانید با ما در ارتباط باشید
        </Typography>
        <Typography className="pt-10 text-lg font-medium">
          هر سوالی داشتی بپرس
        </Typography>
        <Row className="items-center gap-3 pt-5">
          <Col>
            <MdOutlineMailOutline size={30} />
          </Col>
          <Col>
            <Typography className="text-xl font-bold">ایمیل</Typography>
            <Typography component="a" className="text-lg  text-primary-1000">
              contact@example.com
            </Typography>
          </Col>
        </Row>
        <Row className="items-center gap-3 pt-5">
          <Col>
            <LuPhone size={30} />
          </Col>
          <Col>
            <Typography className="text-xl font-bold">تلفن</Typography>
            <Typography component="a" className="text-lg  text-primary-1000">
              +9821000000
            </Typography>
          </Col>
        </Row>
        <Row className="gap-5 pt-5">
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
            <FaFacebookF className="h-5 w-5 text-[#535657] hover:text-primary-1000" />
          </Link>
        </Row>
      </Col>
    </Row>
  );
};

export default ContactUs;
