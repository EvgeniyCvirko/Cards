import React from 'react'
import {LockOutlined} from '@ant-design/icons';
import {Form, Input} from 'antd';
import s from './Register.module.css'
import {RegisterDataType} from '../../api/types';
import {useAppDispatch} from '../../utils/hooks';
import {NavLink} from 'react-router-dom';
import {setRegister} from './RegisterThunk';
import {PATH} from '../../routing/Pages';
import {ButtonForm} from '../../components/FormItem/ButtonForm';
import {InputForm} from '../../components/FormItem/InputForm';
import {PasswordForm} from '../../components/FormItem/PasswordForm';
import cs from '../../routing/Pages.module.css';

export const Register = () => {
  const dispatch = useAppDispatch()
  const onFinish = (values: RegisterDataType) => {
    dispatch(setRegister(values))
  };

  return (
    <div className={cs.block}>
      <div className={cs.title}>SING UP</div>
      <Form
        name="normal_login"
        className={s.registerForm}
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
      >
        <InputForm name="email"/>
        <PasswordForm name="password"/>
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
        <ButtonForm name="Log in"/>
        <div className={s.link}>
          <p>Already have an account?</p>
          <NavLink to={PATH.LOGIN}>Sing In!</NavLink>
        </div>
      </Form>
    </div>
  );
}