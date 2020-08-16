import axios from 'axios';

export const apiBaseUri =
  process.env.NODE_ENV !== 'production'
    ? process.env.REACT_APP_API_BASE_URI_DEV
    : process.env.REACT_APP_API_BASE_URI;

export const reverseArr = (input) => {
  const ret = [];
  for (let i = input.length - 1; i >= 0; i -= 1) {
    ret.push(input[i]);
  }
  return ret;
};

export const setToken = (key, value) => {
  try {
    if (key) return sessionStorage.setItem(key, JSON.stringify(value));
    return new Error('Key not provided to set item');
  } catch (error) {
    console.log('Something went wrong while setting token: ', error); //eslint-disable-line
    return null;
  }
};

export const getToken = (key = '') => {
  try {
    if (key) {
      const fetchData = sessionStorage.getItem(key);
      return fetchData != null ? JSON.parse(fetchData) : null;
    }
    return undefined;
  } catch (error) {
    console.log('Something went wrong while getting token: ', error); //eslint-disable-line
    return null;
  }
};

export const removeToken = (key = '') => {
  try {
    if (key) {
      return sessionStorage.removeItem(key);
    }
    return undefined;
  } catch (error) {
    console.log('Something went wrong while removing token: ', error); //eslint-disable-line
    return null;
  }
};

export const api = axios.create({
  baseURL: apiBaseUri,
});

api.defaults.timeout = 3000;

api.interceptors.request.use(
  async (config) => {
    if (config.baseURL === apiBaseUri && !config.headers.Authorization) {
      let token = await getToken('token');
      const newConfig = config;
      if (token) {
        token = JSON.parse(token);
        newConfig.headers.Authorization = `Bearer ${token}`;
      }
      // if (!(config.data instanceof FormData)) {
      //   config.headers['content-type'] = "application/json"
      // }
      return newConfig;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
