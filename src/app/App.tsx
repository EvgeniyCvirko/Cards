import React, {useEffect} from 'react';
import s from './App.module.css';
import {Pages} from '../routing/Pages';
import {setIsInitialized} from './AppReducer';
import {useAppDispatch, useAppSelector} from '../utils/hooks';
import {Headers} from '../components/Headers/Headers';
import {Loading} from '../components/Loading/Loading';
import {ErrorBar} from '../components/ErrorBar/ErrorBar';

export const App = () => {
  const isInitialized = useAppSelector(state => state.app.isInitialized)
  const status = useAppSelector(state => state.app.status)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setIsInitialized())
  }, [])

  if (!isInitialized ) {
    return <Loading/>
  }
  return (
    <>
      <Headers/>
      <Pages/>
    </>
  );
}
