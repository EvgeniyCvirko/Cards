import React from 'react';
import {DeleteOutlined, EditOutlined, ScheduleOutlined} from '@ant-design/icons'
import {Button} from 'antd';
import s from './Actions.module.css'
import {useAppDispatch} from '../../../utils/hooks';
import {setOpenCardPack} from '../../../features/Modal/ModalReducer';
import {title} from '../../enums/Title';
import {CardPackType} from '../../../api/DataTypes';

type ActionsPropsType = {
  data: CardPackType
  own?: boolean
}

export const ActionsPacks: React.FC<ActionsPropsType> = ({data, own}) => {
  const dispatch = useAppDispatch()
  const learnHandler = () => {
    console.log('learn')
  }
  const editeHandler = () => {
    const state = {isPack: true, title: title.editeTitleCardPack, open: true, _id: data._id}
    dispatch(setOpenCardPack({state}))
  }
  const deleteHandler = () => {
    const state = {name: data.name, title: title.deleteTitleCardPack, openDelete: true, _id: data._id}
    dispatch(setOpenCardPack({state}))
  }
  return <div className={s.actions}>
    <div className={data.cardsCount ? s.learn : s.notActive}>
      <Button shape="circle" disabled={!data.cardsCount} onClick={learnHandler} icon={<ScheduleOutlined/>}/>
    </div>
    <div className={s.edite}>
      {own &&
          <Button shape="circle" onClick={editeHandler} icon={<EditOutlined/>}/>}
    </div>
    <div className={s.delete}>
      {own &&
          <Button shape="circle" onClick={deleteHandler} icon={<DeleteOutlined/>}/>}
    </div>
  </div>
};
