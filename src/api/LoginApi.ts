import axios, { AxiosResponse } from 'axios'
import {loginParamType, UserType} from './types';

export const instance = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0/',
  withCredentials: true,
})

export const LoginApi = {
  login(payload: loginParamType){
    return instance.post<UserType>('/auth/login', payload)
  }
}