import React, { useEffect, useState } from 'react';
import { LoginButton } from './Login.styles';
import { StyledBox, StyledInput } from '../EditUser/EditUser.styles';
import { ES } from '../../Text/es';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart } from 'store/Login/login.actions';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'routes';
import { isLogged } from 'store/Login/login.selector';

export interface IUserLogin {
  email: string;
  password: string;
}

const Login = () => {
  const isUserLogged = useSelector(isLogged);
  const history = useHistory();

  useEffect(() => {
    isUserLogged && history.push(ROUTES.HOME);
  }, [history, isUserLogged]);

  const dispatch = useDispatch();
  const [userToLogin, setUserToLogin] = useState<IUserLogin>({
    email: '',
    password: '',
  });

  const handleInputChange = (e: any) => {
    setUserToLogin({ ...userToLogin, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (userToLogin.email === '' || userToLogin.password === '') {
      window.confirm('Completa los campos');
    } else {
      dispatch(loginStart(userToLogin));
    }
  };

  return (
    <>
      <h1>Login</h1>
      <StyledBox className="login-box">
        <StyledInput
          placeholder="Email"
          type="text"
          name="email"
          value={userToLogin.email}
          onChange={handleInputChange}
        />
        <StyledInput
          placeholder="Contraseña"
          type="password"
          name="password"
          value={userToLogin.password}
          onChange={handleInputChange}
        />
        <LoginButton
          data-testid="login-button"
          className="login-button"
          variant="contained"
          disabled={false}
          onClick={handleLogin}
        >
          {ES.common.login}
        </LoginButton>
      </StyledBox>
    </>
  );
};

export default Login;
