import { Button, Flex, Form, Input, InputNumber, Typography } from "antd";
import React from "react";
import logo from "../../assets/images/logo.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import "../Public-layouts/Styles/Footer.css";

export default function Footer() {
  return (
    <Flex
      className="bg-slate-100 p-24"
      justify="space-around"
      align="center gap-2 text-[#6c757d]"
      style={{ direction: "rtl" }}
    >
      {/* 1 */}
      <Flex gap="20px" align="center" className="text-[#6c757d]" vertical>
        <img src={logo} className="w-32" />
        <Typography.Text className="text-lg text-[#6c757d]">
          با نقدتو ناشناس انتقاد کن.
        </Typography.Text>
        <Flex gap="10px">
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
        </Flex>
      </Flex>
      {/* 2 */}
      <Flex vertical align="flex-start">
        <Typography.Title level={4}>شرکت</Typography.Title>
        <Link className="flex items-center gap-2 text-[#6c757d]">
          <FaAngleLeft />
          درباره ما
        </Link>
        <Link className="flex items-center gap-2 text-[#6c757d]">
          <FaAngleLeft />
          خدمات
        </Link>
        <Link className="flex items-center gap-2 text-[#6c757d]">
          <FaAngleLeft />
          تیم
        </Link>
        <Link className="flex items-center gap-2 text-[#6c757d]">
          <FaAngleLeft />
          قیمت‌گذاری
        </Link>
        <Link className="flex items-center gap-2 text-[#6c757d]">
          <FaAngleLeft />
          پروژه
        </Link>
        <Link className="flex items-center gap-2 text-[#6c757d]">
          <FaAngleLeft />
          مشاغل
        </Link>
        <Link className="flex items-center gap-2 text-[#6c757d]">
          <FaAngleLeft />
          وبلاگ
        </Link>
        <Link className="flex items-center gap-2 text-[#6c757d]">
          <FaAngleLeft />
          ورود
        </Link>
      </Flex>
      {/* 3 */}
      <Flex vertical align="flex-start">
        <Typography.Title level={4}>لینک‌های مفید</Typography.Title>
        <Link className="flex items-center gap-2 text-[#6c757d]">
          <FaAngleLeft />
          خدمات سایت
        </Link>
        <Link className="flex items-center gap-2 text-[#6c757d]">
          <FaAngleLeft />
          حریم خصوصی
        </Link>
        <Link className="flex items-center gap-2 text-[#6c757d]">
          <FaAngleLeft />
          مستند
        </Link>
        <Link className="flex items-center gap-2 text-[#6c757d]">
          <FaAngleLeft />
          تغییرات
        </Link>
        <Link className="flex items-center gap-2 text-[#6c757d]">
          <FaAngleLeft />
          اجزا
        </Link>
      </Flex>
      {/* 4 */}
      <Flex vertical align="flex-start">
        <Typography.Title level={4}>خبرنامه</Typography.Title>
        <Typography.Text className="max-w-56 text-[16px] text-[#6c757d]">
          ثبت‌نام کنید و آخرین اخبار نقدتو را از طریق ایمیل دریافت کنید.
        </Typography.Text>
        <Form className="mt-2 flex flex-col gap-6">
          <Form.Item
            label="ایمیل خود را بنویسید"
            rules={[
              {
                required: true,
                message: "ایمیل خود را وارد کنید!",
                type: "email",
              },
            ]}
          >
            <Input
              placeholder="ایمیل شما"
              prefix={<HiOutlineMail className="h-5 w-5 text-[#6c757d]" />}
            />
          </Form.Item>

          <Form.Item>
            <Button
              className="mt-2 flex w-full items-center justify-center
            bg-primary-1000 p-5 text-white shadow-md"
              htmlType="submit"
            >
              خبرنامه
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
}
