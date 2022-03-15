import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { createStore } from 'Test/test.utils';
import { Provider } from 'react-redux';

describe('App', () => {
  const renderApp = (props = {}) => {
    render(
      <Provider store={createStore()}>
        <App />
      </Provider>
    );
  };
  test('Should render Login Page', () => {
    renderApp();
    const title = screen.getByRole('heading', {
      name: 'Login',
    });
    expect(title).toBeVisible();
  });
});
