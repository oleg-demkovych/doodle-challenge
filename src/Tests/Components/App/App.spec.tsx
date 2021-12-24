import { render } from '@testing-library/react';

import App from 'Components/App';

describe('App', () => {
  test('should render and match the snapshot', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
