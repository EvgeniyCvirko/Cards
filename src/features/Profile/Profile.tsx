import {Breadcrumb, Layout, theme} from 'antd';
import React from 'react';
import './Profile.css'
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {Navigate} from 'react-router-dom';
import {setLogout} from '../Auth/LoginReducer';

export const Profile = () => {
  console.log('ProfilePage')
  const isLogin = useAppSelector(state => state.login.isLogin)
  const dispatch = useAppDispatch()
  const logOutHandler = () => {
    dispatch(setLogout())
  }
  debugger
  const {
    token: {colorBgContainer},
  } = theme.useToken();
  if (!isLogin) {
    return <Navigate to="/login"/>
  }
  return (
    <Layout>
      <Layout.Content style={{padding: '0 50px'}}>
        <Breadcrumb style={{margin: '90px 0 25px 0 '}}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{background: colorBgContainer}}>
          Profile
          <div>
            <button onClick={logOutHandler}>LogOut</button>
          </div>
        </div>
      </Layout.Content>

    </Layout>
  )
}