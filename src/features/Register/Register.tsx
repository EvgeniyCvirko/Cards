import React from 'react'
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Form, Input} from 'antd';
import s from './Register.module.css'
import {RegisterDataType} from '../../api/types';
import {useAppDispatch} from '../../utils/hooks';
import {NavLink} from 'react-router-dom';
import {setRegister} from './RegisterThunk';
import {PATH} from '../../routing/Pages';

export const Register = () => {
  const dispatch = useAppDispatch()
  const onFinish = (values: RegisterDataType) => {
    dispatch(setRegister(values))
  };

  return (
    <Form
      name="normal_login"
      className={s.registerForm}
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{required: true, message: 'Please input your Email!',}]}>
        <Input prefix={<UserOutlined />} placeholder="Email" type="email"/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{required: true, message: 'Please input your Username!',}]}>
        <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password"/>
      </Form.Item>
      <Form.Item
        name="confirm"
        rules={[{required: true, message: 'Please input your Username!',},
          ({getFieldValue}) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}>
        <Input.Password prefix={<LockOutlined/>} type="password" placeholder="Confirm password"/>
      </Form.Item>
      <Form.Item>
        <div className={s.button}>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </div>
        <div className={s.link}>
          <p>Already have an account?</p>
          <NavLink to={PATH.LOGIN}>Sing In!</NavLink>
        </div>
      </Form.Item>
    </Form>
  );
}