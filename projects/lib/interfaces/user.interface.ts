import { UserModel } from "@lib/models/user.model";
import { IStatusResponse } from "./base.interface";

export interface ILogInResponse {
  accessToken: string;
  user: UserModel;
  statusResponse: IStatusResponse;
}

export interface IUsersResponse {
  users: Array<UserModel>;
  statusResponse: IStatusResponse;
}

export interface IUserResponse {
  user: UserModel;
  statusResponse: IStatusResponse;
}

export interface ISignUpResponse {
  statusResponse: IStatusResponse;
  validation: {
    usernameValid: boolean;
    emailValid: boolean;
  };
}

export interface IUserUpdateResponse {
  statusResponse: IStatusResponse;
  validation: {
    username: boolean;
    email: boolean;
    currentPassword: boolean;
  };
}
