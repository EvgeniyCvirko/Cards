import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './SingIn.css'
import {useDispatch} from 'react-redux';
import {setLogin} from './LoginReducer';
import {loginParamType} from '../../api/types';

export const SingIn = () =>{
  const dispatch = useDispatch()
  const onFinish = (values:loginParamType) => {
    console.log('Received values of form: ', values);
    dispatch(setLogin(values))
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{required: true,message: 'Please input your Email!',}]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" type="email"/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{required: true,message: 'Please input your Username!',}]}>
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
}