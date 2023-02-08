import React, {useEffect} from 'react';
import './App.css';
import {Pages} from '../routing/Pages';
import {setIsInitialized} from './AppReducer';
import {useAppDispatch} from '../utils/hooks';
import {Headers} from '../components/Headers/Headers';

export const App = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setIsInitialized())
  }, [])

  return (
    <>
      <Headers/>
      <Pages/>
    </>
  );
}
