import {Breadcrumb, Layout, theme} from 'antd';
import React from 'react';
import './Card.css'

export const Card = () =>{
  console.log("pageCard")
  debugger
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
    <Layout.Content style={{ padding: '0 50px' }}>
    <Breadcrumb style={{ margin: '90px 0 25px 0 ' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
    <div className="site-layout-content" style={{ background: colorBgContainer }}>
      Content
    </div>
  </Layout.Content>

  </Layout>
  )
}