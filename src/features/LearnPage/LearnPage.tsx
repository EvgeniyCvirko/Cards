import {Layout} from 'antd';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {Navigate} from 'react-router-dom';
import {BackPage} from '../../common/components/common/BackPage/BackPage';
import s from './LearnPage.module.css'
import {LearnModal} from './LearnModal/LearnModal';
import {PATH} from '../../routing/Pages';
import {getCard} from '../../utils/smartRandom';
import {CardType} from '../../api/ResponceTypes';

export const LearnPage = () => {
  const isLogin = useAppSelector(state => state.login.isLogin)
  const nameCard = useAppSelector(state => state.cards.packName)
  const cards = useAppSelector(state => state.cards.cards)
  const [card, setCard] = useState<CardType>({
    answerImg: '',
    answerVideo: '',
    comments: '',
    questionImg: '',
    questionVideo: '',
    user_id: '',
    __v: 0,
    _id: 'fake',
    cardsPack_id: '',
    answer: 'answer fake',
    question: 'question fake',
    grade: 0,
    shots: 0,
    type: '',
    rating: 0,
    more_id: '',
    created: '',
    updated: '',
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (cards.length > 0) setCard(getCard(cards));
  }, [dispatch, cards]);
  if (!isLogin) {
    return <Navigate to="/login"/>
  }
  if (cards.length === 0) return <Navigate to={PATH.PACKS}/>
  return (
    <Layout>
      <Layout.Content style={{margin: '90px 0 25px 0 '}}>
        <BackPage/>
        <h1 className={s.title}>Learn"{nameCard}"</h1>
        <LearnModal card={card}/>
      </Layout.Content>
    </Layout>
  )
}