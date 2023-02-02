import React from 'react';
import './Headers.css'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logo.svg'
import {useAppSelector} from '../../utils/hooks';
import {Avatar} from '../Avatar/Avatar';



export const Headers = () => {
const isLogin = useAppSelector(state => state.login.isLogin)

  return(<>
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <div className="incubator">
            <NavLink to={'/'}>
              <img src={logo} alt="logo"/>
            </NavLink>
          </div>
          {isLogin && <Avatar name={'user.name'} width={'36px'} />}
        </div>
      </div>
    </header>
  </>)
};

