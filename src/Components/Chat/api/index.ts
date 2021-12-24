import { TFilters } from '../types';
import { fetchMessages } from './fetchMessages';
import { sendMessage } from './sendMessage';

export const chatKeys = {
  all: ['messages'] as const,
  lists: () => [...chatKeys.all, 'list'] as const,
  list: (params: TFilters) => [...chatKeys.lists(), { params }] as const,
};

export const chatApi = {
  chatKeys,
  fetchMessages,
  sendMessage,
};
