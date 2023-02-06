import React from 'react'
import {UserOutlined} from '@ant-design/icons';
import {Button, Form, Input} from 'antd';
import './CreateNewPassword.css'
import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../../utils/hooks';
import {sendNewPassword} from '../ForgotPassword/ForgotPasswordReducer';

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

  return (<>
    <Form
      name="createPassword"
      className="login-form"
      onFinish={setNewPasswordHandler}
    >
      <div>Create new password</div>
      <Form.Item
        name="password"
        rules={[{required: true, message: 'Please input your Email!',}]}>
        <Input.Password prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Password"
                        type="password"/>
      </Form.Item>
      <div>Create new password and we will send you further instructions to email</div>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Create new password
        </Button>
      </Form.Item>
    </Form>
  </>);
}