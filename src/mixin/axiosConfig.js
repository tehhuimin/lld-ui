import axios from "axios";

const defaultConfig = {
  baseURL: process.env.VUE_APP_APIURL || "/api"
};

const defaultAxios = axios.create(defaultConfig);

const requestInterceptors = [
  function(config) {
    config.headers["test"] = "test";
    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
];

const responseInterceptors = [
  function(response) {
    let content = response.data;
    if (!Object.prototype.hasOwnProperty.call(content, "success")) {
      return content.data;
    }
    if (!content.success) {
      let error = new Error(content.errorDesc);
      return Promise.reject(error);
    } else {
      return content.data;
    }
  },
  function(err) {
    return Promise.reject(err);
  }
];

defaultAxios.interceptors.request.use(...requestInterceptors);
defaultAxios.interceptors.response.use(...responseInterceptors);

const formdata = function(url, data, progressFn) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    },
    onUploadProgress: progressFn
  };
  let formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
  }
  return defaultAxios.post(url, formData, config);
};

defaultAxios.$formdata = formdata;

export default {
  defaultAxios
};
