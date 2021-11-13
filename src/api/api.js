import axios from "axios";
import { BASE_URL } from "@/constants/app-constants";

const sleep = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
axios.defaults.baseURL = BASE_URL;

/*axios.interceptors.response.use(async (response) => {
  await sleep(1000);
  return response;
});*/

const responseBody = (response) => response.data;

const request = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),
};

export default request;
