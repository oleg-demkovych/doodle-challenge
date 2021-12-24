import React, { useEffect, useRef } from 'react';

import { ChatMessage } from 'Components/Chat';
import { TMessages } from '../../types';
import { useScrollToElement } from 'Utils';

import './ChatMessages.less';

interface Props {
  messages: TMessages;
}

const ChatMessages: React.FC<Props> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { scrollToElement } = useScrollToElement(messagesEndRef);

  // Scroll to the bottom if messages updated
  useEffect(scrollToElement, [scrollToElement, messages]);

  return (
    <div className="chat__messages">
      {messages.map((msg, key) => (
        <ChatMessage message={msg} key={msg?.id || msg?.timestamp || key} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
