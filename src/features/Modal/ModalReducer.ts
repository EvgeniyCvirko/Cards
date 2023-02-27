import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'modal',
  initialState: {
    namePack: '',
    _id: undefined,
    title:'',
    open: false,
    openDelete: false,
  } as InitialStateType,
  reducers: {
    setOpenCardPack(state, action: PayloadAction<{ state: InitialStateType }>) {
      return {...state, ...action.payload.state }
    },
  },
})

export const modalReducer = slice.reducer
//action
export const {setOpenCardPack} = slice.actions
//types
export type InitialStateType = {
  _id?: string,
  namePack?: string,
  title: string,
  open?: boolean,
  openDelete?: boolean,
}