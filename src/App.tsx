import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import { ROUTES } from './routes';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import MainRoute from 'components/MainRoute/MainRoute';
import EditUser from 'pages/EditUser/EditUser';
import Navbar from 'components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Box>
        <div className="App">
          <Navbar />
          <Box data-testid="app-container">
            <Switch>
              <MainRoute exact path={ROUTES.LOGIN} component={Login} />
              <PrivateRoute
                exact
                path={ROUTES.EDIT_USER}
                component={EditUser}
              />
              <PrivateRoute exact path={ROUTES.HOME} component={Home} />
            </Switch>
          </Box>
        </div>
      </Box>
    </Router>
  );
}

export default App;
