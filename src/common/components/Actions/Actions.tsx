import React from 'react';
import {DeleteOutlined, EditOutlined, ScheduleOutlined} from '@ant-design/icons'
import {Button} from 'antd';
import s from './Actions.module.css'
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {setOpenCardPack} from '../../../features/Modal/ModalReducer';
import {title} from '../../enums/Title';
import {CardPackType} from '../../../api/DataTypes';

type ActionsPropsType = {
  packs: CardPackType
}

export const Actions = (props: ActionsPropsType) => {
  const dispatch = useAppDispatch()

  const myId = useAppSelector(state => state.profile.user._id)
  const learnHandler = () => {
    console.log('learn')
  }
  const editeHandler = () => {
    console.log(321)
    const state = {title: title.editeTitleCardPack, open: true, _id: props.packs._id}
    dispatch(setOpenCardPack({state}))
  }
  const deleteHandler = () => {
    console.log(123)
    const state = {namePack: props.packs.name, title: title.deleteTitleCardPack, openDelete: true, _id: props.packs._id}
    dispatch(setOpenCardPack({state}))
  }
  return <div className={s.actions}>
    <div className={props.packs.cardsCount ? s.learn : s.notActive}>
      <Button shape="circle" disabled={!props.packs.cardsCount} onClick={learnHandler} icon={<ScheduleOutlined/>}/>
    </div>
    <div className={s.edite}>
      {myId === props.packs.user_id &&
          <Button shape="circle" onClick={editeHandler} icon={<EditOutlined/>}/>}
    </div>
    <div className={s.delete}>
      {myId === props.packs.user_id &&
          <Button shape="circle" onClick={deleteHandler} icon={<DeleteOutlined/>}/>}
    </div>
  </div>
};
