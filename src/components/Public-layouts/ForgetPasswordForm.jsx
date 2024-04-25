import React from "react";
import { Form, Flex, Typography, Input, Button } from "antd";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function ForgetPasswordForm() {
  return (
    <Flex
      justify="center"
      align="center"
      className="h-[350px] w-[450px] rounded-lg px-8 shadow-[0px_0px_3px_0.4px_rgba(60,72,88,0.15)]"
      vertical
    >
      <Typography.Title level={3}>بازیابی حساب</Typography.Title>

      <Typography.Paragraph
        style={{ direction: "rtl" }}
        className="text-[16px] text-[#6c757d]"
      >
        لطفا آدرس ایمیل خود را وارد کنید. لینکی برای ایجاد رمز عبور جدید از طریق
        ایمیل دریافت خواهید کرد.
      </Typography.Paragraph>

      <Form className="w-full">
        <Form.Item
          style={{ direction: "rtl" }}
          label="ایمیل"
          colon={false}
          name="email"
          rules={[{ required: true, message: "لطفاً ایمیل خود را وارد کنید!" }]}
        >
          <Input
            placeholder="ایمیل"
            prefix={<HiOutlineMail className="h-5 w-5 text-[#6c757d]" />}
          />
        </Form.Item>
      </Form>

      <Form.Item className="w-full">
        <Button
          className="h-[40px] w-full bg-primary-1000 text-white"
          htmlType="submit"
        >
          ارسال
        </Button>
      </Form.Item>

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
        <Typography.Text>رمز عبور خود را به خاطر می‌آورید؟</Typography.Text>
      </Flex>
    </Flex>
  );
}
