import React, {ChangeEvent, KeyboardEvent, useEffect, useRef, useState} from 'react';
import s from './PackModal.module.css'
import {Checkbox, Input, Modal} from 'antd';
import {CheckboxChangeEvent} from 'antd/es/checkbox';

export type AddCardHelperType = { setLoading: (loading: boolean) => void }

type PackModalPropsType = {
  open: boolean
  closeModal: (value: boolean) => void
  title: string
  isDoing: string
  callback: (name: string, isPrivate: boolean, helper: AddCardHelperType) => void
}

export const PackModal: React.FC<PackModalPropsType> = ({open, closeModal, title, isDoing, callback}) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('')
  const [isPrivate, setIsPrivate] = useState(false)
  const inputRef = useRef(null);

  const handleOk = () => {
    callback(name, isPrivate, {setLoading})
    setLoading(true)
  };
  const privateHandler = (e: CheckboxChangeEvent) => {
    setIsPrivate(e.target.checked)
  };
  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }
  const handleCancel = () => {
    closeModal(false);
  };
  const onPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    event.code === 'Enter' && handleOk()
  }
  useEffect(() => {
    // @ts-ignore
    inputRef.current?.focus()
  }, [inputRef.current]);

  return <div>
    <Modal className={s.modal}
           title={title}
           open={open}
           onOk={handleOk}
           confirmLoading={loading}
           onCancel={handleCancel}
           okText={isDoing}
    >
      <div className={s.input}>
        <Input placeholder="Name Pack"
               size="large"
               onChange={changeName}
               onKeyPress={onPressHandler}
               ref={inputRef}
        />
      </div>
      <div className={s.checkbox}>
        <Checkbox onChange={privateHandler}>Private pack</Checkbox>
      </div>
    </Modal>
  </div>
}