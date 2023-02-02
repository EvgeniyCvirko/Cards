import React from 'react'
import {createAsyncThunk} from '@reduxjs/toolkit';
import {RegisterApi} from '../../api/RegisterApi';
import {registerDataType} from '../../api/types';
import {setLogin} from '../Auth/LoginReducer';

export const setRegister = createAsyncThunk("register/setRegister", async (param:registerDataType, ThinkApi) =>{
  const res = await RegisterApi.register(param)
  try{
    ThinkApi.dispatch(setLogin({loginData:{...param, rememberMe:false}}))
  }catch (e) {

  }
})