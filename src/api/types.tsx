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
  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean;
  rememberMe: boolean;
  error?: string;
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
