import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'Test/test.utils';
import { render, screen } from '@testing-library/react';
import EditUser from './EditUser';
import { BrowserRouter } from 'react-router-dom';

describe('Edit User Page', () => {
  const renderEditUserPage = (props = {}) => {
    render(
      <BrowserRouter>
        <Provider store={createStore()}>
          <EditUser />
        </Provider>
      </BrowserRouter>
    );
  };
  test('Should has available Update, Delete, GoBack buttons', () => {
    renderEditUserPage();
    const updateButton = screen.getByRole('button', {
      name: 'Actualizar',
    });
    const deleteButton = screen.getByRole('button', {
      name: 'Borrar',
    });
    const goBackButton = screen.getByRole('button', {
      name: 'Atrás',
    });

    expect(updateButton).toBeVisible();
    expect(deleteButton).toBeVisible();
    expect(goBackButton).toBeVisible();
  });
});
