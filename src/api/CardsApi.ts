import axios from 'axios'
import {AddPacksType, CardsParamType, UpdatePacksType} from './DataTypes';
import {getResponseCards, ResponseCardsPack} from './ResponceTypes';

export const instance = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0/',
  withCredentials: true,
})

export const cardsApi = {
  getCards(params: CardsParamType) {
    return instance.get<getResponseCards>('/cards/card?', {params})
  },
  addPack(cardsPack: AddPacksType) {
    return instance.post<ResponseCardsPack>('/cards/card', {cardsPack})
  },
  deletePack(id: string) {
    return instance.delete<ResponseCardsPack>(`/cards/card?id=${id}`)
  },
  updatePack(cardsPack: UpdatePacksType) {
    return instance.put<ResponseCardsPack>(`/cards/card`, {cardsPack})
  },
}
