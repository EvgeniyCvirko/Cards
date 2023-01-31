//thunk
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {loginParamType} from '../../api/types';

export const setLogin = createAsyncThunk(
  'login/setLogin', async (param:loginParamType) => {

    try {
    } catch (error: any) {
    }
  }
)

//state
export const slice = createSlice({
  name: 'app',
  initialState: {
   } ,
  reducers: {
  },
  extraReducers: (builder) => {

  }
})
//actions
//type
