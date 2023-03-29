import React, {ChangeEvent, useRef, useState} from 'react'
import icon from '../assets/profile/iconPhoto.svg'
import s from './Avatars.module.css'
import {UserOutlined} from '@ant-design/icons';
import {Avatar} from 'antd';
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {convertFileToBase64} from '../../../utils/convertFileToBase64';
import {setAppError} from '../../../app/AppReducer';

type AvatarsPropsType = {
  isEdite: boolean
  width?: number
  changeAvatar?: (file64: string) => void
  src: string | undefined
}
export const Avatars: React.FC<AvatarsPropsType> = React.memo(({isEdite, width, changeAvatar, src}) => {
  const avatar = useAppSelector(state => state.profile.user.avatar)
  const dispatch = useAppDispatch()
  const [isAvaBroken, setIsAvaBroken] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const selectFileHandler = () => {
    inputRef && inputRef.current?.click();

  };
  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]
      if (file.size < 4000000) {
        convertFileToBase64(file, (file64: string) => {
          if (changeAvatar) changeAvatar(file64)
        })
      } else {
        dispatch(setAppError({error: 'File too large'}))
      }
    }
  }

  const errorHandler = () => {
    setIsAvaBroken(true)
    dispatch(setAppError({error: 'Image is broken'}))
  }

  if (!width) {
    width = 74
  }
  return (
    <>
      <div className={s.avatar}>
        {src === ' ' ? <Avatar size={width} icon={<UserOutlined/>}/> :
          <img src={isAvaBroken ? icon : avatar}
               style={{width: width + 'px', marginLeft: 5}}
               onError={errorHandler}
               alt="avatar"
          />}
        {isEdite && (
          <div className={s.circle}>
            <label>
              <input type="file"
                     ref={inputRef}
                     onChange={uploadHandler}
                     style={{display: 'none'}}
              />
              <button onClick={selectFileHandler} className={s.btn}>
                <img className={s.icon} src={icon} alt="photo-icon"/>
              </button>
            </label>
          </div>
        )}
      </div>
    </>
  )
})