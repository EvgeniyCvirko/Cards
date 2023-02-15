import React from 'react'
import {UserOutlined} from '@ant-design/icons';
import {Form, Input} from 'antd';
import s from './CreateNewPassword.module.css'
import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../../utils/hooks';
import {sendNewPassword} from '../ForgotPassword/ForgotPasswordReducer';
import {ButtonForm} from '../../../components/FormItem/ButtonForm';
import cs from '../../../routing/Pages.module.css';

export const CreateNewPassword = () => {
  const dispatch = useAppDispatch()
  const {token} = useParams()

  const setNewPasswordHandler = (values: any) => {
    const data = {
      password: values.password,
      resetPasswordToken: token as string,
    }
    dispatch(sendNewPassword(data))
  };

  return (
    <div className={cs.block}>
      <h1 className={cs.title}>Create new password</h1>
      <Form
        name="createPassword"
        className={s.createPassword}
        onFinish={setNewPasswordHandler}
      >
        <Form.Item
          name="password"
          rules={[{required: true, message: 'Please input your Email!',}]}>
          <Input.Password prefix={<UserOutlined/>} placeholder="Password"
                          type="password"/>
        </Form.Item>
        <div className={s.text}>Create new password and we will send you further instructions to email</div>
        <ButtonForm name="Create new password"/>
      </Form>
    </div>
  );
}