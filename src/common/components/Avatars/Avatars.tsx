import React from 'react'
import icon from '../assets/profile/iconPhoto.svg'
import s from './Avatars.module.css'
import {UserOutlined} from '@ant-design/icons';
import {Avatar} from 'antd';

type AvatarsPropsType = {
  mode?: string
  width?: number
  callback?: () => void
  src: string | undefined
}
export const Avatars = (props: AvatarsPropsType) => {
  let width = props.width
  if (!props.width) {
    width = 74
  }
  return (
    <>
      <div className={s.avatar}>
        {props.src === ' ' ? <Avatar size={width} icon={<UserOutlined/>}/> :
          <img style={{width: props.width + 'px', marginLeft: 5}} src={props.src} alt="avatar"/>}
        {props.mode === 'profile' && (
          <div className={s.circle}>
            <button onClick={props.callback} className={s.btn}>
              <img className={s.icon} src={icon} alt="photo-icon"/>
            </button>
          </div>
        )}
      </div>
    </>
  )
}