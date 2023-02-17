import {Breadcrumb, Layout} from 'antd';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {Navigate} from 'react-router-dom';
import {setLogout} from '../Auth/LoginReducer';
import {Profile} from './Profile/Profile';

export const ProfilePage = () => {
  const isLogin = useAppSelector(state => state.login.isLogin)
  const profile = useAppSelector(state => state.profile)
  const dispatch = useAppDispatch()
  const logOutHandler = () => {
    dispatch(setLogout())
  }

  if (!isLogin) {
    return <Navigate to="/login"/>
  }
  return (
    <Layout>
      <Layout.Content style={{padding: '0 50px'}}>
        <Breadcrumb style={{margin: '90px 0 25px 0 '}}>
          <Breadcrumb.Item>Back to Packs List</Breadcrumb.Item>
        </Breadcrumb>
          <Profile/>
      </Layout.Content>

    </Layout>
  )
}