import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

export const fetcher = (url: string, token: number) => axios.get(url, { headers: { "X-User": token } }).then((res) => res.data);

export const postFetcher = (url: string, token: number, body: string) =>
  axios.post(url, body, { headers: { "X-User": token } }).then((res) => res.data);
