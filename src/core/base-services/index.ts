import fetchInstance from "./fetch-instance";
import { ApiConfig } from "./model";

export default class BaseServices {
  get = async (apiconfig: ApiConfig) => {
    return await getCall(apiconfig)
  };

  post = async (apiconfig: ApiConfig) => {
    return await postCall(apiconfig)
  };

  put = async (apiconfig: ApiConfig) => {
    return await putCall(apiconfig)
  };

  delete = async (apiconfig: ApiConfig) => {
    return await deleteCall(apiconfig)
  };
}

const getCall = (apiconfig: ApiConfig) => {
  return new Promise((resolve, reject) => {
    fetchInstance(apiconfig, 'GET')
      .then(
        (response) => {
          resolve(response)
        },
        (err) => {
          reject(err)
        }
      )
      .catch((err) => {
        reject(err)
      })
  })
}

const postCall = (apiconfig: ApiConfig) => {
  return new Promise((resolve, reject) => {
    fetchInstance(apiconfig, 'POST').then(
      (response) => {
        resolve(response)
      },
      (err) => {
        reject(err)
      }
    )
      .catch((err) => {
        reject(err)
      })
  })
}

const putCall = (apiconfig: ApiConfig) => {
  return new Promise((resolve, reject) => {
    fetchInstance(apiconfig, 'PUT').then(
      (response) => {
        resolve(response)
      },
      (err) => {
        reject(err)
      }
    )
      .catch((err) => {
        reject(err)
      })
  })
}

const deleteCall = (apiconfig: ApiConfig) => {
  return new Promise((resolve, reject) => {
    fetchInstance(apiconfig, 'DELETE')
      .then(
        (response) => {
          resolve(response)
        },
        (err) => {
          reject(err)
        }
      )
      .catch((err) => {
        reject(err)
      })
  })
}