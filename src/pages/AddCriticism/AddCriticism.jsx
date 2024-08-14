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
  Radio,
} from "antd";
import JalaliDatePicker from "../../components/Pickers/JalaliDatePicker";
import NumericInput from "../../components/Inputs/NumericInput";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import addForm from "../../assets/images/addForm.svg";
import { CreateCriticism } from "../../services/APIs";
import { toast } from "react-toastify";

const { TextArea } = Input;

const AddCriticism = (props) => {
  const [data, setData] = useState({});
  const [respondentsNumber, setRespondentsNumber] = useState(0);
  const [date, setDate] = useState();
  const [audio, setAudio] = useState(true);
  const [text, setText] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [success, setSuccess] = useState();
  const [form] = Form.useForm();

  useEffect(() => {
    console.log(data);
  }, [date]);

  const resetFields = () => {
    form.resetFields();
  };

  const submitHandler = async () => {
    try {
      const response = await CreateCriticism(data);
      const message = response.data;
      toast.success(message, {
        autoClose: 2000,
        onClose: () => {
          resetFields();
        },
      });
      console.log(response);
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

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
          form={form}
        >
          <Form.Item
            label="موضوع: "
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            name="title"
            rules={[
              { required: true, message: "موضوع نقد خود را وارد نمایید." },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="توضیحات:"
            value={data.content}
            onChange={(e) => setData({ ...data, content: e.target.value })}
            name="content"
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
            <JalaliDatePicker
              setValue={(e) => {
                const dateObject = new Date(e[1]["$d"]);
                const year = dateObject.getFullYear();
                const month = String(dateObject.getMonth() + 1).padStart(
                  2,
                  "0",
                ); // Months are zero-indexed
                const day = String(dateObject.getDate()).padStart(2, "0");

                // Format the date to 'YYYY-MM-DD'
                const formattedDate = `${year}-${month}-${day}`;

                setData({ ...data, expire_date: formattedDate });
              }}
            />
          </Form.Item>
          <Form.Item
            label="تعداد پاسخ دهندگان"
            name="respondentsNumber"
            rules={[
              {
                // required: true,
                message: "تعداد پاسخ دهندگان را وارد نمایید.",
              },
            ]}
          >
            <NumericInput
              value={respondentsNumber}
              onChange={(v) => setData({ ...data, number_of_respondents: v })}
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
            <Radio.Group
              value={data?.how_to_answer}
              onChange={(v) => {
                setData({ ...data, how_to_answer: v.target.value });
              }}
            >
              <Radio value="voice">صوتی</Radio>
              <Radio value="text">متنی</Radio>
            </Radio.Group>
      
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 16,
            }}
          >
            <Button
              icon={confirmLoading && <Spin size="small" />}
              onClick={submitHandler}
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
      <img className="hidden w-[500px] md:block" src={addForm} />
    </Flex>
  );
};

export default AddCriticism;
