import {CardPackType} from './DataTypes';

export type UserType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  isAdmin: boolean;
  verified: boolean;
  rememberMe: boolean;
  error?: string;
  _v: number;
}
export type ResponseUser = {
  updatedUser: UserType,
  token: string,
  tokenDeathTim:number
}

export type ResponseCardsPack = {
  newCardsPack: CardPackType,
  token: string,
  tokenDeathTim:number
}
export type  GetPacksResponseType = {
  cardPacks: Array<CardPackType>;
  page: number;
  pageCount: number;
  cardPacksTotalCount: number;
  minCardsCount: number;
  maxCardsCount: number,
  token: string,
  tokenDeathTime: number,
}

