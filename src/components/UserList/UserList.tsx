import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
  Paper,
  ButtonGroup,
} from '@mui/material';
import { StyledPagination, StyledTableCell } from './UserList.styles';
import { EditButton, DeleteButton } from '../Button/Button.styles';
import { ES } from '../../Text/es';
import { IUser } from '../../models/User';
import { useHistory } from 'react-router-dom';
import { ROUTES_PARAM } from '../../routes';
import TableContainer from '@mui/material/TableContainer';
import { deleteUserStart, getUsersStart } from 'store/User/user.actions';
import {
  selectPage,
  selectTotalPages,
  selectUsers,
} from 'store/User/user.selector';

const UserList = () => {
  const users = useSelector(selectUsers);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  const navigate = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersStart());
  }, [dispatch]);

  const tableHeader = ['First Name', 'Last Name', 'Email', ''];

  const handleDelete = (id: number, name: string) => {
    if (window.confirm(ES.common.deleteConfirm + ' ' + name)) {
      dispatch(deleteUserStart(id));
    }
  };

  const handlePageChange = (event: any, page: number) => {
    dispatch(getUsersStart(page));
  };

  const handleEdit = (userId: number) => {
    navigate.push(`${ROUTES_PARAM.EDIT_USER_PARAM}/${userId}`);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="users-table">
          <TableHead>
            <TableRow>
              {tableHeader.map((element, i) => (
                <TableCell key={`table-header-${i}`} align="center">
                  {element}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user: IUser) => (
              <TableRow
                key={`table-row-${user.id}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {user.first_name}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {user.last_name}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {user.email}
                </TableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  <Avatar
                    key={`cell1-${user.id}`}
                    data-testid={`avatar-${user.id}`}
                    src={user.avatar}
                  ></Avatar>
                  <ButtonGroup variant="outlined" size="small">
                    <EditButton
                      data-testid={`edit-button-${user.id}`}
                      text={ES.common.edit}
                      onClick={() => {
                        handleEdit(user.id);
                      }}
                    ></EditButton>
                    <DeleteButton
                      data-testid={`delete-button-${user.id}`}
                      color="error"
                      text={ES.common.delete}
                      onClick={() => {
                        handleDelete(user.id, user.first_name);
                      }}
                    ></DeleteButton>
                  </ButtonGroup>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <StyledPagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
        />
      </TableContainer>
    </>
  );
};

export default UserList;
