export type loginParamType={
  email: string,
  password: string,
  rememberMe: boolean
}

export type UserType={
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