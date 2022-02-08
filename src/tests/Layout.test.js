import {fireEvent, render, screen} from '@testing-library/react';
import {PublicContext} from '../context/PublicContext';
import Layout from '../components/Layout';

test('check search', () => {
  render(
    <PublicContext.Provider value={false}>
      <Layout />
    </PublicContext.Provider>
  );

  /*const inputElement = screen.getByPlaceholderText(/Search by tags/);
  const buttonElement = screen.getByRole('button', {name: /search/i});

  fireEvent.change(inputElement, {target: {value: 'Nature'}});
  fireEvent.click(buttonElement);

  const divElement = screen.getByTestId('card-element');
  expect.divElement.toBeInTheDocument();*/
});
