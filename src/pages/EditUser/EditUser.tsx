import React, { useEffect, useState } from 'react';
import { Box, ButtonGroup } from '@mui/material';
import Button from '../../components/Button/Button';
import { IUser } from '../../models/User';
import { ES } from '../../Text/es';
import { StyledBox, StyledInput } from './EditUser.styles';
import { useParams } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  deleteUserStart,
  getUserStart,
  updateUserStart,
} from 'store/User/user.actions';
import { selectUser } from 'store/User/user.selector';
import { DeleteButton } from 'components/Button/Button.styles';

const EditUser = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const [userState, setUserState] = useState<IUser>(user);

  useEffect(() => {
    dispatch(getUserStart(id));
  }, [dispatch, id]);

  useEffect(() => {
    setUserState(user);
  }, [user]);

  const handleInputChange = (e: any) => {
    setUserState({ ...userState, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (user === userState) {
      window.confirm('No se ha modificado el usuario');
    } else {
      dispatch(updateUserStart(userState));
      history.push(ROUTES.HOME);
    }
  };

  const handleDeleteUser = () => {
    dispatch(deleteUserStart(user.id));
    history.push(ROUTES.HOME);
  };

  return (
    <>
      <h1>Edit User</h1>
      <StyledBox>
        <StyledInput
          placeholder="Name"
          type="text"
          name="first_name"
          value={userState.first_name}
          onChange={handleInputChange}
        />
        <StyledInput
          placeholder="Surname"
          type="text"
          name="last_name"
          value={userState.last_name}
          onChange={handleInputChange}
        />
        <StyledInput
          placeholder="Email"
          type="text"
          name="email"
          value={userState.email}
          onChange={handleInputChange}
        />
        <Box margin={'2vh'}>
          <ButtonGroup variant="outlined" size="medium">
            <Button text={ES.common.update} onClick={handleSubmit} />
            <DeleteButton
              text={ES.common.delete}
              color="error"
              onClick={handleDeleteUser}
            />
            <Button
              text={ES.common.back}
              onClick={() => history.push(ROUTES.HOME)}
            />
          </ButtonGroup>
        </Box>
      </StyledBox>
    </>
  );
};

export default EditUser;
