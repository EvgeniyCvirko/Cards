import {Layout} from 'antd';
import React from 'react';
import {useAppSelector} from '../../utils/hooks';
import {Navigate} from 'react-router-dom';
import {BackPage} from '../../common/components/common/BackPage/BackPage';
import s from './LearnPage.module.css'
import {LearnModal} from './LearnModal/LearnModal';
import {CardType} from '../../api/ResponceTypes';

export const LearnPage = () => {
  const isLogin = useAppSelector(state => state.login.isLogin)
  const nameCard = useAppSelector(state => state.cards.packName)
  const card = {
    answer: 'NO',
    cardsPack_id: '63efd835dd4de7beadcd0db8',
    comments: '',
    created: '2023-02-17T21:36:47.074Z',
    grade: 0,
    more_id: '63e563735aef7da775e412c9',
    question: 'Do you work?',
    rating: 0,
    shots: 0,
    type: 'card',
    updated: '2023-02-17T21:36:47.074Z',
    user_id: '63e563735aef7da775e412c9',
    __v: 0,
    _id: '63eff36fdd4de7beadcd17d6',
  } as CardType



  if (!isLogin) {
    return <Navigate to="/login"/>
  }

  return (
    <Layout>
      <Layout.Content style={{margin: '90px 0 25px 0 '}}>
        <BackPage/>
        <h1 className={s.title}>Learn"{nameCard}"</h1>
        <LearnModal card={card} />
      </Layout.Content>
    </Layout>
  )
}