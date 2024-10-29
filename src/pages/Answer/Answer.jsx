import React, { useEffect, useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { IoMdSend } from "react-icons/io";
import ChatBubble from "../../components/Chat/ChatBubble";
import { Flex, Typography, Input, Button, Modal } from "antd";
import AnswerSvg from "../../assets/images/answerSvg.svg";
import "./Answer.css";
import { useNavigate, useParams } from "react-router-dom";
import { CreateAnswer, GetQuestionsDetail, VoiceConvert } from "../../services/APIs";
import { toast } from "react-toastify";
import { Lines } from 'react-preloaders';

const { TextArea } = Input;
const Answer = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const [loading, setLoading] = useState(false);
  const [typeAnswer,setTypeAnswer] = useState("")
  const [question,setQuestion] = useState({})
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [voiceMessage, setVoiceMessage] = useState();
  const [typing, setTyping] = useState(false);
  const recorderControls = useAudioRecorder();
  const [modalOpen, setModalOpen] = useState(false);
  const [success, setSuccess] = useState(true);
  const [voiceFile,setVoiceFile] = useState();
const getData = async () => {
    try {
      const response = await GetQuestionsDetail(id);
      setQuestion(response.data)
    } catch (err) {
      console.log('nothing');
      
    }
  };
  useEffect(() => {
    getData()
    
  }, []);
  useEffect(() => {
    console.log(typeAnswer);
  }, [typeAnswer]);

  useEffect(() => {
    // unknown api
    setSuccess(true);
  });
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
  const submitHandler = async()=>{
        try{
          const data_items={'content':message,'question_id':id,'voice_path':voiceFile}
          if (typeAnswer === 'voice'){
            await CreateAnswer(data_items);
            setModalOpen(false);
          }else if(typeAnswer === 'text'){
            const response = await CreateAnswer(data_items);
          }else{
            
          }
          toast.success('پاسخ شما با موفقیت اضافه شد.');
          setTimeout(() => {
            navigate("/");
          }, 1000);
          
        }catch(err){
          console.error(err);
          toast.error(err.message);
        }
  }
  const addUnkowmVoice = () => {
    submitHandler()
      setMessageList((prevMessages) => [...prevMessages, voiceMessage]);
      
    };
  const addAudioElement = async (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    if (messageList.length < 2) {
      setVoiceMessage({
        voice: true,
        url: url,
      });
      const data_file = new FormData()
      const audioFile = new File([blob], 'voice.mp3', { type: 'audio/mpeg' });
      data_file.append("file", audioFile);
      setLoading(true)
      const data =await  VoiceConvert(data_file)
      setTimeout(() => {
        setLoading(false)
        setVoiceFile(data.data.Message)
        setModalOpen(true);
      }, 3000);
    }
  };

  return (
    <Flex className=" mt-20 mb-20 flex  min-h-20 items-start justify-around rounded-xl bg-white px-5 py-10 shadow-lg">
      <Flex className=" flex h-[500px] min-h-10 w-full flex-col items-start md:w-[50%] ">
        <Typography className="pb-5	text-2xl font-extrabold">
          پاسخ به نقد: {question.title}
        </Typography>
        <Flex className="h-full w-full flex-col items-center justify-center rounded-md bg-grey px-7">
          <Flex
            id="messageBox"
            className="h-full w-full flex-col items-start justify-center gap-2 rounded-md bg-grey pb-2"
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
            <Flex className="w-full items-center justify-center bg-grey  pb-2">
              {typeAnswer === 'voice'?
              typing ? (
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
              )
              : typeAnswer === 'text'?
                <>
                  <TextArea
                    className={`mr-1  w-full h-[300px] `}
                    variant="filled"
                    placeholder="نقد خود را بنویسید..."
                    autoSize={{ minRows: 1, maxRows: 6 }}
                    value={message}
                    onChange={(e) => changeInputhandler(e)}
                    />
                  <Button onClick={submitHandler} type="primary" className="mt-2 w-full">
                    ارسال
                  </Button>
                </>
              :
                <>
                  <Button onClick={()=>setTypeAnswer('voice')} type="primary" className="mt-2 ml-2 w-36 h-12">صوتی</Button>
                  <Button onClick={()=>setTypeAnswer('text')} type="primary" className="mt-2 mr-2 w-36 h-12">متنی</Button>

                </>
              }
            </Flex>
          )}
        </Flex>
        {/* {messageList.length === 2 && ( */}
          
        {/* )} */}
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
                <Button
                  key="cancel"
                  className="ml-4"
                  onClick={() => setModalOpen(false)}
                  danger
                >
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
          <Typography className="text-lg	 font-semibold">
            :صدای ناشناس
          </Typography>
          <audio src={import.meta.env.VITE_MEDIA_URL+voiceFile} controls={true} />
        </Flex>

      </Modal>
      {loading?
        <Lines  background='#f4f4f43d'/>
      :
      <></>
      
    }
    </Flex>
  );
};

export default Answer;
