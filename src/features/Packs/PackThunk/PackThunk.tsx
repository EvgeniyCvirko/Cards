import React from 'react'
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AddPacksType, UpdatePacksType} from '../../../api/DataTypes';
import {packsApi} from '../../../api/PacksApi';
import {getPacks} from '../PacksReducer';
import {AppRootStateType} from '../../../app/store';
import {handleAsyncServerNetworkError} from '../../../utils/ErrorUtils';

export const addCardPack = createAsyncThunk("packs/addCardPack", async (param:AddPacksType, ThunkApi) =>{
  const state = ThunkApi.getState() as AppRootStateType
  try{
    const res = await packsApi.addPack(param)
    ThunkApi.dispatch(getPacks(state.packsParam))
  }catch (error) {
    return handleAsyncServerNetworkError(error, ThunkApi, true)
  }
})

export const updateCardPack = createAsyncThunk("packs/updateCardPack", async (param:UpdatePacksType, ThunkApi) =>{
  const state = ThunkApi.getState() as AppRootStateType
  try{
    const res = await packsApi.updatePack(param)
    ThunkApi.dispatch(getPacks(state.packsParam))
  }catch (error) {
    return handleAsyncServerNetworkError(error, ThunkApi, true)
  }
})

export const deleteCardPack = createAsyncThunk("packs/deleteCardPack", async (id:string, ThunkApi) =>{
  const state = ThunkApi.getState() as AppRootStateType
  try{
    const res = await packsApi.deletePack(id)
    ThunkApi.dispatch(getPacks(state.packsParam))
  }catch (error) {
    return handleAsyncServerNetworkError(error, ThunkApi, true)
  }
})