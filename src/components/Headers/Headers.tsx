import React from 'react';
import { Layout } from 'antd';
import './Headers.css'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logo.svg'



export const Headers = () => {


  return(<Layout.Header>
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <div className="incubator">
            <NavLink to={'/'}>
              <img src={logo} alt="logo"/>
            </NavLink>
          </div>
          {/*{isLoggedIn && <Avatar name={user.name} width={'36px'} />}*/}
        </div>
      </div>
    </header>
  </Layout.Header>)
};

