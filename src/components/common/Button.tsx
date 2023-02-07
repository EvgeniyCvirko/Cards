import s from './Button.module.css';
import React from 'react';

type ButtonPropsType = {
  name: string;
  callback: () => void
}
export const Button = (props: ButtonPropsType) => {
  const clickHandler = () => {
    props.callback()
  }
  return <button
    className={s.button}
    onClick={clickHandler}>
    {props.name}
  </button>
}