export type UserType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  isAdmin: boolean;
  verified: boolean;
  rememberMe: boolean;
  error?: string;
  _v: number;
}
export type ResponseUser = {
  updatedUser: UserType,
  token: string,
  tokenDeathTim:number
}
