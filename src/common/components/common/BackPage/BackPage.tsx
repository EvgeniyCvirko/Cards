import React from 'react';
import {NavLink} from 'react-router-dom';
import {Breadcrumb} from 'antd';
import {PATH} from '../../../../routing/Pages';


export const BackPage = () => {

  return <Breadcrumb>
    <Breadcrumb.Item>
      <NavLink to={PATH.PACKS}>Back to Packs List</NavLink>
    </Breadcrumb.Item>
  </Breadcrumb>
}