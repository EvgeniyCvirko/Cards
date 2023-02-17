import React from 'react';
import cs from '../../../routing/Pages.module.css';
import s from './Profile.module.css'
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {setLogout} from '../../Auth/LoginReducer';
import {Avatar} from '../../../components/Avatar/Avatar';
import {EditableSpan} from '../../../components/common/EditableSpan/EditableSpan';
import {changeProfile} from '../ProfileReducer';

export const Profile = () => {
  const avatar = useAppSelector(state => state.profile.user.avatar)
  const name = useAppSelector(state => state.profile.user.name)
  const email = useAppSelector(state => state.profile.user.email)
  const dispatch = useAppDispatch()
  const logOutHandler = () => {
      dispatch(setLogout())
  }
  console.log(avatar)
  const changeAvatarHandler = ()=>{
    console.log('changeFoto')
  }

  const changeNameHandler = (name:string) => {
    if(avatar){
      const data ={ name, avatar}
      console.log(data)
      dispatch(changeProfile({changeProfileData: data}))
    }
  }
  return (
        <div className={cs.block}>
          <div className={cs.title}>Personal Information</div>
          <Avatar src={avatar} mode='profile' callback={changeAvatarHandler}/>
          <EditableSpan value={name} callback={changeNameHandler}/>
          <p>{email}</p>
          <div>
            <button onClick={logOutHandler}>LogOut</button>
          </div>
        </div>
  )
}