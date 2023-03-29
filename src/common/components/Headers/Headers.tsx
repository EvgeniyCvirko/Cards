import React, {useState} from 'react';
import s from './Headers.module.css'
import {NavLink, useNavigate} from 'react-router-dom'
import logo from '../assets/logo.svg'
import {Avatars} from '../Avatars/Avatars';
import {MyButton} from '../common/Button/MyButton';
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {PATH} from '../../../routing/Pages';
import {LogoutOutlined, UserOutlined} from '@ant-design/icons';
import {Popover} from 'antd';
import {MenuOptions} from '../common/MenuOptions/MenuOptions';
import {setLogout} from '../../../features/Auth/LoginReducer';

export const Headers = () => {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false);
  const isLogin = useAppSelector(state => state.login.isLogin)
  const name = useAppSelector(state => state.profile.user.name)
  const avatar = useAppSelector(state => state.profile.user.avatar)
  const navigate = useNavigate()
  const loginHandler = () => {
    navigate(PATH.LOGIN)
  }
  const moveToProfile = () => {
    navigate(PATH.PROFILE)
  }
  const logOutHandler = () => {
    dispatch(setLogout())
  }
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  const content = (
    <div>
      <MenuOptions title="Profile" icon={<UserOutlined/>} action={moveToProfile}/>
      <MenuOptions title="LogOut" icon={<LogoutOutlined/>} action={logOutHandler}/>
    </div>
  )
  return (<>
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.incubator}>
            <NavLink to={PATH.PROFILE}>
              <img src={logo} alt="logo"/>
            </NavLink>
          </div>
          {isLogin ?
            <div className={s.avatar} onClick={() => setOpen(!open)}>
              <Popover content={content} trigger="click" open={open} onOpenChange={handleOpenChange}>
                <p>{name}</p>
              </Popover>
              <Avatars isEdite={false} src={avatar} width={36}/>
            </div>

            :
            <div className={s.button}><MyButton name="Sign In" callback={loginHandler}/></div>
          }
        </div>
      </div>
    </header>
  </>)
};

