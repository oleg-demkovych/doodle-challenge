import { useQuery, UseQueryResult } from 'react-query';

import { TMessages, TFilters } from '../types';
import { chatApi } from '../api';

const useSendMessage = (params?: TFilters): UseQueryResult<TMessages> => {
  return useQuery(
    chatApi.chatKeys.lists(),
    async () => {
      const { data } = await chatApi.fetchMessages(params);
      return data;
    },
    {
      keepPreviousData: true,
      onError: (error: string) => {
        throw new Error(error);
      },
    }
  );
};

export default useSendMessage;
