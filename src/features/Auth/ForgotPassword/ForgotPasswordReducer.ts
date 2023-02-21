import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {repairPassword} from '../../../api/AuthApi';
import {letter} from './letter';
import {setAppStatus} from '../../../app/AppReducer';
import {handleAsyncServerNetworkError} from '../../../utils/ErrorUtils';
import {successRequest} from '../../../utils/SuccessRequest';
import {NewPasswordDataType} from '../../../api/DataTypes';

export const sendEmail = createAsyncThunk<{ email: string }, string, { rejectValue: { error: string | undefined } }>(
  'forgotPassword/sendEmail', async (email: string, ThunkApi) => {
    const forgotForm = {
      email,
      from: 'test-front-admin <ai73a@yandex.by>',
      message: letter
    }

    ThunkApi.dispatch(setAppStatus({status: 'loading'}))
    try {
      const res = await repairPassword.forgotPassword(forgotForm)
      successRequest(ThunkApi)
      return {email}
    } catch (error) {
      return handleAsyncServerNetworkError(error, ThunkApi)
    }
  }
)

export const sendNewPassword = createAsyncThunk<undefined, { password: string, resetPasswordToken: string }, { rejectValue: { error: string | undefined } }>(
  'forgotPassword/sendNewPassword', async (param: NewPasswordDataType, ThunkApi) => {
    ThunkApi.dispatch(setAppStatus({status: 'loading'}))
    try {
      const res = await repairPassword.setNewPassword(param)
      successRequest(ThunkApi)
    } catch (error) {
      return handleAsyncServerNetworkError(error, ThunkApi)
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