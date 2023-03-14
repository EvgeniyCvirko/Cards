import axios from 'axios'
import {CardsParamType, CreateCardDataType, gradeCardDataType, UpdateCardDataType} from './DataTypes';
import {
  CardResponseType,
  DeleteCardResponseType,
  getResponseCards,
  gradeCardResponseType,
  UpdateCardResponseType
} from './ResponceTypes';

export const instance = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0/',
  withCredentials: true,
})

export const cardsApi = {
  getCards(params: CardsParamType) {
    return instance.get<getResponseCards>('/cards/card?', {params})
  },
  createCard(card: CreateCardDataType) {
    return instance.post<CardResponseType>('/cards/card', {card})
  },
  deleteCard(id: string) {
    return instance.delete<UpdateCardResponseType>(`/cards/card?id=${id}`)
  },
  updateCard(card: UpdateCardDataType) {
    return instance.put<DeleteCardResponseType>(`/cards/card`, {card})
  },
  gradeCard(payload: gradeCardDataType) {
    return instance.put<gradeCardResponseType>(`/cards/grade`, payload)
  },
}
