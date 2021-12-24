import React, { memo, useMemo } from 'react';
import { format } from 'date-fns';
import cx from 'classnames';

import { TMessage } from '../../types';

import './ChatMessage.less';

interface Props {
  message: TMessage;
}

const ChatMessage: React.FC<Props> = ({ message: chatMessage }) => {
  const { author, message, timestamp } = chatMessage;
  const isMe = useMemo(() => author === 'me', [author]);
  const msgDate = useMemo(() => (timestamp ? format(new Date(timestamp), 'd MMM yyyy HH:mm') : null), [timestamp]);

  return (
    <li className={cx('chat__message', isMe ? 'right' : 'left')}>
      {!isMe && <div className="chat__message__author">{author}</div>}
      <div className="chat__message__text">{message}</div>
      {msgDate && (
        <div className="chat__message__date">
          <time dateTime={msgDate} title={msgDate}>
            {msgDate}
          </time>
        </div>
      )}
    </li>
  );
};

export default memo(ChatMessage);
