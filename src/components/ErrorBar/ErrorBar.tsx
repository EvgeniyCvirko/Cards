import React from 'react'
import {Alert, Space} from 'antd';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import s from './ErrorBar.module.css'
import {setAppError} from '../../app/AppReducer';

export const ErrorBar = () => {
  const error = useAppSelector(state => state.app.error)
  const dispatch = useAppDispatch()
  if(error !== null){
    setTimeout(()=>{
      dispatch(setAppError({error: null}))
    }, 5000)
  }
  return (
    <div className={s.errorBar}>
      {
        error !== null ?
      <Space direction="vertical" style={{ width: '100%' }}>
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          closable
        />
      </Space>
          :
          null
      }
    </div>
  )
}