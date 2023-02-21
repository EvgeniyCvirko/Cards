import React from 'react'
import {createAsyncThunk} from '@reduxjs/toolkit';
import {setLogin} from '../Auth/LoginReducer';
import {registerApi} from '../../api/AuthApi';
import {RegisterDataType} from '../../api/DataTypes';

export const setRegister = createAsyncThunk("register/setRegister", async (param:RegisterDataType, ThinkApi) =>{
  const res = await registerApi.register(param)
  try{
    ThinkApi.dispatch(setLogin({loginData:{...param, rememberMe:false}}))
  }catch (e) {

  }
})