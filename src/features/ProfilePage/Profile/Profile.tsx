import React from 'react';
import cs from '../../../routing/Pages.module.css';
import s from './Profile.module.css'
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {setLogout} from '../../Auth/LoginReducer';
import {changeProfile} from '../ProfileReducer';
import {EditableSpan} from '../../../common/components/common/EditableSpan/EditableSpan';
import {Avatars} from '../../../common/components/Avatars/Avatars';
import {MyButton} from '../../../common/components/common/Button/MyButton';

export const Profile = () => {
  const avatar = useAppSelector(state => state.profile.user.avatar)
  const name = useAppSelector(state => state.profile.user.name)
  const email = useAppSelector(state => state.profile.user.email)
  const dispatch = useAppDispatch()
  const logOutHandler = () => {
    dispatch(setLogout())
  }
  const changeAvatarHandler = (newAvatar: string) => {
    const data = {name, avatar: newAvatar}
    dispatch(changeProfile({changeProfileData: data}))
  }

  const changeNameHandler = (name: string) => {
    const data = {name, avatar}
    dispatch(changeProfile({changeProfileData: data}))
  }
  return (
    <div className={cs.block}>
      <div className={cs.title}>Personal Information</div>
      <Avatars src={avatar} isEdite={true} changeAvatar={changeAvatarHandler}/>
      <EditableSpan value={name} callback={changeNameHandler}/>
      <p className={s.email}>{email}</p>
      <div className={s.button}>
        <MyButton name="LogOut" callback={logOutHandler}/>
      </div>
    </div>
  )
}