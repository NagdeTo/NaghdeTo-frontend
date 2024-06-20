import React, { useState } from "react";
import { Flex, Typography, Input, Form, Checkbox, Button } from "antd";
import { FiUser } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import "../Public-layouts/Styles/SignUpForm.css";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { SignUp } from "../../services/APIs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUpForm() {
  const [form] = Form.useForm();
  const [bodyData, setBodyData] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const [checkRules, setCheckRules] = useState(false);
  const navigate = useNavigate();

  const handleChangeCheckRules = (e) => {
    setCheckRules(e.target.checked);
  };

  const resetFields = () => {
    form.resetFields();
  };

  const handleClickSignUp = async () => {
    try {
      if (!checkRules) return;
      const response = await SignUp(bodyData);
      toast.success(
        "ثبت‌نام با موفقیت انجام شد تا لحظاتی دیگر به صفحه لاگین هدایت می‌شوید",
        {
          autoClose: 2000,
          onClose: () => {
            resetFields();
            navigate("/login");
          },
        },
      );
      console.log(response);
    } catch (err) {
      const errorMessage = err.response.data;
      toast.error(errorMessage, { autoClose: 3000 });
      console.error(err);
    }
  };

  return (
    <>
      <Flex
        className="py-12"
        justify="center"
        align="center"
        gap="10px"
        style={{ direction: "rtl" }}
        vertical
      >
        <Typography.Title level={3}>ثبت‌نام</Typography.Title>
        <Form
          className="flex w-[90%] flex-col gap-6"
          id="signup-form"
          form={form}
        >
          <Form.Item
            label="نام"
            name="first-name"
            colon={false}
            rules={[
              {
                required: true,
                message: "لطفاً نام خود را وارد نمایید!",
              },
            ]}
            className="first-name-form-item-signup mb-0"
          >
            <Input
              placeholder="نام"
              prefix={<FiUser className="h-5 w-5 text-[#6c757d]" />}
              value={bodyData.first_name}
              onChange={(e) =>
                setBodyData({ ...bodyData, first_name: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item
            label="نام خانوادگی"
            name="last-name"
            colon={false}
            rules={[
              {
                required: true,
                message: "لطفاً نام خانوادگی خود را وارد نمایید!",
              },
            ]}
            className="last-name-form-item-signup mb-0"
          >
            <Input
              placeholder="نام خانوادگی"
              prefix={<FiUserCheck className="h-5 w-5 text-[#6c757d]" />}
              value={bodyData.last_name}
              onChange={(e) =>
                setBodyData({ ...bodyData, last_name: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item
            label="ایمیل"
            colon={false}
            name="email"
            rules={[
              { required: true, message: "لطفاً ایمیل خود را وارد کنید!" },
            ]}
            className="email-form-item-signup mb-0"
          >
            <Input
              placeholder="ایمیل (نام کاربری)"
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
            className="password-form-item-signup mb-0"
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
            <Form.Item
              name="remember"
              className="mb-0"
              valuePropName="checked"
              rules={[
                {
                  validator: () =>
                    checkRules
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error("لطفاً قوانین سایت را بپذیرید!"),
                        ),
                },
              ]}
            >
              <Checkbox
                style={{ direction: "ltr" }}
                value={checkRules}
                onChange={handleChangeCheckRules}
              >
                تایید می‌کنم قوانین سایت{" "}
                <Link className="font-bold text-primary-1000">نقدتو</Link> را
                می‌پذیرم
              </Checkbox>
            </Form.Item>
          </Flex>

          <Form.Item className="mb-0 w-full">
            <Button
              className="h-[40px] w-full bg-primary-1000 text-white"
              htmlType="submit"
              onClick={handleClickSignUp}
            >
              ثبت‌نام
            </Button>
          </Form.Item>

          <Flex
            vertical
            gap="10px"
            className="w-full"
            style={{ direction: "ltr" }}
          >
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

          <Flex
            justify="flex-end"
            gap="5px"
            className="w-full"
            align="center"
            style={{ direction: "ltr" }}
          >
            <Link to="/login" className="font-bold hover:text-primary-1000">
              وارد شوید
            </Link>
            <Typography.Text>حساب دارید؟</Typography.Text>
          </Flex>
        </Form>
      </Flex>
      <ToastContainer />
    </>
  );
}
