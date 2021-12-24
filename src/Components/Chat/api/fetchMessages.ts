import { AxiosPromise } from 'axios';
import qs from 'query-string';

import { axios } from 'Utils';

export const fetchMessages = (filters): AxiosPromise => {
  return axios.request({
    method: 'GET',
    url: '/',
    params: {
      ...filters,
    },
    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'bracket' }),
  });
};
