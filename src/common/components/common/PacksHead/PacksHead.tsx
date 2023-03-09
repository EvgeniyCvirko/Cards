import React from 'react';
import s from './PacksHead.module.css'
import {Button} from 'antd';
import {MenuPacks} from '../../MenuPacks/MenuPacks';

type PacksHeadPropsType = {
  name: string,
  title: string,
  callback: () => void
  menu?: boolean
}

export const PacksHead: React.FC<PacksHeadPropsType> = ({name, title, callback, menu}) => {
  const buttonHandler = () => {
    callback()
  }
  return <div className={s.head}>
    <div className={s.titleBlock}>
      <div className={s.title}>{title}</div>
      {menu && <MenuPacks/>}
    </div>
    <Button type="primary" onClick={buttonHandler} size="large">{name}</Button>
  </div>
}