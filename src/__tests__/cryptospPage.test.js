import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import CryptoPage from '../Components/CryptosPage';

it('Test if header render correctly', () => {
  const TREE = TestRenderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <CryptoPage />
      </BrowserRouter>
    </Provider>,
  );
  expect(TREE).toMatchSnapshot();
});
