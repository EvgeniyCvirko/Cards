import React from 'react'
import {createAsyncThunk} from '@reduxjs/toolkit';
import {RegisterDataType} from '../../api/types';
import {setLogin} from '../Auth/LoginReducer';
import {registerApi} from '../../api/AuthApi';

export const setRegister = createAsyncThunk("register/setRegister", async (param:RegisterDataType, ThinkApi) =>{
  const res = await registerApi.register(param)
  try{
    ThinkApi.dispatch(setLogin({loginData:{...param, rememberMe:false}}))
  }catch (e) {

  }
})