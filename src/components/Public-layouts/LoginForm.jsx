import { Flex, Form, Input, Typography, Checkbox, Button, Spin } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import "../Public-layouts/Styles/LoginForm.css";
import { Login } from "../../services/APIs";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {
  const [loginButtonClicked, setLoginButtonclicked] = useState(false);
  const [bodyData, setBodyData] = useState({ username: "", password: "" });
  const [form] = Form.useForm();
  const cookies = new Cookies();
  const navigate = useNavigate();

  const resetFields = () => {
    form.resetFields();
  };

  const handleClickLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await Login(bodyData);
      cookies.set("access_token", response.data.access_token);
      toast.success(
        "با موفقیت وارد شدید تا لحظاتی دیگر به صفحه اصلی هدایت می‌شوید",
        {
          autoClose: 2000,
          onClose: () => {
            resetFields();
            navigate("/dashboard");
          },
        },
      );
      console.log(response);
      resetFields();
    } catch (err) {
      const errorMessage = err.response.data;
      toast.error(errorMessage);
      console.error(err);
    }
  };

  return (
    <>
      <Flex
        vertical
        align="center"
        justify="center"
        className="w-1/2 py-12"
        gap="10px"
      >
        <Typography.Title level={3}>ورود</Typography.Title>
        <Form
          className="flex flex-col items-center gap-6"
          id="login-form"
          form={form}
        >
          <Form.Item
            style={{ direction: "rtl" }}
            label="ایمیل"
            colon={false}
            name="email"
            rules={[
              { required: true, message: "لطفاً ایمیل خود را وارد کنید!" },
            ]}
            className={`${loginButtonClicked ? "mb-4" : "mb-0"} email-form-item w-full`}
          >
            <Input
              placeholder="ایمیل"
              prefix={<HiOutlineMail className="h-5 w-5 text-[#6c757d]" />}
              value={bodyData.username}
              onChange={(e) =>
                setBodyData({ ...bodyData, username: e.target.value })
              }
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
            <Input.Password
              placeholder="رمز عبور"
              prefix={<MdLockOutline className="h-5 w-5 text-[#6c757d]" />}
              value={bodyData.password}
              onChange={(e) =>
                setBodyData({ ...bodyData, password: e.target.value })
              }
            />
          </Form.Item>

          <Flex align="center" className="w-full" justify="space-between">
            <Link
              to="/forget-password"
              className="font-bold hover:text-primary-1000"
            >
              فراموشی رمز عبور؟
            </Link>
            <Form.Item name="remember" className="mb-0">
              <Checkbox>مرا بخاطر بسپار</Checkbox>
            </Form.Item>
          </Flex>

          <Form.Item className="mb-0 w-full">
            <Button
              className="h-[40px] w-full bg-primary-1000 text-white"
              htmlType="submit"
              // onClick={() => setLoginButtonclicked(true)}
              onClick={handleClickLogin}
            >
              ورود
            </Button>
          </Form.Item>

          <Flex vertical gap="10px" className="w-full">
            <Button
              icon={<FcGoogle className="h-5 w-5" />}
              className="google-btn flex w-full items-center justify-center"
            >
              Continue With Google
            </Button>
            <Button
              icon={<FaFacebookF className="h-5 w-5 text-[#4267b3]" />}
              className="facebook-btn flex w-full items-center justify-center"
            >
              Continue With Facebook
            </Button>
          </Flex>

          <Flex justify="flex-end" gap="5px" className="w-full" align="center">
            <Link to="/sign-up" className="font-bold hover:text-primary-1000">
              ثبت‌نام کنید
            </Link>
            <Typography.Text>حساب ندارید؟</Typography.Text>
          </Flex>
        </Form>
      </Flex>
      <ToastContainer />
    </>
  );
}
