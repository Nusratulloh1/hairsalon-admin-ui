export interface ILoginInfo {
  username: string;
  password: string;
}
export interface ISigninForm {
  firstName: string,
  lastName: string,
  phoneNumber: string;
  password: string;
}
export interface IUser {
  id: number,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  password: string,
  role: "ROLE_ADMIN" | 'ROLE_USER' | 'ROLE_SUPERADMIN',
  enabled: Boolean,
  username: string,
  authorities: 
    {
      authority: "ROLE_ADMIN" | 'ROLE_USER' | 'ROLE_SUPERADMIN'
    }[]
  ,
  accountNonLocked: Boolean,
  accountNonExpired: Boolean,
  credentialsNonExpired: Boolean
}
