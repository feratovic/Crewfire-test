import {render, screen} from '@testing-library/react';
import App from '../pages/App';

test('renders learn react link', () => {
  render(<App />);
  const el = screen.getByText(/hello world/i);
  expect(el).toBeInTheDocument();
});
