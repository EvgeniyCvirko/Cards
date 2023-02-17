import axios from 'axios'
import {
  ChangeProfileDataType,
  ForgotDataType,
  LoginParamType,
  NewPasswordDataType,
  RegisterDataType,
  UserType
} from './types';

export const instance = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0/',
  withCredentials: true,
})

export const profileApi = {
  changeProfile(payload: ChangeProfileDataType) {
    return instance.put<UserType>('/auth/me', payload)
  },
}