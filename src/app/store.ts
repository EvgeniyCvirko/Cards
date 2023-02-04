import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {appReducer} from './AppReducer';
import {loginReducer} from '../features/Auth/LoginReducer';
import {forgotPasswordReducer} from '../features/Auth/ForgotPassword/ForgotPasswordReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  forgotPassword: forgotPasswordReducer,
})
export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})


// @ts-ignore
window.store = store