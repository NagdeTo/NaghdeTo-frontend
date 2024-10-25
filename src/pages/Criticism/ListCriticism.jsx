import React, { useEffect, useState } from "react";
import { Space, Table, Flex } from "antd";
import { GetQuestionsList } from "../../services/APIs";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { MoreOutlined } from "@ant-design/icons";
import ListMore from "../../components/Public-StyledComponents/ListMore";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const response = await GetQuestionsList();
      setData(response.data);
      console.log(response.data);
    } catch (err) {
      toast.error(err.messaga);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    // getData();
    console.log(data);
    
  }, [data]);

  const columns = [
    {
      title: "عنوان",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "تاریخ پایان",
      key: "expire_date",
      dataIndex: "expire_date",
    },
    {
      title: "تعداد پاسخ",
      dataIndex: "number_of_respondents",
      key: "number_of_respondents",
    },
    {
      title: "محتوا",
      dataIndex: "content",
      key: "content",
    },

    {
      title: "نحوه پاسخدهی",
      dataIndex: "how_to_answer",
      key: "how_to_answer",
      render: (record) => <div>{record === "text" ? "متنی" : "صوتی"}</div>,
    },
    {
      render: (record, row) => (
        <ListMore  items = {[
          {
            label: <Link to={`/edit-criticism/${row._id}`}>ویرایش</Link>,
            key: '1',
          },
          {
            type: 'divider',
          },
          {
            label: <Link to={`/answer/${row._id}`}>لینک پاسخ</Link>,
            key: '2',
          },
          {
            type: 'divider',
          },
          {
            label: <Link to={`/response-list/${row._id}`}>لیست پاسخ</Link>,
            key: '3',
          },
        ]
        
        }></ListMore>
          
      ),
    },
  ];
  

  return (
    <Flex className=" mt-10 flex  min-h-10 items-center justify-center rounded-xl bg-white px-5 py-10 shadow-lg">
      <Table className="h-full w-full" columns={columns} dataSource={data} />
    </Flex>
  );
};

export default Dashboard;
