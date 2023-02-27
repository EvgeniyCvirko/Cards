import React, {ChangeEvent, KeyboardEvent, useEffect, useRef, useState} from 'react';
import s from './PackModal.module.css'
import {Checkbox, Input, Modal} from 'antd';
import {CheckboxChangeEvent} from 'antd/es/checkbox';
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {addCardPack, updateCardPack} from '../../Packs/PackThunk/PackThunk';
import {setOpenCardPack} from '../ModalReducer';

export type AddCardHelperType = { setLoading: (loading: boolean) => void }

type PackModalPropsType = {
  open: boolean,
  title: string,
  isDoing: string,
}

export const PackModal: React.FC<PackModalPropsType> = ({open, title, isDoing}) => {
  const dispatch = useAppDispatch()
  const _id = useAppSelector(state => state.modal._id)
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('')
  const [isPrivate, setIsPrivate] = useState(false)
  const inputRef = useRef(null);

  const addCard = async (name: string, isPrivate: boolean, helper: AddCardHelperType) => {
    let result
    if (title === 'Add new pack') {
      result = await dispatch(addCardPack({name, private: isPrivate}))
      if (result.meta.requestStatus) {
        helper.setLoading(false)
        handleCancel()
      }
    } else {
      if (_id) {
        result = await dispatch(updateCardPack({_id, name, private: isPrivate}))
        if (result.meta.requestStatus) {
          helper.setLoading(false)
          handleCancel()
        }
      }
    }
  }
  const handleOk = () => {
    addCard(name, isPrivate, {setLoading})
    setLoading(true)
  };
  const privateHandler = (e: CheckboxChangeEvent) => {
    setIsPrivate(e.target.checked)
  };
  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }
  const handleCancel = () => {
    dispatch(setOpenCardPack({state: {title: '', open: false}}));
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