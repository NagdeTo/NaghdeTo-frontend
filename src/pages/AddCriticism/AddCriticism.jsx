import React, { useState } from "react";
import { Flex, Typography, Button, Checkbox, Form, Input } from "antd";
import JalaliDatePicker from "../../components/Pickers/JalaliDatePicker";
import NumericInput from "../../components/Inputs/NumericInput";
const { TextArea } = Input;

const AddCriticism = () => {
  const [respondentsNumber, setRespondentsNumber] = useState(0);

  return (
    <Flex className=" mt-10 flex min-h-10 flex-col items-start  justify-center rounded-xl bg-white px-5 py-10 shadow-lg">
      <Typography className="pb-5	text-2xl font-extrabold">نقد جدید</Typography>
      {/* <Flex className="w-full flex-row items-center justify-start gap-2">
        <Typography>موضوع: </Typography>
      </Flex> */}
      <Form
        name="basic"
        // labelCol={{
        //   span: 10,
        // }}
        // wrapperCol={{
        //   span: 18,
        // }}
        style={{
          direction: "rtl",
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="موضوع: "
          name="subject"
          rules={[{ required: true, message: "موضوع نقد خود را وارد نمایید." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="توضیحات:"
          name="description"
          rules={[
            {
              required: false,
              message: "توضیحات نقد خود را وارد نمایید.",
            },
          ]}
        >
          <TextArea />
        </Form.Item>
        <Form.Item
          label="بازه زمانی"
          name="date"
          rules={[
            {
              required: false,
              message: "تاریخ شروع و پایان را وارد نمایید.",
            },
          ]}
        >
          <JalaliDatePicker />
        </Form.Item>
        <Form.Item
          label="تعداد پاسخ دهندگان"
          name="respondentsNumber"
          rules={[
            {
              required: true,
              message: "تعداد پاسخ دهندگان را وارد نمایید.",
            },
          ]}
        >
          <NumericInput
            value={respondentsNumber}
            onChange={setRespondentsNumber}
          />
        </Form.Item>
        <Form.Item
          label="نحوه پاسخ‌دهی"
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 1,
            span: 16,
          }}
        >
          <Checkbox> صوتی</Checkbox>
          <Checkbox> متنی</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            ثبت
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
};

export default AddCriticism;
