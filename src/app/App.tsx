import React from 'react';
import './App.css';
import {Headers} from '../components/Headers/Headers';
import { Pages } from '../routing/Pages';

export const App = () => {

  return (
    <>
      <Headers/>
      <Pages/>
    </>
  );
}
