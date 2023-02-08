import {Form, Input} from 'antd';
import React from 'react';
import {LockOutlined} from '@ant-design/icons';

type PropsType = {
  name: string
}

export const PasswordForm = (props: PropsType) => {

  return <Form.Item
    name={props.name}
    rules={[{required: true, message: 'Please input your Username!',}]}>
    <Input.Password prefix={<LockOutlined/>}
                    type={props.name}
                    placeholder={props.name}/>
  </Form.Item>
}