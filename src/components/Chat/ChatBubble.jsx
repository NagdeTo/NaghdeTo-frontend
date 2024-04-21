import React from "react";
import { Typography } from "antd";
import "./ChatBubble.css";

const ChatBubble = ({ message, maxWidth }) => {
  return (
    <Typography
      className={`send  relative	 ${maxWidth}	break-words rounded-[20px] px-5 py-2.5 leading-6 before:absolute before:bottom-0 before:h-[24px]  before:content-[''] after:absolute after:bottom-0 after:h-[24px] after:content-['']`}
    >
      {message}{" "}
    </Typography>
  );
};

export default ChatBubble;
