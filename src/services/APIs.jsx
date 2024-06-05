import { callApi } from "./httpClient";

export const SignUp = async (data) => {
  return callApi("/register", data);
};
