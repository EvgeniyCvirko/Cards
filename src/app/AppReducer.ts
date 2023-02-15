import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StatusType} from '../types/commonTypes';
import {setIsLogin} from '../features/Auth/LoginReducer';
import {authApi} from '../api/AuthApi';
import {setProfile} from '../features/Profile/ProfileReducer';
import {handleAsyncServerNetworkError} from '../utils/ErrorUtils';
import {successRequest} from '../utils/SuccessRequest';


export const setIsInitialized = createAsyncThunk<{ isInitialized: boolean }, undefined, { rejectValue: { error: string | undefined } }>
('app/setInitial', async (param, ThunkApi) => {
  ThunkApi.dispatch(setAppStatus({status:'loading'}))
  try {
    const res = await authApi.me()
    ThunkApi.dispatch(setIsLogin({isLogin: true}))
    ThunkApi.dispatch(setProfile( res.data))
    successRequest(ThunkApi)
    return { isInitialized: true }
  } catch (error: any) {
    return handleAsyncServerNetworkError(error, ThunkApi)
  } finally {
    return { isInitialized: true }
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
    },
    setAppError(state, action: PayloadAction<{ error: string | null }>) {
      state.error = action.payload.error
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
export const {setAppStatus, setAppError} = slice.actions
//types
export type InitialStateType = {
  status: StatusType
  error: string | null
  isInitialized: boolean,
}