import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StatusType} from '../types/commonTypes';
import {setIsLogin} from '../features/Auth/LoginReducer';
import {authApi} from '../api/AuthApi';


export const setIsInitialized = createAsyncThunk<{ isInitialized: boolean }, undefined, { rejectValue: { error: string | undefined } }>
('app/setInitial', async (param, ThunkApi) => {
  const res = await authApi.me()
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
  reducers: {
    setAppStatus(state, action: PayloadAction<{ status: StatusType }>) {
      state.status = action.payload.status
    }
  },
  extraReducers: (builder) => {
    builder.addCase(setIsInitialized.fulfilled, (state, action) => {
      state.isInitialized = action.payload.isInitialized
    })
  }
})

export const appReducer = slice.reducer
//action
export const {setAppStatus} = slice.actions
//types
export type InitialStateType = {
  status: StatusType
  error: string | null
  isInitialized: boolean,
}