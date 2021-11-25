export interface Ilogin {
  username: string;
  password: string;
}

export interface ISignup {
  username: string;
  firstname: string;
  lastname: string;
  password: string;
}
export interface IForgetPassword {
  username: string;
}
export interface IResetPassword {
  username: string;
  password: string;
  code: string;
}
