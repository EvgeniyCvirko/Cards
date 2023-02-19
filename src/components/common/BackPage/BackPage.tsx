import React from 'react';
import {NavLink} from 'react-router-dom';
import {Breadcrumb} from 'antd';


export const BackPage = () => {

  return <Breadcrumb>
    <Breadcrumb.Item>
      <NavLink to={''}>Back to Packs List</NavLink>
    </Breadcrumb.Item>
  </Breadcrumb>
}