import axios from "axios";

const sleep = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
axios.defaults.baseURL = "http://localhost:5000/api";
axios.interceptors.response.use(async (response) => {
  await sleep(1000);
  return response;
});

const responseBody = (response) => response.data;

const request = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),
};

export default request;
