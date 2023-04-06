import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {handleAsyncServerNetworkError} from '../../utils/ErrorUtils';
import {setAppStatus} from '../../app/AppReducer';
import {successRequest} from '../../utils/SuccessRequest';
import {CardsParamType, CreateCardDataType, gradeCardDataType, UpdateCardDataType} from '../../api/DataTypes';
import {CardType, getResponseCards, updatedGradeCardResponseType} from '../../api/ResponceTypes';
import {cardsApi} from '../../api/CardsApi';
import {AppRootStateType} from '../../app/store';

export const getCards = createAsyncThunk<{ cards: getResponseCards }, CardsParamType, { rejectValue: { error: string | undefined } }>(
  'cards/getCards', async (param, ThunkApi) => {
    ThunkApi.dispatch(setAppStatus({status: 'loading'}))
    try {
      const res = await cardsApi.getCards(param)
      successRequest(ThunkApi)
      return {cards: res.data}
    } catch (error) {
      return handleAsyncServerNetworkError(error, ThunkApi, true)
    }
  }
)

export const createCard = createAsyncThunk('cards/addCard', async (param: CreateCardDataType, ThunkApi) => {
  const state = ThunkApi.getState() as AppRootStateType
  try {
    const res = await cardsApi.createCard(param)
    ThunkApi.dispatch(getCards(state.cardsParam))
  } catch (error) {
    return handleAsyncServerNetworkError(error, ThunkApi, true)
  }
})
export const updateCard = createAsyncThunk('cards/updateCard', async (param: UpdateCardDataType, ThunkApi) => {
  const state = ThunkApi.getState() as AppRootStateType
  try {
    const res = await cardsApi.updateCard(param)
    ThunkApi.dispatch(getCards(state.cardsParam))
  } catch (error) {
    return handleAsyncServerNetworkError(error, ThunkApi, true)
  }
})

export const deleteCard = createAsyncThunk('cards/deleteCard', async (id: string, ThunkApi) => {
  const state = ThunkApi.getState() as AppRootStateType
  try {
    const res = await cardsApi.deleteCard(id)
    ThunkApi.dispatch(getCards(state.cardsParam))
  } catch (error) {
    return handleAsyncServerNetworkError(error, ThunkApi, true)
  }
})
export const changeGradeCard = createAsyncThunk<updatedGradeCardResponseType, gradeCardDataType, { rejectValue: { error: string | undefined } }>(
  'cards/changeGrade', async (param: gradeCardDataType, ThunkApi) => {
    try {
      const res = await cardsApi.gradeCard(param)

      return res.data.updatedGrade
    } catch (error) {
      return handleAsyncServerNetworkError(error, ThunkApi, true)
    }
  })
//state
export const slice = createSlice({
  name: 'cards',
  initialState: {
    cards: [] as Array<CardType>,
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    packCreated: '',
    packName: '',
    packPrivate: false,
    packUpdated: '',
    packUserId: '',
    page: 0,
    pageCount: 0,
    token: '',
    tokenDeathTim: 0,
  } as getResponseCards,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCards.fulfilled, (state, action) => {
      return action.payload.cards
    });
    builder.addCase(changeGradeCard.fulfilled, (state, action) => {
      state.cards = state.cards.map(card =>
        card._id === action.payload.card_id ? {...card, grade: action.payload.grade} : card)
    });
  }
})

export const cardsReducer = slice.reducer
//actions

//type
