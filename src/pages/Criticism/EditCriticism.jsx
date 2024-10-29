import React, { useState, useEffect } from "react";
import {
  Flex,
  Typography,
  Button,
  Form,
  Input,
  Spin,
  Radio,
} from "antd";
import JalaliDatePicker from "../../components/Pickers/JalaliDatePicker";
import NumericInput from "../../components/Inputs/NumericInput";
import addForm from "../../assets/images/addForm.svg";
import { GetQuestionsDetail, UpdateCriticism } from "../../services/APIs";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const { TextArea } = Input;

const EditCriticism = (props) => {
  let  {id}  = useParams();
  const [data, setData] = useState({});
  const [respondentsNumber, setRespondentsNumber] = useState(0);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await GetQuestionsDetail(id);
      setData({title:response.data.title,content:response.data.content,number_of_respondents:Number(response.data.number_of_respondents),how_to_answer:response.data.how_to_answer,expire_date:response.data.expire_date})
      form.setFieldsValue({title:response.data.title,content:response.data.content,respondentsNumber:Number(response.data.number_of_respondents)})
      setRespondentsNumber(response.data.number_of_respondents)
    } catch (err) {
      console.log('nothing');
      
    }
  };
  useEffect(() => {
    getData()
    
  }, []);
  useEffect(() => {
    console.log(data.title);
    console.log(respondentsNumber);
    
  }, [data,respondentsNumber]);

  

  const submitHandler = async () => {
    console.log(data);
    
    try {
      
      const response = await UpdateCriticism(data,id);
      const message = response.data;
      toast.success(message, {
        autoClose: 2000,
        onClose: () => {
          navigate("/list-criticism");
        },
      });
      console.log(response);
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };


  return (
    <Flex className=" justify-around rounded-xl bg-white px-5 py-10 shadow-lg">
      <Flex className=" mt-10 flex min-h-10 flex-col items-start justify-center  ">
        <Typography className="pb-5	text-2xl font-extrabold">
          نقد جدید
        </Typography>
        {console.log(data.title)}
        <Form
          name="basic"
          
          style={{
            direction: "rtl",
            maxWidth: 700,
          }}
          initialValues={{
            remember: true,
          }}
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
            <TextArea initialValue={data.content}/>
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
          >
            <NumericInput
              value={respondentsNumber}
              onChange={(v) => setData({ ...data, number_of_respondents: v })}
            />
          </Form.Item>
          {/* <Form.Item
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
      
          </Form.Item> */}
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
          </Form.Item>
        </Form>
      </Flex>
      <img className="hidden max-w-[500px] min-w-[50px] md:block"   src={addForm} />
    </Flex>
  );
};

export default EditCriticism;
