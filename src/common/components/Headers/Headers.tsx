import React from 'react';
import s from './Headers.module.css'
import {NavLink, useNavigate} from 'react-router-dom'
import logo from '../assets/logo.svg'
import {Avatars} from '../Avatars/Avatars';
import {Button} from '../common/Button/Button';
import {useAppSelector} from '../../../utils/hooks';
import {PATH} from '../../../routing/Pages';


export const Headers = () => {
  const isLogin = useAppSelector(state => state.login.isLogin)
  const name = useAppSelector(state => state.profile.user.name)
  const avatar = useAppSelector(state => state.profile.user.avatar)
  const navigate = useNavigate()
  const loginHandler = () => {
    navigate(PATH.LOGIN)
  }
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
            <NavLink to={PATH.PROFILE}>
              <div className={s.avatar}>
                <p>{name}</p>
                <Avatars src={avatar} width={36}/>
              </div>
            </NavLink>
            :
            <div className={s.button}><Button name="Sign In" callback={loginHandler}/></div>
          }
        </div>
      </div>
    </header>
  </>)
};

