import React from 'react'
import {UserOutlined} from '@ant-design/icons';
import {Button, Form, Input} from 'antd';
import './ForgotPassword.css'
import {Navigate, NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {PATH} from '../../../routing/Pages';
import {sendEmail} from './ForgotPasswordReducer';
import {CheckEmail} from '../CheckEmail/CheckEmail';

export const ForgotPassword = () => {
  const dispatch = useAppDispatch()
  const status = useAppSelector(state => state.app.status)
  const isSend = useAppSelector(state => state.forgotPassword.isSend)

  const onFinish = (values: any) => {
    console.log(values.email)
    dispatch(sendEmail(values.email))
  };
  if (status === 'succeeded') return <Navigate to={PATH.CHECK_EMAIL}/>;
  return (<>
    {!isSend ?
      (<Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
      >
        <div>Forgot your password?</div>
        <Form.Item
          name="email"
          rules={[{required: true, message: 'Please input your Email!',}]}>
          <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email" type="email"/>
        </Form.Item>
        <div>Enter your email address and we will send you further instructions</div>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Send Instructions
          </Button>
          <div>Did you remember your password?</div>
          <NavLink to={PATH.LOGIN}>Try logging in</NavLink>
        </Form.Item>
      </Form>)
      :
      (<CheckEmail/>)
    }
  </>);
}