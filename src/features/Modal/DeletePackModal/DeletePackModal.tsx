import React, {useEffect, useRef, useState} from 'react';
import s from './DeletePackModal.module.css'
import {Modal} from 'antd';
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {deleteCardPack} from '../../Packs/PackThunk/PackThunk';
import {setOpenCardPack} from '../ModalReducer';
import {title} from '../../../common/enums/Title';
import {deleteCard} from '../../Card/CardsReducer';

type PackModalPropsType = {
  open: boolean,
  titleModal: string,
}

export const DeletePackModal: React.FC<PackModalPropsType> = ({open, titleModal}) => {
  const dispatch = useAppDispatch()
  const _id = useAppSelector(state => state.modal._id)
  const name = useAppSelector(state => state.modal.name)
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const handleOk = async () => {
    setLoading(true)
    let result
    if (titleModal === title.deleteTitleCard) {
      if (_id) {
        result = await dispatch(deleteCard(_id))
        if (result.meta.requestStatus) {
          setLoading(false)
          handleCancel()
        }
      }
    } else if (_id) {
      result = await dispatch(deleteCardPack(_id))
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
           title={titleModal}
           open={open}
           onOk={handleOk}
           confirmLoading={loading}
           onCancel={handleCancel}
           okText='Delete'
           okType={'danger'}
    >
      <div className={s.text}>
        Do you really want to remove <span>{name}</span>?
        All cards will be deleted.
      </div>
    </Modal>
  </div>
}