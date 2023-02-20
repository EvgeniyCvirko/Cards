import React from 'react';
import {Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';


export const Search = () => {

  return <Input placeholder="Provide your text" prefix={<SearchOutlined/>}/>
}