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

export const PacksHead: React.FC<PacksHeadPropsType> = React.memo(({name, title, callback, menu}) => {
  const buttonHandler = () => {
    callback()
  }
  return <div className={s.head}>
    <div className={s.titleBlock}>
      <h1 className={s.title}>{title}</h1>
      {menu && <MenuPacks/>}
    </div>
    <Button type="primary" onClick={buttonHandler} size="large">{name}</Button>
  </div>
})