import { callApi } from "./httpClient";
import Cookies from "universal-cookie";

export const Headers = ()=>{
  const cookies = new Cookies();
  const accessToken = cookies.get("access_token");

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Authorization": accessToken ? `Bearer ${accessToken}` : null,
  };
  return headers
}

export const multiPartheader=()=>{
  const cookies = new Cookies();
  const accessToken = cookies.get("access_token");

  return {'headers':{
              'Content-Type':'multipart/form-data',
              'Authorization': accessToken ? `Bearer ${accessToken}` : null,
            }}}
export const SignUp = async (data) => {
  return callApi("/register", data);
};

export const Login = async (data) => {
  const cookies = new Cookies();
  const accessToken = cookies.get("access_token");

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
    token: accessToken ? `Bearer ${accessToken}` : null,
  };
  return callApi("/login", data, "post", headers);
};

export const CreateCriticism = async (data) => {
 
  
  return callApi("/question/create", data, "post", Headers());
};

export const UpdateCriticism = async (data,id) => {

  return callApi(`/question/update/${id}`, data, "put", Headers());
};

export const GetQuestionsDetail = async (id) => {
  return callApi(`/question/detail/${id}`, null, "get", Headers());
};

export const GetQuestionsList = async () => {
  return callApi("/question/list", null, "get", Headers());
};

export const GetResponsesList = async (id) => {
  return callApi(`/answer/list/${id}`, null, "get", Headers());
};
export const CreateAnswer = async (data) => {
  
  return callApi(`/answer/create`, data, "post", Headers());
};
export const VoiceConvert = async (data) => {
  
  return callApi(`/answer/voice_converter`, data, "post", multiPartheader());
};