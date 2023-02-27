import axios from 'axios'
import {AddPacksType, PacksParamType, UpdatePacksType} from './DataTypes';
import {GetPacksResponseType, ResponseCardsPack} from './ResponceTypes';

export const instance = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0/',
  withCredentials: true,
})

export const packsApi = {
  getPacks(params: PacksParamType) {
    return instance.get<GetPacksResponseType>('/cards/pack?', {params})
  },
  addPack(cardsPack: AddPacksType) {
    return instance.post<ResponseCardsPack>('/cards/pack', {cardsPack})
  },
  deletePack(id: string) {
    return instance.delete<ResponseCardsPack>(`/cards/pack?id=${id}`)
  },
  updatePack(cardsPack: UpdatePacksType) {
    return instance.put<ResponseCardsPack>(`/cards/pack`, {cardsPack})
  },
}
