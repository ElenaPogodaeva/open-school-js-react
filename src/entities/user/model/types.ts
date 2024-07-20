export interface IUser {
  id: number;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  gender: string;
  image: string;
  token?: string;
}

export interface ILogin {
  username: string;
  password: string;
}
