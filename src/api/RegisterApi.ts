import {registerDataType, } from './types';
import {instance} from './LoginApi';

export const RegisterApi = {
  register(payload: registerDataType){
    return instance.post('/auth/register', payload)
  },

}