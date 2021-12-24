import React from 'react';

import Chat, { useFetchMessages } from 'Components/Chat';

const App: React.FC = () => {
  const { data, isLoading } = useFetchMessages();

  return isLoading ? <div>Loading...</div> : <Chat messages={data} />;
};

export default App;
