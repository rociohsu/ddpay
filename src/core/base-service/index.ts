import getAxiosInstance from "./get-axios-instance";
import type { ApiConfig } from "./model";

export default class BaseServices {
  get = async (apiconfig: ApiConfig) => {
    return await getCall(apiconfig);
  };

  post = async (apiconfig: ApiConfig) => {
    return await postCall(apiconfig);
  };

  patch = async (apiconfig: ApiConfig) => {
    return await patchCall(apiconfig);
  };

  put = async (apiconfig: ApiConfig) => {
    return await putCall(apiconfig);
  };

  delete = async (apiconfig: ApiConfig) => {
    return await deleteCall(apiconfig);
  };
}

const getCall = (apiconfig: ApiConfig) => {
  return new Promise((resolve, reject) => {
    getAxiosInstance(apiconfig)
      .get(apiconfig.url)
      .then(
        (response: { data: unknown }) => {
          resolve(response.data);
        },
        (err: any) => {
          reject(err);
        }
      )
      .catch((err: any) => {
        reject(err);
      });
  });
};

const postCall = (apiconfig: ApiConfig) => {
  return new Promise((resolve, reject) => {
    getAxiosInstance(apiconfig)
      .post(apiconfig.url, apiconfig.body)
      .then(
        (response: { data: unknown }) => {
          resolve(response.data);
        },
        (err: any) => {
          reject(err);
        }
      )
      .catch((err: any) => {
        reject(err);
      });
  });
};

const patchCall = (apiconfig: ApiConfig) => {
  return new Promise((resolve, reject) => {
    getAxiosInstance(apiconfig)
      .patch(apiconfig.url, apiconfig.body)
      .then(
        (response: { data: unknown }) => {
          resolve(response.data);
        },
        (err: any) => {
          reject(err);
        }
      )
      .catch((err: any) => {
        reject(err);
      });
  });
};

const putCall = (apiconfig: ApiConfig) => {
  return new Promise((resolve, reject) => {
    getAxiosInstance(apiconfig)
      .put(apiconfig.url, apiconfig.body)
      .then(
        (response: { data: unknown }) => {
          resolve(response.data);
        },
        (err: any) => {
          reject(err);
        }
      )
      .catch((err: any) => {
        reject(err);
      });
  });
};

const deleteCall = (apiconfig: ApiConfig) => {
  return new Promise((resolve, reject) => {
    getAxiosInstance(apiconfig)
      .delete(apiconfig.url)
      .then(
        (response: { data: unknown }) => {
          resolve(response.data);
        },
        (err: any) => {
          reject(err);
        }
      )
      .catch((err: any) => {
        reject(err);
      });
  });
};
