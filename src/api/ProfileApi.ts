import axios from 'axios'
import {ChangeProfileDataType, ResponseUser} from './types';

export const instance = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0/',
  withCredentials: true,
})

export const profileApi = {
  changeProfile(payload: ChangeProfileDataType) {
    return instance.put<ResponseUser>('/auth/me', payload)
  },
}