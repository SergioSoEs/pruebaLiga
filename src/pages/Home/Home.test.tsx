import React from 'react';
import axios, { AxiosStatic } from 'axios';
import { render, screen } from '@testing-library/react';
import { createStore } from 'Test/test.utils';
import { Provider } from 'react-redux';

import Home from './Home';

jest.mock('axios');

describe('Home Page', () => {
  const mockedAxios = axios as jest.Mocked<AxiosStatic>;
  mockedAxios.get.mockResolvedValue({});
  const renderHomePage = (props = {}) => {
    render(
      <Provider store={createStore()}>
        <Home />
      </Provider>
    );
  };

  test('Should show user list when home page is displayed', () => {
    renderHomePage();
    const name = screen.getByRole('columnheader', {
      name: /first name/i,
    });
    const lastName = screen.getByRole('columnheader', {
      name: /last name/i,
    });
    const email = screen.getByRole('columnheader', {
      name: /email/i,
    });

    expect(name).toBeVisible();
    expect(lastName).toBeVisible();
    expect(email).toBeVisible();
  });
});
