import React, { useEffect, useState } from "react";
import { Space, Table, Flex } from "antd";
import { GetQuestionsList } from "../../services/APIs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const response = await GetQuestionsList();
      setData(response.data);
      console.log(response);
    } catch (err) {
      toast.error(err.messaga);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
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
      title: "عنوان",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "نحوه پاسخدهی",
      dataIndex: "how_to_answer",
      key: "how_to_answer",
      render: (record) => <div>{record === "text" ? "متنی" : "صوتی"}</div>,
    },
    {
      dataIndex: "how_to_answer",
      key: "how_to_answer",
      render: (record, row) => (
        <div onClick={() => navigate(`/response-list/${row._id}`)}>ss</div>
      ),
    },
  ];
  // const data = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //     tags: ["nice", "developer"],
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //     tags: ["loser"],
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //     tags: ["cool", "teacher"],
  //   },
  // ];
  return (
    <Flex className=" mt-10 flex  min-h-10 items-center justify-center rounded-xl bg-white px-5 py-10 shadow-lg">
      <Table
        className="h-full w-full"
        style={{ direction: "ltr" }}
        columns={columns}
        dataSource={data}
      />
    </Flex>
  );
};

export default Dashboard;
