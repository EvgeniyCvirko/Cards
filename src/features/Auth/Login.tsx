import React from 'react'
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input} from 'antd';
import './Login.css'
import {setLogin} from './LoginReducer';
import {loginParamType} from '../../api/types';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {NavLink} from 'react-router-dom';

export const Login = () => {
  const dispatch = useAppDispatch()
  const isLogin = useAppSelector(state => state.login.isLogin)


  const onFinish = (values: loginParamType) => {
    dispatch(setLogin({loginData: values}))
  };
  /*if(isLogin){
    return  <Navigate to='/'/>
  }*/
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
    >
      <div>Email: incubatorfriday@gmail.com</div>
      <div>Password: 123FridayIncubator123</div>
      <Form.Item
        name="email"
        rules={[{required: true, message: 'Please input your Email!',}]}>
        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email" type="email"/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{required: true, message: 'Please input your Username!',}]}>
        <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>} type="password"
                        placeholder="Password"/>
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
        Or <NavLink to="/sing-up">register now!</NavLink>
      </Form.Item>
    </Form>
  );
}