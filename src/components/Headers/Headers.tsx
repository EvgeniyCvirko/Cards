import React from 'react';
import s from './Headers.module.css'
import {NavLink, useNavigate} from 'react-router-dom'
import logo from '../assets/logo.svg'
import {useAppSelector} from '../../utils/hooks';
import {Avatar} from '../Avatar/Avatar';
import {PATH} from '../../routing/Pages';
import {Button} from '../common/Button';


export const Headers = () => {
  const isLogin = useAppSelector(state => state.login.isLogin)
  const navigate = useNavigate()
  const loginHandler = () => {
    navigate(PATH.LOGIN)
  }
  return (<>
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.incubator}>
            <NavLink to={'/'}>
              <img src={logo} alt="logo"/>
            </NavLink>
          </div>
          {isLogin ? <Avatar name={'user.name'} width={'36px'}/> :
            <div className={s.button}><Button name="Sign In" callback={loginHandler}/></div>
          }
        </div>
      </div>
    </header>
  </>)
};

