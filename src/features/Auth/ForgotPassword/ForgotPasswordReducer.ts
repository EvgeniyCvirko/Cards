//thunk
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {repairPassword} from '../../../api/AuthApi';
import {letter} from './letter';
import {setAppStatus} from '../../../app/AppReducer';
import {NewPasswordDataType} from '../../../api/types';

export const sendEmail = createAsyncThunk<{ email: string }, string, { rejectValue: { error: string | undefined } }>(
  'login/setLogout', async (email: string, ThunkApi) => {
    const forgotForm = {
      email,
      from: 'test-front-admin <ai73a@yandex.by>',
      message: letter
    }
    ThunkApi.dispatch(setAppStatus({status: 'loading'}))
    const res = await repairPassword.forgotPassword(forgotForm)
    try {
      ThunkApi.dispatch(setAppStatus({status: 'succeeded'}))
      return {email}
    } catch (e) {
      return ThunkApi.rejectWithValue({error: res.data.error})
    }
  }
)

export const sendNewPassword = createAsyncThunk<undefined, { password: string, resetPasswordToken: string }, { rejectValue: { error: string | undefined } }>(
  'login/setLogout', async (param: NewPasswordDataType, ThunkApi) => {
    ThunkApi.dispatch(setAppStatus({status: 'loading'}))
    const res = await repairPassword.setNewPassword(param)
    try {
      ThunkApi.dispatch(setAppStatus({status: 'succeeded'}))
    } catch (e) {
      return ThunkApi.rejectWithValue({error: res.data.error})
    }
  }
)

//state
export const slice = createSlice({
  name: 'forgotPassword ',
  initialState: {
    email: '',
  } as InitialStateType,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendEmail.fulfilled, (state, action) => {
      state.email = action.payload.email
    })
  }
})

export const forgotPasswordReducer = slice.reducer
//actions
//type
type InitialStateType = {
  email: string,
}