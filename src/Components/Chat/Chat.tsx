import React, { useCallback } from 'react';

import { ChatMessages, ChatFooter, useSendMessage } from './';
import { TMessages } from './types';

import './Chat.less';

interface IProps {
  messages: TMessages;
}

const Chat: React.FC<IProps> = ({ messages }) => {
  const { mutate } = useSendMessage();

  const handleMessageSend = useCallback(
    (text) => {
      mutate({ message: text, author: 'me' });
    },
    [mutate]
  );

  return (
    <div className="chat" role="log">
      <ChatMessages messages={messages} />
      <ChatFooter onMessageSend={handleMessageSend} />
    </div>
  );
};

export default Chat;
