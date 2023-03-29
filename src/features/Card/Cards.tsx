import {Layout} from 'antd';
import React, {useEffect, useMemo} from 'react';
import s from './Card.module.css'
import {PacksHead} from '../../common/components/common/PacksHead/PacksHead';
import {SubTitle} from '../../common/components/common/SubTitle/SubTitle';
import {Search} from '../../common/components/common/Search/Search';
import {Navigate, useNavigate, useSearchParams} from 'react-router-dom';
import {getActualUrlCardsParam} from '../../utils/getActualParam';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {setCardsParam} from './CardsParamReducer';
import {getCards} from './CardsReducer';
import {DataTableCards} from '../../common/components/common/DataTable/DataTableCards';
import {BackPage} from '../../common/components/common/BackPage/BackPage';
import {MyButton} from '../../common/components/common/Button/MyButton';
import {PaginationComponent} from '../../common/components/common/PaginationComponent/PaginationComponent';
import {BasicModal} from '../Modal/BasicModal';
import {title} from '../../common/enums/Title';
import {setOpenCardPack} from '../Modal/ModalReducer';
import {PATH} from '../../routing/Pages';

export const Cards = () => {
  const dispatch = useAppDispatch()
  const cards = useAppSelector(state => state.cards)
  const isLogin = useAppSelector(state => state.login.isLogin)
  const cardsParams = useAppSelector(state => state.cardsParam)
  const myId = useAppSelector(state => state.profile.user._id)
  const ownPack = myId === cards.packUserId
  const [searchParams] = useSearchParams()
  const param = getActualUrlCardsParam(searchParams)
  const navigate = useNavigate()
  const stateParamsCard = useMemo(() => getActualUrlCardsParam(searchParams), [searchParams])
  const addNewCard = () => {
    const state = {isPack: false, title: title.addTitleCard, open: true}
    dispatch(setOpenCardPack({state}))
  }

  const learnHandler = () => {
    dispatch(getCards({pageCount: cards.cardsTotalCount, cardsPack_id: param.cardsPack_id}))
    navigate(`${PATH.LEARN}`)
  }
  useEffect(() => {
    dispatch(setCardsParam(stateParamsCard))
  }, [dispatch,stateParamsCard])

  useEffect(() => {
   if(JSON.stringify(stateParamsCard) === JSON.stringify(cardsParams)) dispatch(getCards(cardsParams))
  }, [dispatch, cardsParams])

  if (!isLogin) {
    return <Navigate to="/login"/>
  }

  return <Layout>
    <Layout.Content style={{margin: '90px 0 25px 0 '}}>
      <BackPage/>
      {ownPack ?
        (cards.cards.length !== 0 ?
            <>
              <div className={s.head}>
                <PacksHead title={cards.packName} name="Add new card" callback={addNewCard} menu />
              </div>
              <BasicModal/>
              <div className={s.main}>
                <div className={s.search}>
                  <SubTitle title="Search"/>
                  <Search search="cardQuestion"/>
                </div>
              </div>
              <div className={s.table}>
                <DataTableCards ownPack data={cards.cards}/>
              </div>
              <PaginationComponent total={cards.cardsTotalCount}/>
            </>
            :
            <>
              <BasicModal/>
              <div className={s.emptyHead}>
                <div className={s.title}>{cards.packName}</div>
                <div className={s.text}>This pack is empty. Click add new card to fill this pack</div>
                <MyButton name="Add new card" callback={addNewCard}/>
              </div>
            </>
        )
        :
        (cards.cards.length !== 0 ?
            <>
              <div className={s.head}>
                <PacksHead title={cards.packName} name="Learn to pack" callback={learnHandler}/>
              </div>
              <div className={s.main}>
                <div className={s.search}>
                  <SubTitle title="Search"/>
                  <Search search="cardQuestion"/>
                </div>
              </div>
              <div className={s.table}>
                <DataTableCards data={cards.cards}/>
              </div>
              <PaginationComponent total={cards.cardsTotalCount}/>
            </>
            :
            <div className={s.emptyHead}>
              <div className={s.title}>{cards.packName}</div>
              <div className={s.text}>This pack is empty</div>
            </div>
        )
      }
    </Layout.Content>
  </Layout>
}