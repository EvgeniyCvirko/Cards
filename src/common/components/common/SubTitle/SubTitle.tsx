import React from 'react';
import s from './SubTitle.module.css'

type SubTitlePropsType = {
  title: string
}
export const SubTitle = (props: SubTitlePropsType) => {

  return <div className={s.title}>{props.title}</div>

}