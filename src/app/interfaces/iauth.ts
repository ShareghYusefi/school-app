export interface IUser {
  id: number;
  email: string;
}

export interface IJwtPayload {
  id: number;
  email: string;
  exp: number;
  iat: number;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest {
  email: string;
  password: string;
}

export interface IAuthResponse {
  message: string;
  token?: string;
  user?: IUser;
}
