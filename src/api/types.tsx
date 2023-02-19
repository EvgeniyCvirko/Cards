export type LoginParamType = {
  email: string,
  password: string,
  rememberMe: boolean
}

export type RegisterDataType = {
  email: string,
  password: string,
}

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
export type ErrorDataResponseType = {
  error: string
  in: string
  isEmailValid: boolean
  isPassValid: boolean
}
export type ForgotDataType = {
  email: string,
  from: string,
  message: string
}
export type NewPasswordDataType = {
  password: string,
  resetPasswordToken: string,
}
export type ChangeProfileDataType = {
  name: string,
  avatar: string,
}
export type ResponseUser = {
  updatedUser: UserType,
  token: string,
  tokenDeathTim:number
}
