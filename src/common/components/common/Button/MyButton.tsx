import s from './MyButton.module.css';
import React from 'react';

type ButtonPropsType = {
  name: string;
  callback: () => void
}
export const MyButton = (props: ButtonPropsType) => {
  const clickHandler = () => {
    props.callback()
  }
  return <button
    className={s.button}
    onClick={clickHandler}>
    {props.name}
  </button>
}