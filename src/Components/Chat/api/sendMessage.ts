import { AxiosPromise } from 'axios';

import { axios } from 'Utils';
import { TMessageSendPayload } from '../types';

export const sendMessage = (payload: TMessageSendPayload): AxiosPromise => {
  return axios.request({
    method: 'POST',
    url: '/',
    data: payload,
  });
};
