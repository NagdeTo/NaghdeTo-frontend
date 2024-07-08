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
  return callApi("/token", data, "post", headers);
};

export const CreateCriticism = async (data) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: accessToken ? `Bearer ${accessToken}` : null,
  };
  return callApi("/question/create", data, "post", headers);
};
