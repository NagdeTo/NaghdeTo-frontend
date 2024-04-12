import React, { useState, useEffect } from "react";
import {
  Flex,
  Typography,
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  Spin,
} from "antd";
import JalaliDatePicker from "../../components/Pickers/JalaliDatePicker";
import NumericInput from "../../components/Inputs/NumericInput";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import addForm from "../../assets/images/addForm.svg";
const { TextArea } = Input;

const AddCriticism = (props) => {
  const [respondentsNumber, setRespondentsNumber] = useState(0);
  const [subject, setSubject] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [audio, setAudio] = useState(true);
  const [text, setText] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [success, setSuccess] = useState();

  useEffect(() => {
    console.log(date);
  }, [date]);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setModalOpen(true);
      setSuccess(false);
      setConfirmLoading(false);
    }, 2000);
  };
  return (
    <Flex className=" justify-around rounded-xl bg-white px-5 py-10 shadow-lg">
      <Flex className=" mt-10 flex min-h-10 flex-col items-start justify-center  ">
        <Typography className="pb-5	text-2xl font-extrabold">
          نقد جدید
        </Typography>
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
            maxWidth: 700,
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            name="subject"
            rules={[
              { required: true, message: "موضوع نقد خود را وارد نمایید." },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="توضیحات:"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            <JalaliDatePicker setValue={setDate} />
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
            valuePropName="checked"
            wrapperCol={{
              offset: 1,
              span: 16,
            }}
          >
            <Checkbox onChange={() => setAudio(!audio)}> صوتی</Checkbox>
            <Checkbox onChange={() => setText(!text)}> متنی</Checkbox>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 16,
            }}
          >
            <Button
              icon={confirmLoading && <Spin size="small" />}
              onClick={handleOk}
              type="primary"
              htmlType="submit"
            >
              ثبت
            </Button>
            <Modal
              className="text-center"
              open={modalOpen}
              onCancel={() => setModalOpen(false)}
              footer={[
                <Flex key={1} className="justify-center pt-5">
                  {success ? (
                    <Button key="ok" type="primary">
                      Ok
                    </Button>
                  ) : (
                    <Button key="cancel" danger>
                      Cancel
                    </Button>
                  )}
                </Flex>,
              ]}
            >
              {success ? (
                <CheckCircleOutlined
                  size={50}
                  className="text-5xl text-primary-1000"
                />
              ) : (
                <CloseCircleOutlined
                  size={50}
                  className="text-5xl text-red-500"
                />
              )}
            </Modal>
          </Form.Item>
        </Form>
      </Flex>
      <img className="w-[500px] md:block hidden" src={addForm} />
    </Flex>
  );
};

export default AddCriticism;
