import React from 'react';
import s from './MenuOptions.module.css'

type MenuOptionsPropsType = {
  title: string,
  icon: any
  action: () => void
}
export const MenuOptions: React.FC<MenuOptionsPropsType> = ({title, icon, action}) => {

  return <div onClick={action} className={s.menu}>
    <div className={s.item}>{icon}</div>
    <span className={s.item}>{title}</span>
  </div>
}