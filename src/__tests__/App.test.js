import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import render from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import App from '../App';

it('Test if here App renders correctly', () => {
  const TREE = render.create(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(TREE).toMatchSnapshot();
});
