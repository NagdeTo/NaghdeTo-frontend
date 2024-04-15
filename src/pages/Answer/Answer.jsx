import React, { useEffect, useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { IoMdSend } from "react-icons/io";
import ChatBubble from "../../components/Chat/ChatBubble";
import { Flex, Typography, Input, Button, Modal } from "antd";
import AnswerSvg from "../../assets/images/answerSvg.svg";
import "./Answer.css";

const { TextArea } = Input;
const Answer = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [voiceMessage, setVoiceMessage] = useState();
  const [typing, setTyping] = useState(false);
  const recorderControls = useAudioRecorder();
  const [modalOpen, setModalOpen] = useState(false);
  const [success, setSuccess] = useState(true);

  useEffect(() => {
    // unknown api
    setSuccess(true);
  });
  const addUnkowmVoice = () => {
    setMessageList((prevMessages) => [...prevMessages, voiceMessage]);
    setModalOpen(false);
  };
  const changeInputhandler = (e) => {
    setTyping(true);
    setMessage(e.target.value);
    if (e.target.value === "") {
      setTyping(false);
    }
  };
  const sendHandler = () => {
    setMessageList((prevMessages) => [
      ...prevMessages,
      {
        voice: false,
        text: message,
      },
    ]);
    setMessage("");

    setTyping(false);
  };
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    // audio.src = url;
    // audio.controls = true;
    if (messageList.length < 2) {
      setVoiceMessage({
        voice: true,
        url: url,
      });
      setModalOpen(true);
    }
  };

  return (
    <Flex className=" mt-10 flex  min-h-10 items-start justify-around rounded-xl bg-white px-5 py-10 shadow-lg">
      <Flex className=" flex h-[500px] min-h-10 w-full flex-col items-start md:w-[50%] ">
        <Typography className="pb-5	text-2xl font-extrabold">
          پاسخ به نقد
        </Typography>
        <Flex className="h-full w-full flex-col items-center justify-end rounded-md bg-grey px-7">
          <Flex
            id="messageBox"
            className="h-full w-full flex-col items-start justify-end gap-2 rounded-md bg-grey pb-2"
          >
            {messageList.map((message, index) => {
              return message.voice ? (
                <audio key={index} src={message.url} controls={true} />
              ) : (
                <ChatBubble key={index} message={message.text} />
              );
            })}
          </Flex>
          {messageList.length < 2 && (
            <Flex className="w-full items-center justify-start bg-grey  pb-2">
              {typing ? (
                <IoMdSend
                  onClick={() => sendHandler()}
                  size={24}
                  className="mt-1"
                />
              ) : (
                <AudioRecorder
                  onRecordingComplete={addAudioElement}
                  audioTrackConstraints={{
                    noiseSuppression: true,
                    echoCancellation: true,
                  }}
                  recorderControls={recorderControls}
                />
              )}

              {!recorderControls.isRecording && (
                <TextArea
                  className={`mr-1 mt-1 w-full `}
                  variant="filled"
                  placeholder="نقد خود را بنویسید..."
                  autoSize={{ minRows: 1, maxRows: 6 }}
                  value={message}
                  onChange={(e) => changeInputhandler(e)}
                />
              )}
            </Flex>
          )}
        </Flex>
        {messageList.length === 2 && (
          <Button type="primary" className="mt-2 w-full">
            ارسال
          </Button>
        )}
      </Flex>
      <img src={AnswerSvg} className="hidden w-[500px] md:block" />
      <Modal
        className="text-center"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Flex key={1} className="justify-start pt-5">
            {success ? (
              <>
                <Button
                  key="ok"
                  onClick={addUnkowmVoice}
                  className="ml-4"
                  type="primary"
                >
                  تایید و ارسال
                </Button>
                <Button key="cancel" className="ml-4" onClick={() => setModalOpen(false)} danger>
                  ضبط دوباره
                </Button>
              </>
            ) : (
              <Button key="cancel" danger>
                Cancel
              </Button>
            )}
          </Flex>,
        ]}
      >
        <Flex className="mt-3 flex-col items-end justify-between gap-3 pr-5">
          {/* <Typography className="font-semibold	 text-lg">:صدای ضبط شده</Typography>
        <audio src={voiceMessage&&voiceMessage.url} controls={true} className="h-[45px]" /> */}
          <Typography className="text-lg	 font-semibold">
            :صدای ناشناس
          </Typography>
          <audio src={voiceMessage && voiceMessage.url} controls={true} />
        </Flex>

        {/* {success ? (
                <CheckCircleOutlined
                  size={50}
                  className="text-5xl text-primary-1000"
                />
              ) : (
                <CloseCircleOutlined
                  size={50}
                  className="text-5xl text-red-500"
                />
              )} */}
      </Modal>
    </Flex>
  );
};

export default Answer;
