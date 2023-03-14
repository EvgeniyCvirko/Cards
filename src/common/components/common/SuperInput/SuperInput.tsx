import React, {useState} from 'react';
import s from './SuperInput.module.css'
import {Radio, RadioChangeEvent, Space} from 'antd';

type SuperInputPropsType = {
  options: {id:number, value: number, name: string} [],
  callback: (rate:number) => void,
  grade: number
}
export const SuperInput: React.FC<SuperInputPropsType> = ({options,callback,grade}) => {
  const [value, setValue] = useState<number>(grade)
  const onChange = (event: RadioChangeEvent) => {
    setValue(event.target.value);
    callback(event.target.value)
  }
  return  <Radio.Group onChange={onChange} value={value}>
    <Space  direction="vertical">
      {options.map(el => {
      return <Radio key={el.id} className={s.superRadio} value={el.value}>{el.name}</Radio>
      })}
    </Space>
  </Radio.Group>
}