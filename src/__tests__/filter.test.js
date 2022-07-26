import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import store from '../Redux/configureStore';

describe('Test Seach and Click', () => {
  test('Testing search bar and route to detail page', async () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );
    const SearchBar = await screen.findByPlaceholderText(
      'Search by Crypto name ...',
    );
    userEvent.type(SearchBar, 'tether');
    const crypto = await screen.findByText('tether');
    userEvent.click(crypto);
    const singleCrypto = await screen.findByText('Name:tether');
    await waitFor(() => expect(singleCrypto.classList.contains('crypto-n')).toBeTruthy());
  });
});
