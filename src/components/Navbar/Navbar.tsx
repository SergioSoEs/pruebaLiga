import { AppBar, Toolbar, Box } from '@mui/material';
import Button from '../Button/Button';
import { ES } from '../../Text/es';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLogged } from 'store/Login/login.selector';
import { removeToken } from 'utils/token/token';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'routes';
import { logOut } from 'store/Login/login.actions';

const Navbar = () => {
  const isUserLogged = useSelector(isLogged);

  const history = useHistory();
  const dispatch = useDispatch();

  const logOutHandler = () => {
    removeToken();
    dispatch(logOut());
    history.push(ROUTES.HOME);
  };

  return (
    <>
      {isUserLogged && (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Button
                  color="inherit"
                  text={ES.common.logout}
                  onClick={logOutHandler}
                />
              </Toolbar>
            </AppBar>
          </Box>
        </>
      )}
    </>
  );
};

export default Navbar;
