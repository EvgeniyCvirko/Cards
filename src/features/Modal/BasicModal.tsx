import React from 'react';
import {useAppSelector} from '../../utils/hooks';
import {PackModal} from './PackModal/PackModal';
import {DeletePackModal} from './DeletePackModal/DeletePackModal';
import {CardModal} from './CardModal/CardModal';

export const BasicModal = () => {
  const open = useAppSelector(state => state.modal.open)
  const openDelete = useAppSelector(state => state.modal.openDelete)
  const title = useAppSelector(state => state.modal.title)
  const isPack = useAppSelector(state => state.modal.isPack)
  return <div>
    {open && isPack && <PackModal titleModal={title} open={open}/>}
    {openDelete && <DeletePackModal open={openDelete} titleModal={title}/>}
    {open && !isPack && <CardModal titleModal={title} open={open}/>}
  </div>
}