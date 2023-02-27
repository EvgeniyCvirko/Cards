import React from 'react';
import {useAppSelector} from '../../utils/hooks';
import {PackModal} from './PackModal/PackModal';
import {DeletePackModal} from './DeletePackModal/DeletePackModal';

export const BasicModal = () => {
  const open = useAppSelector(state => state.modal.open)
  const openDelete = useAppSelector(state => state.modal.openDelete)
  const title = useAppSelector(state => state.modal.title)


  return <div>
    {open && <PackModal title={title} open={open} isDoing="Save" />}
    {openDelete && <DeletePackModal open={openDelete} title={title} isDoing={'Delete Pack'}/>}
  </div>
}