import axios from 'axios'
import {ForgotDataType, LoginParamType, NewPasswordDataType, RegisterDataType} from './DataTypes';
import {UserType} from './ResponceTypes';


export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL ||'https://neko-back.herokuapp.com/2.0/',
  withCredentials: true,
})

export const authApi = {
  login(payload: LoginParamType) {
    return instance.post<UserType>('/auth/login', payload)
  },
  logout() {
    return instance.delete<{ info: string, error: string }>('/auth/me')
  },
  me() {
    return instance.post<UserType>('/auth/me')
  }
}

export const registerApi = {
  register(payload: RegisterDataType) {
    return instance.post('/auth/register', payload)
  },
}

export const repairPassword = {
  forgotPassword(payload: ForgotDataType) {
    return instance.post('/auth/forgot', payload)
  },
  setNewPassword(payload: NewPasswordDataType) {
    return instance.post('/auth/set-new-password', payload)
  }
}