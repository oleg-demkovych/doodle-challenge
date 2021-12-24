export type TMessage = {
  id?: string;
  message?: string;
  author?: string;
  timestamp?: number;
  token?: string;
};
export type TMessages = TMessage[];
export type TMessageSendPayload = Pick<TMessage, 'message' | 'author'>;
export type TFilters = {
  since?: number;
  limit?: number;
};
