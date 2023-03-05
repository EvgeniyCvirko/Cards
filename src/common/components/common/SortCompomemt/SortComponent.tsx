import React from 'react';
import s from './SortComponent.module.css'
import {ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';
import {Button} from 'antd';

type SortComponentPropsType = {
  up: boolean
  callback: (up: boolean) => void
}
export const SortComponent: React.FC<SortComponentPropsType> = ({callback, up}) => {
  const changeSortHandler = () => {
    callback(!up)
  }

  return <div className={s.sortComponent}>
    <div> Last Updated</div>
    {up ?
      <Button type="dashed" shape="circle" onClick={changeSortHandler} size="small" icon={< ArrowDownOutlined/>}/>
      :
      <Button type="dashed" shape="circle" onClick={changeSortHandler} size="small" icon={< ArrowUpOutlined/>}/>
    }
  </div>
}