import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const accessToken = cookies.get("access_token");

const httpClient = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  responseType: "json",
  timeout: 50000,
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  maxBodyLength: Infinity,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    token: accessToken ? `Bearer ${accessToken}` : null,
  },
});

export async function callApi(url, body, method = "post", headers, config) {
  return httpClient({
    method: method,
    url: url,
    data: body,
    headers: headers,
    ...config,
  });
}
