import React from 'react';
import { Route } from 'react-router-dom';

const MainRoute = ({ ...props }) => {
  return <Route {...props} />;
};

export default MainRoute;
