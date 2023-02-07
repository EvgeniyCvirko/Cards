import React from 'react'
import {UserOutlined} from '@ant-design/icons';
import {Button, Form, Input} from 'antd';
import {Navigate, NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {PATH} from '../../../routing/Pages';
import {sendEmail} from './ForgotPasswordReducer';
import s from './ForgotPassword.module.css';

export const ForgotPassword = () => {
  const dispatch = useAppDispatch()
  const status = useAppSelector(state => state.app.status)
  const onHandler = (values: any) => {
    dispatch(sendEmail(values.email))
  };
  if (status === 'succeeded') return <Navigate to={PATH.CHECK_EMAIL}/>;
  return (<>
      <Form
        name="forgotPassword"
        className={s.forgotPassword}
        onFinish={onHandler}
      >
        <Form.Item
          name="email"
          rules={[{required: true, message: 'Please input your Email!',}]}>
          <Input prefix={<UserOutlined />} placeholder="Email" type="email"/>
        </Form.Item>
        <div className={s.text}>Enter your email address and we will send you further instructions</div>
        <Form.Item>
          <div className={s.button}>
            <Button type="primary" htmlType="submit">
              Send Instructions
            </Button>
          </div>
          <div className={s.link}>
            <div className={s.text}>Did you remember your password?</div>
            <NavLink to={PATH.LOGIN}>Try logging in</NavLink>
          </div>
        </Form.Item>
      </Form>
  </>);
}