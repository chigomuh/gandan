import axios, { CreateAxiosDefaults } from 'axios';
import Cookies from 'js-cookie';
import { token } from '~/constants';

const createApi = (config?: CreateAxiosDefaults) => {
  const accessToken = Cookies.get(token.accessToken);

  const _api = axios.create({
    ...config,
    headers: {
      ...config?.headers,
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  });

  _api.interceptors.response.use(response => response.data);

  return _api;
};

export const kakaoApi = createApi({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
});

export const googleApi = createApi();

const api = createApi();

export default api;
