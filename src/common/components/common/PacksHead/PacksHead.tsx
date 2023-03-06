import React from 'react';
import s from './PacksHead.module.css'
import menu from '../../assets/packs/menu.png'
import learn from '../../assets/packs/learn.png'
import {Button} from 'antd';
import {IconButton} from '../IconButton/IconButton';

type PacksHeadPropsType = {
  name: string,
  title: string,
  callback: () => void
  own?: boolean
}

export const PacksHead = (props: PacksHeadPropsType) => {
  const buttonHandler = () => {
    props.callback()
  }
  const deletePackParam = () => {
    console.log('delete')
  }
  return <div className={s.head}>
    <div className={s.titleBlock}>
      <div className={s.title}>{props.title}</div>
      <IconButton icon={learn} callback={deletePackParam}/>
      <IconButton icon={menu} callback={deletePackParam}/>
    </div>
    <Button type="primary" onClick={buttonHandler} size="large">{props.name}</Button>
  </div>
}