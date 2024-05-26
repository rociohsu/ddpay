import router from "@/router";
import type { ApiConfig } from "./../model";
import axios, { type AxiosInstance } from "axios";

const errorHandle = (status: number, msg: string) => {
  console.log(`api error: ${status} | ${msg}`);
  switch (status) {
    case 403:
      // case 401:
      router.push("/login");
      break;
    default:
      break;
  }
  return false;
};

export default function getAxiosInstance(apiconfig: ApiConfig): AxiosInstance {
  const apiConfig = {
    withCredentials: true,
    baseURL: apiconfig.baseConfig?.baseURL
      ? apiconfig.baseConfig.baseURL
      : import.meta.env.VITE_URL,
    // headers: apiconfig.baseConfig?.headers
    //   ? apiconfig.baseConfig.headers
    //   : {
    //       Authorization: `Bearer ${"token"}`,
    //       "content-type": "application/json",
    //     },
  };

  const service = axios.create(apiConfig);

  service.interceptors.request.use(
    (config) => {
      if (!config.data) {
        config.data = {};
      }
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  service.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const { response } = error;
      if (response) {
        if (!errorHandle(response.status, response.data.error)) {
          return Promise.reject(response);
        }
      } else {
        if (!window.navigator.onLine) {
          console.log("Network failure");
        }
      }
      return Promise.resolve(response);
    }
  );

  return service;
}
