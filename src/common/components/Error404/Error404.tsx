import React from 'react';
import {Button, Result} from 'antd';
import {useNavigate} from 'react-router-dom';
import s from './Error404.module.css'

export const Error404 = () => {
  const navigate = useNavigate()
  return <div className={s.error404}><Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button onClick={() => {
      navigate(-1)
    }} type="primary">Back</Button>}
  /></div>
};
