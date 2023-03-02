import React from 'react';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import {Button} from 'antd';
import s from './Actions.module.css'
import {CardType} from '../../../api/ResponceTypes';
import {title} from '../../enums/Title';
import {setOpenCardPack} from '../../../features/Modal/ModalReducer';
import {useAppDispatch} from '../../../utils/hooks';

type ActionsPropsType = {
  data: CardType
}

export const ActionsCards: React.FC<ActionsPropsType> = ({data} ) => {
const dispatch = useAppDispatch()
  const editeHandler = () => {
      const state = {isPack: false,title: title.editeTitleCard, open: true, _id: data._id}
    dispatch(setOpenCardPack({state}))
  }
  const deleteHandler = () => {
    const state = {isPack: false, name: data.question, title: title.deleteTitleCard, openDelete: true, _id: data._id}
    dispatch(setOpenCardPack({state}))
  }
  return <div className={s.actionsCards}>
    <div className={s.edite}>
          <Button shape="circle" onClick={editeHandler} icon={<EditOutlined/>}/>
    </div>
    <div className={s.delete}>
          <Button shape="circle" onClick={deleteHandler} icon={<DeleteOutlined/>}/>
    </div>
  </div>
};
