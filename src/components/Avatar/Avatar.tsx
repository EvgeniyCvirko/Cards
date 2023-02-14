import React from 'react'
import icon from '../assets/profile/iconPhoto.svg'
import s from './Avatar.module.css'

type AvatarPropsType = {
  width?: string
  mode?: string
  name?: string
  src: string | undefined
}
export const Avatar = (props: AvatarPropsType) => {
  return (
    <>
      <div className={s.block}>
        <span>{props.name}</span>
        <img style={{width: props.width, marginLeft: 5}} src={props.src} alt="avatar"/>
        {props.mode === 'profile' && (
          <div className={s.circle}>
            <button className={s.btn}>
              <img className={s.icon} src={icon} alt="photo-icon"/>
            </button>
          </div>
        )}
      </div>
    </>
  )
}