import React from 'react';
import {Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import s from './Search.module.css'

type SearchPropsType = {
  width:string
}
export const Search = (props:SearchPropsType ) => {

  return <div className={s.search} style={{width: props.width}}>
    <div className={s.title}>
      Search
    </div>
    <Input placeholder="Provide your text" prefix={<SearchOutlined/>} />
  </div>
}