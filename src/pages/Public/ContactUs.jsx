import React from "react";
import Image from "../../assets/images/contact-us.svg";
import { Row, Col, Typography } from "antd";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <Row justify="center" className="h-full pt-32 items-start" >
      <Col span={8}>
        <img src={Image} className="hidden md:block" />
      </Col>
      <Col span={10} className="flex flex-col gap-8 mt-8" style={{direction: "rtl"}}>
        <Typography className="leading-[50px] text-3xl	font-black max-w-96">
          از طریق راه‌های زیر می‌توانید با ما در ارتباط باشید
           <Typography className="text-lg font-medium text-[#6c757d]">
          هر سوالی داشتی بپرس
        </Typography>
        </Typography>
      
        <Row className="items-center gap-3">
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
        <Row className="items-center gap-3">
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
        <Row className="gap-5">
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
