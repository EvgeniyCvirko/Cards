import axios, {AxiosError} from 'axios';
import {setAppError, setAppStatus} from '../app/AppReducer';

export type ThunkAPIType = {
  dispatch: (action: any) => any
  rejectWithValue: Function
}

export const handleAsyncServerNetworkError = (error: unknown | AxiosError<{ error: string }>, ThunkApi: ThunkAPIType, showError= true) => {
  if (axios.isAxiosError(error)){
    if (showError){
      const err = error.response?.data ? error.response.data.error : error.message
      ThunkApi.dispatch(setAppError({error: err}))
    }
    ThunkApi.dispatch(setAppStatus({status:'failed'}))
    return ThunkApi.rejectWithValue({error: error?.message})
  }
}