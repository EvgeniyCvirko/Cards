import React, {useEffect} from 'react';
import s from './App.module.css';
import {Pages} from '../routing/Pages';
import {setIsInitialized} from './AppReducer';
import {useAppDispatch, useAppSelector} from '../utils/hooks';
import {Loading} from '../common/components/Loading/Loading';
import {ErrorBar} from '../common/components/ErrorBar/ErrorBar';
import {Headers} from '../common/components/Headers/Headers';

export const App = () => {
  const isInitialized = useAppSelector(state => state.app.isInitialized)
  const status = useAppSelector(state => state.app.status)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setIsInitialized())
  }, [dispatch])

  if (!isInitialized ) {
    return <Loading/>
  }
  return (
    <div className={s.app}>
      <div className={s.container}>
        {status === 'loading' && <Loading/>}
        <Headers/>
        <Pages/>
        <ErrorBar/>
      </div>
    </div>
  );
}
