import React, {useEffect, useRef, useState} from 'react';
import s from './DeletePackModal.module.css'
import {Modal} from 'antd';
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {deleteCardPack} from '../../Packs/PackThunk/PackThunk';
import {setOpenCardPack} from '../ModalReducer';

type PackModalPropsType = {
  open: boolean,
  title: string,
  isDoing: string,
}

export const DeletePackModal: React.FC<PackModalPropsType> = ({open, title, isDoing}) => {
  const dispatch = useAppDispatch()
  const _id = useAppSelector(state => state.modal._id)
  const namePack = useAppSelector(state => state.modal.namePack)
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const handleOk = async () => {
    setLoading(true)
    if (_id) {
      const result = await dispatch(deleteCardPack(_id))
      if (result.meta.requestStatus) {
        setLoading(false)
        handleCancel()
      }
    }
  }

  const handleCancel = () => {
    dispatch(setOpenCardPack({state: {title: '', openDelete: false}}));
  };

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
           okType={'danger'}
    >
      <div className={s.text}>
        Do you really want to remove <span>{namePack}</span>?
        All cards will be deleted.
      </div>
    </Modal>
  </div>
}