import React from 'react';
import axios, { AxiosStatic } from 'axios';
import { USER_LIST } from 'models/Fixtures/User';
import api from './api';

jest.mock('axios');

describe('Api', () => {
  const mockedAxios = axios as jest.Mocked<AxiosStatic>;

  test('Should return user list when get users is called', async () => {
    const EXPECTED_USER_LIST = { USER_LIST };
    const PAGE = 1;
    mockedAxios.get.mockResolvedValueOnce({
      data: EXPECTED_USER_LIST,
    });
    expect(await api.getUsers(PAGE)).toEqual({
      data: EXPECTED_USER_LIST,
    });
    expect(mockedAxios.get).toHaveBeenCalledWith(`users?page=${PAGE}`);
  });
});
