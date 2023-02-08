import React from 'react'
import {Form} from 'antd';
import {Navigate, NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {PATH} from '../../../routing/Pages';
import {sendEmail} from './ForgotPasswordReducer';
import s from './ForgotPassword.module.css';
import {ButtonForm} from '../../../components/FormItem/ButtonForm';
import {InputForm} from '../../../components/FormItem/InputForm';

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
      <InputForm name="email"/>
      <div className={s.text}>Enter your email address and we will send you further instructions</div>
      <ButtonForm name="Send Instructions"/>
      <div className={s.link}>
        <div className={s.text}>Did you remember your password?</div>
        <NavLink to={PATH.LOGIN}>Try logging in</NavLink>
      </div>
    </Form>
  </>);
}