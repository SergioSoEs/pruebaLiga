import React from 'react';
import { render, screen } from '@testing-library/react';
import { createStore } from 'Test/test.utils';
import { Provider } from 'react-redux';
import Login from './Login';

describe('Login', () => {
  const renderApp = (props = {}) => {
    render(
      <Provider store={createStore()}>
        <Login />
      </Provider>
    );
  };
  test('Should render Login Form', () => {
    renderApp();
    const emailField = screen.getByPlaceholderText('Email');
    const passwordField = screen.getByPlaceholderText('Contraseña');

    const loginButton = screen.getByRole('button', {
      name: /iniciar sesión/i,
    });

    expect(emailField).toBeVisible();
    expect(loginButton).toBeVisible();
    expect(passwordField).toBeVisible();
  });
});
