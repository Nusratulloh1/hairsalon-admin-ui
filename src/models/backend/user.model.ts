export interface ILoginInfo {
  email: string;
  password: string;
}
export interface IAcceptInvite {
  code: string;
  confirm_password: string;
  password: string;
}
export interface IResetInvite {
  code: string;
  otp: string;
  confirm_password: string;
  password: string;
}

export interface IUserRole {
  id: string;
  name: { ru: string; uz: string };
}

export interface IUser {
  id: string;
  email: string;
  phone: string;
  name: string;
  surname: string;
  middle_name?: string;
  avatar?: string;
  roles: IUserRole[];
}
