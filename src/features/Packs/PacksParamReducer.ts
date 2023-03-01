import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PacksParamType} from '../../api/DataTypes';
import {startPage, startPageCount} from '../../common/constants/projectConstant';

//state
export const slice = createSlice({
  name: 'packsParam',
  initialState: {
    packName: undefined,
    min: undefined,
    max: undefined,
    sortPacks: undefined,
    page: startPage,
    pageCount: startPageCount,
    user_id: undefined,
    block: undefined,
  } as PacksParamType,
  reducers: {
    setPacksParam(state, action: PayloadAction<PacksParamType>) {
      return {...state, ...action.payload}
    },
  },
})

export const packsParamReducer = slice.reducer
//actions
export const {setPacksParam} = slice.actions
//type
