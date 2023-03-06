import s from './IconButton.module.css';
import React from 'react';

type ButtonPropsType = {
  icon: string;
  callback: () => void
}
export const IconButton: React.FC<ButtonPropsType> = ({icon, callback}) => {
  const clickHandler = () => {
    callback()
  }
  return <div className={s.iconButton} onClick={clickHandler}>
    <img src={icon} alt=""/>
  </div>
}