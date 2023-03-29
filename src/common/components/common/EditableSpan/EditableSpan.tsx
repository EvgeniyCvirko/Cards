import s from './EditableSpan.module.css';
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Input} from 'antd';
import {EditOutlined} from '@ant-design/icons';
import {MyButton} from '../Button/MyButton';

type EditableSpanPropsType = {
  value: string;
  callback: (name: string) => void
}
export const EditableSpan: React.FC<EditableSpanPropsType> =React.memo(({value,callback }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [text, setText] = useState<string>(value)

  const clickHandler = () => {
    setEdit(true)
  }
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value)
  }

  const offEditMode = () => {
    if(text === ""){
      setText(text)
    }
    setEdit(false)
    callback(text)
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
        <span>{text}</span>
        <div className={s.editeButton} onClick={clickHandler}><EditOutlined/></div>
      </>
      :
      <>
        <Input autoFocus
                value={text}
                onChange={onChangeHandler}
                onBlur={offEditMode}
                onKeyPress={onPressHandler}
      />
      <MyButton name="save" callback={onSaveHandler}/>
      </>

    }

  </div>
})