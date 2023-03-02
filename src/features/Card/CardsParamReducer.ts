import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CardsParamType} from '../../api/DataTypes';

//state
export const slice = createSlice({
  name: 'cardsParam',
  initialState: {
    cardAnswer: undefined,
    cardQuestion: undefined,
    cardsPack_id: '',
    min: undefined,
    max: undefined,
    sortCards: undefined,
    page: undefined,
    pageCount: undefined,
  } as CardsParamType,
  reducers: {
    setCardsParam(state, action: PayloadAction<CardsParamType>) {
      return {...state, ...action.payload}
    },
  },
})

export const cardsParamReducer = slice.reducer
//actions
export const {setCardsParam} = slice.actions
//type
