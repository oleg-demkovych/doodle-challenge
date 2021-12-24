import React, { useMemo, memo, useState } from 'react';

import './ChatFooter.less';

interface IProps {
  onMessageSend: (text: string, data?: { [key: string]: never }) => void;
  isFinal?: boolean;
}

const ChatFooter: React.FC<IProps> = ({ onMessageSend }) => {
  const [inputValue, setInputValue] = useState('');
  const isSubmitDisabled = useMemo(() => !inputValue, [inputValue]);

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!isSubmitDisabled) {
      onMessageSend(inputValue);
      setInputValue('');
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e?.currentTarget?.value);
  };

  return (
    <footer className="chat__footer">
      <form onSubmit={handleFormSubmit} className="chat__footer__form">
        <input
          placeholder="Message"
          name="message"
          onChange={onInputChange}
          value={inputValue}
          autoFocus
          autoComplete="off"
        />

        <button type="submit" aria-label="send" disabled={isSubmitDisabled}>
          Send
        </button>
      </form>
    </footer>
  );
};

export default memo(ChatFooter);
