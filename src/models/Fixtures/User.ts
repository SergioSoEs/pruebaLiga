import { IUser } from '../User';

export const EMPTY_USER: IUser = {
  id: 0,
  first_name: '',
  last_name: '',
  email: '',
  avatar: '',
};

export const USER_LIST: IUser[] = [
  {
    id: 0,
    first_name: 'first',
    last_name: 'first',
    email: 'first@first.com',
    avatar: 'firstURL',
  },
  {
    id: 1,
    first_name: 'second',
    last_name: 'second',
    email: 'second@second.com',
    avatar: 'secondURL',
  },
];
