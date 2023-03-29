import {CardPackType} from './DataTypes';

export type UserType = {
  _id: string;
  email: string;
  name: string;
  avatar: string;
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

}

export type ResponseCardsPack = {
  newCardsPack: CardPackType,
} & TokenType;
export type getResponseCards = {
  cards: Array<CardType>,
  cardsTotalCount: number,
  maxGrade: number,
  minGrade: number,
  packCreated: string,
  packName: string,
  packPrivate: boolean,
  packUpdated: string,
  packUserId: string,
  page: number,
  pageCount: number,
} & TokenType;

export type CardType = {
  answer: string,
  answerImg: string,
  answerVideo: string,
  cardsPack_id: string,
  comments: string,
  created: string,
  grade: number,
  more_id: string,
  question: string,
  questionImg: string,
  questionVideo: string,
  rating: number,
  shots: number,
  type: string,
  updated: string,
  user_id: string,
  __v: number,
  _id: string,
}
export type CardResponseType = {
  newCard: CardType;
} & TokenType;
export type UpdateCardResponseType = {
  updatedCard: CardType;
} & TokenType;
export type DeleteCardResponseType = {
  deletedCard: CardType;
} & TokenType;
export type  GetPacksResponseType = {
  cardPacks: Array<CardPackType>;
  page: number;
  pageCount: number;
  cardPacksTotalCount: number;
  minCardsCount: number;
  maxCardsCount: number,
} & TokenType;
export type TokenType = {
  token: string,
  tokenDeathTim: number,
}
export type updatedGradeCardResponseType = {
  _id: string
  cardsPack_id: string
  card_id: string
  more_id: string
  user_id: string
  grade: number
  shots: number
  created: string
  updated: string
  __v: number
}
export type gradeCardResponseType = {
  updatedGrade: updatedGradeCardResponseType
} & TokenType;

