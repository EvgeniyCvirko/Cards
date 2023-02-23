import React from 'react';
import s from './PacksHead.module.css'
import {Button} from '../Button/Button';

type PacksHeadPropsType = {
  name: string,
  title: string,
  callback: () => void
}

export const PacksHead = (props: PacksHeadPropsType) => {
  const buttonHandler = () => {
    props.callback()
  }
  return <div className={s.head}>
    <div className={s.title}>{props.title}</div>
    <Button name={props.name} callback={buttonHandler}/>
  </div>
}