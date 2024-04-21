import { Button, Space, Table, Flex  } from "antd";
import audioc from "../../assets/audio (4).webm";
import ChatBubble from "../../components/Chat/ChatBubble"

import ReactAudioPlayer from "react-audio-player";
import "./ResponseList.css"
const ResponseList = () => {
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
    },
    {
      title: "زمان",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "محتوای نقد",
      dataIndex: "content",
      key: "content",
    },
  ];

  const data = [
    {
      key: 1,
      name: "فاطمه عبادی",
      date: "۱۴۰۳/۰۱/۲۴",
      time: "۱۲:۴۵",
      content: <ReactAudioPlayer  src={audioc} autoPlay controls />,
    },
    {
      key: 2,
      name: "حانیه موحدیان",
      date: "۱۴۰۳/۰۱/۲۴",
      time: "۱۲:۴۵",
      content: <ChatBubble message="متن تست" maxWidth="max-w-[300px]" />,
    },
    {
      key: 3,
      name: "فاطمه عبادی",
      date: "۱۴۰۳/۰۱/۲۴",
      time: "۱۲:۴۵",
      content: <ReactAudioPlayer  src={audioc} autoPlay controls />,
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
