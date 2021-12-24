import React, { memo, useMemo } from 'react';
import { format } from 'date-fns';
import cx from 'classnames';

import { TMessage } from '../../types';

import './ChatMessage.less';

interface Props {
  message: TMessage;
}

const ChatMessage: React.FC<Props> = ({ message }) => {
  const isMe = useMemo(() => message?.author === 'me', [message?.author]);

  return (
    <div className={cx('chat__message', isMe ? 'right' : 'left')}>
      {!isMe && <div className="chat__message__author">{message.author}</div>}
      <div className="chat__message__text">{message.message}</div>
      {message?.timestamp && (
        <div className="chat__message__date">{format(new Date(message?.timestamp), 'd MMM yyyy HH:mm')}</div>
      )}
    </div>
  );
};

export default memo(ChatMessage);
