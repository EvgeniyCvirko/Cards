import {Cards} from '../features/Card/Cards';
import {Navigate, Route, Routes} from 'react-router-dom';
import React from 'react';
import {Register} from '../features/Register/Register';
import {Login} from '../features/Auth/Login';
import {ProfilePage} from '../features/ProfilePage/ProfilePage';
import {ForgotPassword} from '../features/Auth/ForgotPassword/ForgotPassword';
import {CheckEmail} from '../features/Auth/CheckEmail/CheckEmail';
import {CreateNewPassword} from '../features/Auth/CreateNewPassword/CreateNewPassword';
import {Packs} from '../features/Packs/Packs';
import {Error404} from '../common/components/Error404/Error404';
import {LearnPage} from '../features/LearnPage/LearnPage';


export const PATH = {
  PROFILE: '/profile',
  LOGIN: '/login',
  REGISTER: '/sing-up',
  CARD: '/card',
  FORGOT_PASSWORD: '/forgotPassword',
  CREATE_NEW_PASSWORD: '/createNewPassword/:token',
  CHECK_EMAIL: '/checkEmail',
  PACKS: '/pack',
  LEARN: '/learn',
  ERROR404: '*'
}

export const Pages = () => {

  return <>
    <Routes>
      <Route path={'/'} element={<Navigate to={PATH.PROFILE}/>}/>
      <Route path={PATH.LOGIN} element={<Login/>}/>
      <Route path={PATH.REGISTER} element={<Register/>}/>
      <Route path={PATH.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
      <Route path={PATH.CREATE_NEW_PASSWORD} element={<CreateNewPassword/>}/>
      <Route path={PATH.CHECK_EMAIL} element={<CheckEmail/>}/>
      <Route path={PATH.CARD} element={<Cards/>}/>
      <Route path={PATH.PROFILE} element={<ProfilePage/>}/>
      <Route path={PATH.PACKS} element={<Packs/>}/>
      <Route path={PATH.LEARN} element={<LearnPage/>}/>
      <Route path={PATH.ERROR404} element={<Error404/>}/>
    </Routes>
  </>
}