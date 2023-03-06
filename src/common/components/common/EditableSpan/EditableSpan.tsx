import s from './EditableSpan.module.css';
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Input} from 'antd';
import {EditOutlined} from '@ant-design/icons';
import {MyButton} from '../Button/MyButton';

type EditableSpanPropsType = {
  value: string;
  callback: (name: string) => void
}
export const EditableSpan = (props: EditableSpanPropsType) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [value, setValue] = useState<string>(props.value)

  const clickHandler = () => {
    setEdit(true)
  }
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  const offEditMode = () => {
    if(value === ""){
      setValue(props.value)
    }
    setEdit(false)
    props.callback(value)
  }
  const onSaveHandler = () =>{
    offEditMode()
  }

  const onPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    event.code === "Enter" && offEditMode()
  }
  return <div className={s.editableSpan}>
    {!edit ?
      <>
        <span>{props.value}</span>
        <div className={s.editeButton} onClick={clickHandler}><EditOutlined/></div>
      </>
      :
      <>
        <Input autoFocus
                value={value}
                onChange={onChangeHandler}
                onBlur={offEditMode}
                onKeyPress={onPressHandler}
      />
      <MyButton name="save" callback={onSaveHandler}/>
      </>

    }

  </div>
}