import {Card} from '../features/Card/Card';
import {Navigate, Route, Routes} from 'react-router-dom';
import React from 'react';
import {Register} from '../features/Register/Register';
import {Login} from '../features/Auth/Login';
import {Profile} from '../features/Profile/Profile';
import {ForgotPassword} from '../features/Auth/ForgotPassword/ForgotPassword';
import {CheckEmail} from '../features/Auth/CheckEmail/CheckEmail';

export const PATH = {
  PROFILE: '/profile',
  LOGIN: '/login',
  REGISTER: '/sing-up',
  CARD: '/card',
  FORGOT_PASSWORD: '/forgotPassword',
  CHECK_EMAIL: '/checkEmail',
}

export const Pages = () => {

  return <>
    <Routes>
      <Route path={'/'} element={<Navigate to={PATH.PROFILE}/>}/>
      <Route path={PATH.LOGIN} element={<Login/>}/>
      <Route path={PATH.REGISTER} element={<Register/>}/>
      <Route path={PATH.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
      <Route path={PATH.CHECK_EMAIL} element={<CheckEmail/>}/>
      <Route path={PATH.CARD} element={<Card/>}/>
      <Route path={PATH.PROFILE} element={<Profile/>}/>
    </Routes>
  </>
}