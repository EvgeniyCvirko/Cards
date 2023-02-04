//thunk
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginParamType} from '../../api/types';
import {authApi} from '../../api/AuthApi';

export const setLogin = createAsyncThunk<{ isLogin: boolean }, { loginData: LoginParamType }, { rejectValue: { error: string | undefined } }>(
  'login/setLogin', async (param, ThunkApi) => {
    const res = await authApi.login(param.loginData)
    try {
      return {isLogin: true}
    } catch (error: any) {
      return ThunkApi.rejectWithValue({error: res.data.error})
    }
  }
)

export const setLogout = createAsyncThunk<{ isLogin: boolean }, undefined, { rejectValue: { error: string | undefined } }>(
  'login/setLogout', async (param, ThunkApi) => {
    const res = await authApi.logout()
    try {
      return {isLogin: false}
    } catch (e) {
      return ThunkApi.rejectWithValue({error: res.data.error})
    }
  }
)

//state
export const slice = createSlice({
  name: 'login',
  initialState: {
    isLogin: false,
  },
  reducers: {
    setIsLogin(state, action: PayloadAction<{ isLogin: boolean }>) {
      state.isLogin = action.payload.isLogin
    }
  },
  extraReducers: (builder) => {
    builder.addCase(setLogin.fulfilled, (state, action) => {
      state.isLogin = action.payload.isLogin

    });
    builder.addCase(setLogout.fulfilled, (state, action) => {
      state.isLogin = action.payload.isLogin
    })
  }
})

export const loginReducer = slice.reducer
//actions
export const {setIsLogin} = slice.actions
//type
