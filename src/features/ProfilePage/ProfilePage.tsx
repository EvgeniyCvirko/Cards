import {Layout} from 'antd';
import React from 'react';
import {useAppSelector} from '../../utils/hooks';
import {Navigate} from 'react-router-dom';
import {Profile} from './Profile/Profile';
import {BackPage} from '../../common/components/common/BackPage/BackPage';

export const ProfilePage = () => {
  const isLogin = useAppSelector(state => state.login.isLogin)

  if (!isLogin) {
    return <Navigate to="/login"/>
  }

  return (
    <Layout>
      <Layout.Content style={{margin: '90px 0 25px 0 '}}>
          <BackPage/>
          <Profile/>
      </Layout.Content>

    </Layout>
  )
}