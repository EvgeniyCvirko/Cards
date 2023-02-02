//thunk
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {loginParamType} from '../../api/types';
import {LoginApi} from '../../api/LoginApi';

export const setLogin = createAsyncThunk<{ isLogin: boolean }, { loginData: loginParamType }, { rejectValue: { error: string | undefined } }>(
  'login/setLogin', async (param, ThunkApi) => {
    const res = await LoginApi.login(param.loginData)
    try {
      return {isLogin: true}
    } catch (error: any) {
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

    })
  }
})

export const loginReducer = slice.reducer
//actions
export const {setIsLogin} = slice.actions
//type
