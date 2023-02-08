import {Form, Input} from 'antd';
import React from 'react';
import {UserOutlined} from '@ant-design/icons';

type PropsType = {
  name: string
}

export const InputForm = (props: PropsType) => {

  return <Form.Item
    name={props.name}
    rules={[{required: true, message: 'Please input your Email!',}]}>
    <Input prefix={<UserOutlined/>}
           type={props.name}
           placeholder={props.name}/>
  </Form.Item>
}