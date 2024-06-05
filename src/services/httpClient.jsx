import axios from "axios";

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
    // token: token ? `Bearer ${token}` : null,
  },
});

export async function callApi(url, body, method = "post", config, headers) {
  return httpClient({
    method: method,
    url: url,
    data: body,
    headers: headers,
    ...config,
  });
}
