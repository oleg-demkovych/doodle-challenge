import { useMutation, useQueryClient } from 'react-query';

import { TMessageSendPayload, TMessages } from '../types';
import { chatApi } from '../api';

const useSendMessage = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (message: TMessageSendPayload) => {
      return chatApi.sendMessage(message);
    },
    {
      onMutate: async (message: TMessageSendPayload) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(chatApi.chatKeys.lists());

        // Snapshot the previous value
        const previousMessages = queryClient.getQueryData<TMessages>(chatApi.chatKeys.lists());

        // Optimistically update to the new value
        if (previousMessages) {
          queryClient.setQueryData<TMessages>(chatApi.chatKeys.lists(), [...previousMessages, message]);
        }

        return { previousMessages };
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: (err, variables, context) => {
        if (context?.previousMessages) {
          queryClient.setQueryData<TMessages>(chatApi.chatKeys.lists(), context.previousMessages);
        }
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(chatApi.chatKeys.lists());
      },
    }
  );
};

export default useSendMessage;
