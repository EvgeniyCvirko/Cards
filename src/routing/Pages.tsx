import {SingIn} from '../features/Auth/SingIn';
import {Card} from '../features/Card/Card';
import {Route, Routes,Navigate } from 'react-router-dom';
import React from 'react';

export const PATH = {
  PROFILE: '/profile',
  LOGIN: '/login',
  CARD: '/card',
}

export const Pages = () => {
  return <>
    <Routes>
      <Route path={'/'} element={<Navigate to={PATH.PROFILE} />} />
      <Route path={PATH.LOGIN} element={<SingIn />} />
      <Route path={PATH.CARD} element={<Card />} />
    </Routes>
  </>
}