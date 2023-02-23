import {sortPacks} from '../common/enums/SortPacks';

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
export type PacksParamType = {
  packName?:string,
  min?:number,
  max?: number,
  sortPacks?: sortPacks,
  page?: number,
  pageCount?:number,
  user_id?: string,
  block?: boolean,
}

export type CardPackType = {
  _id: string,
  user_id: string,
  user_name: string,
  name: string,
  private: boolean,
  path: string,
  grade: number,
  shots: number,
  cardsCount: number,
  type: string,
  rating: number,
  more_id: string,
  created: string,
  updated: string,
  __v: number,
}