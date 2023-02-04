import React, {useEffect} from 'react';
import './App.css';
import {Headers} from '../components/Headers/Headers';
import {Pages} from '../routing/Pages';
import {setIsInitialized} from './AppReducer';
import {useAppDispatch} from '../utils/hooks';

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
