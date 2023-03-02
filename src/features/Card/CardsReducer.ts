import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {handleAsyncServerNetworkError} from '../../utils/ErrorUtils';
import {setAppStatus} from '../../app/AppReducer';
import {successRequest} from '../../utils/SuccessRequest';
import {CardsParamType} from '../../api/DataTypes';
import {getResponseCards} from '../../api/ResponceTypes';
import {cardsApi} from '../../api/CardsApi';

export const getCards = createAsyncThunk<{ cards: getResponseCards }, CardsParamType , { rejectValue: { error: string | undefined } }>(
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

//state
export const slice = createSlice({
  name: 'cards',
  initialState: {
    cards: [{
      answer: '',
      answerImg: '',
      answerVideo: '',
      cardsPack_id: '',
      comments: '',
      created: '',
      grade: 0,
      more_id: '',
      question: '',
      questionImg: '',
      questionVideo: '',
      rating: 0,
      shots: 0,
      type: '',
      updated: '',
      user_id: '',
      __v: 0,
      _id: '',
    }],
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    packCreated:'',
    packName:'',
    packPrivate: false,
    packUpdated:'',
    packUserId:'',
    page: 0,
    pageCount: 0,
    token:'',
    tokenDeathTime: 0,
  } as getResponseCards,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getCards.fulfilled, (state, action) => {
      return {...state, ...action.payload.cards}
    })
  }
})

export const cardsReducer = slice.reducer
//actions
//type
