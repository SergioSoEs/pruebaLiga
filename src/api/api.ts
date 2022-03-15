import axios, { AxiosStatic } from 'axios';
import { IUser } from 'models/User';

export class API {
  http: AxiosStatic;
  constructor() {
    axios.defaults.baseURL = 'https://reqres.in/api/';
    this.http = axios;
  }

  public login = (userToLogin) =>
    this.http.post(`login`, {
      email: userToLogin.email,
      password: userToLogin.password,
    });

  public getUsers = (page: number) => this.http.get(`users?page=${page}`);

  public getUser = (id: number) => this.http.get(`users?id=${id}`);

  public deleteUser = (id: number) => this.http.delete(`${id}`);

  public updateUser = (user: IUser) =>
    this.http.put(`users/${user.id}`, {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    });
}

export default new API();
