import {setAppError, setAppStatus} from '../app/AppReducer';
import {ThunkAPIType} from './ErrorUtils';


export const successRequest = (ThunkApi: ThunkAPIType) => {
  ThunkApi.dispatch(setAppStatus({status:'succeeded'}))
  ThunkApi.dispatch(setAppError({error: null}))
}