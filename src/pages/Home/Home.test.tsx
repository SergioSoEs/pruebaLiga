import { render } from '@testing-library/react';
import React from 'react';
import Home from './Home';

describe('Home Page', () => {
  const initialState = {
    
  };
  const store = mockStoreRedux(initialState)
  const renderComponent = (props) => render(<Home />);
});
