import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { getToken } from 'utils/token/token';

const PrivateRoute = ({ ...props }) => {
  const token = getToken();
  return <>{token ? <Route {...props} /> : <Redirect to={ROUTES.LOGIN} />}</>;
};

export default PrivateRoute;

export const MainRoute = ({ ...props }) => {
  return <Route {...props} />;
};
