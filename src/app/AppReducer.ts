import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {LoginApi} from '../api/LoginApi';
import {StatusType} from '../types/commonTypes';
import {setIsLogin} from '../features/Auth/LoginReducer';


export const setIsInitialized = createAsyncThunk<{ isInitialized: boolean }, undefined, { rejectValue: { error: string | undefined } }>
('app/setInitial', async (param, ThunkApi) => {
  const res = await LoginApi.me()
  try {
    ThunkApi.dispatch(setIsLogin({isLogin: true}))
    return {isInitialized: true}
  } catch (error: any) {
    return ThunkApi.rejectWithValue({error: res.data.error})
  }
})

export const slice = createSlice({
  name: 'app',
  initialState: {
    status: 'idle',
    isInitialized: false,
    error: null
  } as InitialStateType,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setIsInitialized.fulfilled, (state, action) => {
      state.isInitialized = action.payload.isInitialized
    })
  }
})

export const appReducer = slice.reducer

export type InitialStateType = {
  status: StatusType
  error: string | null
  isInitialized: boolean,
}