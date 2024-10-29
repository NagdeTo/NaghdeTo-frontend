import { Button, Space, Table, Flex  } from "antd";
import audioc from "../../assets/audio (4).webm";
import ChatBubble from "../../components/Chat/ChatBubble"

import ReactAudioPlayer from "react-audio-player";
import "./ResponseList.css"
import { GetResponsesList } from "../../services/APIs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ResponseList = () => {
  
  const {id} = useParams();
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await GetResponsesList(id);
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
      title: "نام پاسخ‌دهنده",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "تاریخ",
      dataIndex: "date",
      key: "date",
      render: (record,row)=>(row.create_date_time.split(' ')[0])
    },
    {
      title: "زمان",
      dataIndex: "time",
      key: "time",
      render: (record,row)=>(row.create_date_time.split(' ')[1])
    },
    {
      title: "محتوای نقد",
      dataIndex: "content",
      // key: "content",
      render: (record, row) => (
        <>
        {row.content===''?
        <audio src={import.meta.env.VITE_MEDIA_URL+row.voice_path} controls={true} />
        :row.content
        }
        </>
      )
    },
  ];

  return (
    <Flex className=" mt-10 flex  min-h-10 items-center justify-center rounded-xl bg-white px-5 py-10 shadow-lg">
      <Table
        className="h-full w-full "
        // style={{ direction: "ltr" }}
        columns={columns}
        dataSource={data}
      />
    </Flex>
  )
};

export default ResponseList;
