import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {handleAsyncServerNetworkError} from '../../utils/ErrorUtils';
import {setAppStatus} from '../../app/AppReducer';
import {successRequest} from '../../utils/SuccessRequest';
import {CardPackType, PacksParamType} from '../../api/DataTypes';
import {GetPacksResponseType} from '../../api/ResponceTypes';
import {packsApi} from '../../api/PacksApi';
import {startPage, startPageCount} from '../../common/constants/projectConstant';

export const getPacks = createAsyncThunk<{ packs: GetPacksResponseType }, PacksParamType , { rejectValue: { error: string | undefined } }>(
  'packs/getPacks', async (param, ThunkApi) => {
    ThunkApi.dispatch(setAppStatus({status: 'loading'}))
        try {
      const res = await packsApi.getPacks(param)
      successRequest(ThunkApi)
      return {packs: res.data}
    } catch (error) {
      return handleAsyncServerNetworkError(error, ThunkApi, true)
    }
  }
)

//state
export const slice = createSlice({
  name: 'packs',
  initialState: {
    cardPacks: [] as Array<CardPackType>,
    page: startPage,
    pageCount: startPageCount,
    cardPacksTotalCount: 0,
    minCardsCount: 0,
    maxCardsCount: 0,
    token: '',
    tokenDeathTim: 0,
  } as GetPacksResponseType,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getPacks.fulfilled, (state, action) => {
      return {...state, ...action.payload.packs}
    })
  }
})

export const packsReducer = slice.reducer
//actions
//type
