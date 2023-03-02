import React from 'react';
import cs from '../../../routing/Pages.module.css';
import s from './Profile.module.css'
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {setLogout} from '../../Auth/LoginReducer';
import {changeProfile} from '../ProfileReducer';
import {EditableSpan} from '../../../common/components/common/EditableSpan/EditableSpan';
import {Avatars} from '../../../common/components/Avatars/Avatars';
import {Button} from '../../../common/components/common/Button/Button';

export const Profile = () => {
  const avatar = useAppSelector(state => state.profile.user.avatar)
  const name = useAppSelector(state => state.profile.user.name)
  const email = useAppSelector(state => state.profile.user.email)
  const dispatch = useAppDispatch()
  const logOutHandler = () => {
    dispatch(setLogout())
  }
  const changeAvatarHandler = () => {
    console.log('changeFoto')
  }

  const changeNameHandler = (name: string) => {
    if (avatar) {
      const data = {name, avatar}
      dispatch(changeProfile({changeProfileData: data}))
    }
  }
  return (
    <div className={cs.block}>
      <div className={cs.title}>Personal Information</div>
      <Avatars src={avatar} mode="profile" callback={changeAvatarHandler}/>
      <EditableSpan value={name} callback={changeNameHandler}/>
      <p className={s.email}>{email}</p>
      <div className={s.button}>
        <Button name="LogOut" callback={logOutHandler}/>
      </div>
    </div>
  )
}