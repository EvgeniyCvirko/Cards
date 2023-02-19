import React from 'react'
import {Checkbox, Form} from 'antd';
import s from '../Auth/Login.module.css'
import cs from '../../routing/Pages.module.css'
import {setLogin} from './LoginReducer';
import {LoginParamType} from '../../api/types';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {Navigate, NavLink} from 'react-router-dom';
import {PATH} from '../../routing/Pages';
import {ButtonForm} from '../../components/FormItem/ButtonForm';
import {InputForm} from '../../components/FormItem/InputForm';
import {PasswordForm} from '../../components/FormItem/PasswordForm';

export const Login = () => {
  const dispatch = useAppDispatch()
  const isLogin = useAppSelector(state => state.login.isLogin)

  const loginHandler = (values: LoginParamType) => {
    dispatch(setLogin({loginData: values}))
  };
  if (isLogin) {
    return <Navigate to="/"/>
  }
  return (<div className={cs.block}>
    <div className={cs.title}>SING IN</div>
    <Form
      name="login"
      className={s.loginForm}
      initialValues={{
        remember: false,
      }}
      onFinish={loginHandler}
    >

      <InputForm name="email"/>
      <PasswordForm name="password"/>
      <Form.Item>
        <Form.Item name="remember"
                   valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <NavLink to={PATH.FORGOT_PASSWORD}>Forgot password</NavLink>
      </Form.Item>
      <ButtonForm name="Log in"/>
      <div className={s.link}>Or <NavLink to={PATH.REGISTER}>register now!</NavLink></div>

    </Form>
  </div>);
}