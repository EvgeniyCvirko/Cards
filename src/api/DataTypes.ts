export type LoginParamType = {
  email: string,
  password: string,
  rememberMe: boolean
}

export type RegisterDataType = {
  email: string,
  password: string,
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
