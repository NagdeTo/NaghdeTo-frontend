import { callApi } from "./httpClient";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const accessToken = cookies.get("access_token");

export const SignUp = async (data) => {
  return callApi("/register", data);
};

export const Login = async (data) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
    token: accessToken ? `Bearer ${accessToken}` : null,
  };
  return callApi("/login", data, "post", headers);
};

export const CreateCriticism = async (data) => {
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: accessToken ? `Bearer ${accessToken}` : null,
  };
  return callApi("/question/create", data, "post", headers);
};

export const GetQuestionsList = async () => {
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: accessToken ? `Bearer ${accessToken}` : null,
  };
  return callApi("/question/list", null, "get", headers);
};
export const GetResponsesList = async (id) => {
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: accessToken ? `Bearer ${accessToken}` : null,
  };
  return callApi(`/answer/list/${id}`, null, "get", headers);
};
