import { Flex, Form, Input, Typography, Checkbox, Button } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import GoToHome from "./GoToHome";
import "../Public-layouts/Styles/LoginForm.css";

export default function LoginForm() {
  const [loginButtonClicked, setLoginButtonclicked] = useState(false);

  return (
    <Flex vertical align="center" justify="center" className="w-1/2 py-12" gap="10px">
      <Typography.Title level={3}>ورود</Typography.Title>
      <Form className="flex flex-col items-center gap-6" id="login-form">
        <Form.Item
          style={{ direction: "rtl" }}
          label="ایمیل"
          colon={false}
          name="email"
          rules={[{ required: true, message: "لطفاً ایمیل خود را وارد کنید!" }]}
          className={`${loginButtonClicked ? "mb-4" : "mb-0"} email-form-item`}
        >
          <Input
            placeholder="ایمیل"
            prefix={<HiOutlineMail className="h-5 w-5 text-[#6c757d]" />}
          />
        </Form.Item>

        <Form.Item
          style={{ direction: "rtl" }}
          label="رمز عبور"
          colon={false}
          name="password"
          rules={[
            { required: true, message: "لطفاً رمز عبور خود را وارد کنید!" },
          ]}
          className={`${loginButtonClicked ? "mb-4" : "mb-0"} password-form-item`}
        >
          <Input
            placeholder="رمز عبور"
            prefix={<MdLockOutline className="h-5 w-5 text-[#6c757d]" />}
          />
        </Form.Item>

        <Flex align="center" className="w-full" justify="space-between">
          <Link className="font-bold hover:text-primary-1000">فراموشی رمز عبور؟</Link>
          <Form.Item name="remember" className="mb-0">
            <Checkbox>مرا بخاطر بسپار</Checkbox>
          </Form.Item>
        </Flex>

        <Form.Item className="mb-0 w-full">
          <Button
            className="w-full h-[40px] bg-primary-1000 text-white"
            htmlType="submit"
            onClick={() => setLoginButtonclicked(true)}
          >
            ورود
          </Button>
        </Form.Item>

        <Flex vertical gap="10px" className="w-full">
          <Button
            icon={<FcGoogle className="h-5 w-5" />}
            className="google-btn flex items-center justify-center w-full"
          >
            Continue With Google
          </Button>
          <Button
            icon={<FaFacebookF className="h-5 w-5 text-[#4267b3]" />}
            className="facebook-btn flex items-center justify-center w-full"
          >
            Continue With Facebook
          </Button>
        </Flex>

        <Flex justify="space-between" className="w-full" align="center">
          <Link to="/sign-up" className="font-bold hover:text-primary-1000">
            ثبت‌نام کنید
          </Link>
          <Typography.Text>حساب ندارید؟</Typography.Text>
        </Flex>
      </Form>
      <GoToHome />
    </Flex>
  );
}
