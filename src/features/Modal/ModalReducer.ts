import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'modal',
  initialState: {
    name: '',
    _id: undefined,
    title:'',
    open: false,
    openDelete: false,
    isPack:true,
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
  name?: string,
  title: string,
  open?: boolean,
  openDelete?: boolean,
  isPack?: boolean,
}