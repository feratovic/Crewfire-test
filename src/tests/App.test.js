import {render, screen} from '@testing-library/react';
import {PublicContext} from '../context/PublicContext';
import App from '../pages/App';

test('check App', () => {
  render(
    <PublicContext.Provider value={false}>
      <App />
    </PublicContext.Provider>
  );
});
