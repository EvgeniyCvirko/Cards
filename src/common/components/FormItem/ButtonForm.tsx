import s from './FormStyle.module.css';
import {Button, Form} from 'antd';
import React from 'react';

type PropsType = {
  name: string
}

export const ButtonForm = (props: PropsType) => {

  return <Form.Item>
    <div className={s.button}>
      <Button type="primary" htmlType="submit">
        {props.name}
      </Button>
    </div>
  </Form.Item>
}