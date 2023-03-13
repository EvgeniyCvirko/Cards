import React, {useState} from 'react';
import {Button, Popover} from 'antd';
import {DeleteOutlined, EditOutlined, MenuOutlined, ScheduleOutlined} from '@ant-design/icons';
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {MenuOptions} from '../common/MenuOptions/MenuOptions';
import {title} from '../../enums/Title';
import {setOpenCardPack} from '../../../features/Modal/ModalReducer';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {getActualUrlCardsParam} from '../../../utils/getActualParam';
import {getCards} from '../../../features/Card/CardsReducer';
import {PATH} from '../../../routing/Pages';

export const MenuPacks = () => {
  const cards = useAppSelector(state => state.cards)
  const [searchParams] = useSearchParams()
  const myId = useAppSelector(state => state.profile.user._id)
  const ownPack = myId === cards.packUserId
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const param = getActualUrlCardsParam(searchParams)
  const dispatch = useAppDispatch()
  const editeHandler = () => {
    const state = {isPack: true, title: title.editeTitleCardPack, open: true, _id: cards.packUserId}
    dispatch(setOpenCardPack({state}))
    setOpen(!open)
  }
  const deleteHandler = () => {
    const state = {name: cards.packName, title: title.deleteTitleCardPack, openDelete: true, _id: param.cardsPack_id}
    dispatch(setOpenCardPack({state}))
    setOpen(!open)
  }
  const learnHandler = () => {
    dispatch(getCards({pageCount: cards.cardsTotalCount, cardsPack_id: param.cardsPack_id}))
    navigate(`${PATH.LEARN}`)
    setOpen(!open)
  }
  const content = (
    <div>
      {ownPack && <MenuOptions title="Edit" icon={<EditOutlined/>} action={editeHandler}/>}
      {ownPack && <MenuOptions title="Delete" icon={<DeleteOutlined/>} action={deleteHandler}/>}
      <MenuOptions title="Learn" icon={<ScheduleOutlined/>} action={learnHandler}/>
    </div>
  )
  const openMenu = () => {
    console.log('delete')
    setOpen(!open)
  }
  return <Popover placement="bottom" content={content} trigger="click" open={open} onOpenChange={openMenu}>
    <Button size="small" onClick={openMenu} style={{marginLeft: 10,}} icon={<MenuOutlined/>}/>
  </Popover>
};
