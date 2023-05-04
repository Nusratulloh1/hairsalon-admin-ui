export interface ILoginInfo {
  email: string;
  password: string;
}
export interface IAcceptInvite {
  code: string;
  confirm_password: string;
  password: string;
}

export interface ISigninForm {
  email: string;
  country_id: string;
  phone: string;
  confirm_password: string;
  password: string;
}
export interface ICountryCodes {
name: string;
code: string;
dial_code: string;

}

export interface IResetInvite {
  code: string;
  otp?: string;
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
  phone?: string;
  first_name: string;
  last_name: string;
  avatar?: string;
  country: { code: string },
  role: "user" | "admin" | "moderator" | "super_admin";
  is_verified: boolean;
}
