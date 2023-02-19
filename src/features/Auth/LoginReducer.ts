import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginParamType} from '../../api/types';
import {authApi} from '../../api/AuthApi';
import {setProfile} from '../ProfilePage/ProfileReducer';
import {setAppStatus} from '../../app/AppReducer';
import {handleAsyncServerNetworkError} from '../../utils/ErrorUtils';
import {successRequest} from '../../utils/SuccessRequest';

export const setLogin = createAsyncThunk<{ isLogin: boolean }, { loginData: LoginParamType }, { rejectValue: { error: string | undefined } }>(
  'login/setLogin', async (param, ThunkApi) => {
    ThunkApi.dispatch(setAppStatus({status:'loading'}))
    try {
    const res = await authApi.login(param.loginData)
      successRequest(ThunkApi)
      ThunkApi.dispatch(setProfile(res.data))
      return {isLogin: true}
    } catch (error) {
     return handleAsyncServerNetworkError(error, ThunkApi)
    }
  }
)

export const setLogout = createAsyncThunk<{ isLogin: boolean }, undefined, { rejectValue: { error: string | undefined } }>(
  'login/setLogout', async (param, ThunkApi) => {
    ThunkApi.dispatch(setAppStatus({status:'loading'}))
    try {
      const res = await authApi.logout()
      successRequest(ThunkApi)
      return {isLogin: false}
    } catch (error: any) {
      return handleAsyncServerNetworkError(error, ThunkApi)
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
