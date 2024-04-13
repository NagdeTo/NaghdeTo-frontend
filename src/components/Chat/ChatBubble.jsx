import React from 'react';
import { Card, Typography } from 'antd';
// import 'antd/dist/antd.css'; // Import Ant Design styles
import './ChatBubble.css'; // Import your custom CSS (Tailwind CSS)

const ChatBubble = ({ message }) => {
//   const isSender = sender === 'send';

  return (
    <Typography className="send">Hey there! What's up</Typography>

  );
};

export default ChatBubble;
