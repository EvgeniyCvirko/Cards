import {Layout} from 'antd';
import React, {useEffect} from 'react';
import s from './Card.module.css'
import {PacksHead} from '../../common/components/common/PacksHead/PacksHead';
import {SubTitle} from '../../common/components/common/SubTitle/SubTitle';
import {Search} from '../../common/components/common/Search/Search';
import {useSearchParams} from 'react-router-dom';
import {getActualUrlCardsParam} from '../../utils/getActualParam';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {setCardsParam} from './CardsParamReducer';
import {getCards} from './CardsReducer';
import {DataTableCards} from '../../common/components/common/DataTable/DataTableCards';
import {BackPage} from '../../common/components/common/BackPage/BackPage';
import {Button} from '../../common/components/common/Button/Button';

export const Cards = () => {
  const dispatch = useAppDispatch()
  const cardsParams = useAppSelector(state => state.cardsParam)
  const cards = useAppSelector(state => state.cards)
  const myId = useAppSelector(state => state.profile.user._id)
  const packUserId = useAppSelector(state => state.cards.packUserId)
  const ownPack = myId === packUserId
  const [searchParams, setSearchParams] = useSearchParams()
  const stateParamsCard = getActualUrlCardsParam(searchParams)


  useEffect(() => {
    dispatch(setCardsParam(stateParamsCard))
  }, [stateParamsCard.cardsPack_id])

  useEffect(() => {
    dispatch(getCards(stateParamsCard))
  }, [])

  return <Layout>
    <Layout.Content style={{margin: '90px 0 25px 0 '}}>
      <BackPage/>
      {ownPack ?
        (cards.cards.length !== 0 ?
            <>
              <div className={s.head}>
                <PacksHead title={cards.packName} name="Add new card" callback={() => {
                }}/>
              </div>
              <div className={s.main}>
                <div className={s.search}>
                  <SubTitle title="Search"/>
                  <Search/>
                </div>
              </div>
              <div className={s.table}>
                <DataTableCards data={cards.cards}/>
              </div>
              {/*<PaginationComponent changePageCount={changePage} total={packs.cardPacksTotalCount}/>*/}
            </> :
            <div className={s.emptyHead}>
              <div className={s.title}>{cards.packName}</div>
              <div className={s.text}>This pack is empty. Click add new card to fill this pack</div>
              <Button name="Add new card" callback={() => {
              }}/>
            </div>
        ) :
        (cards.cards.length !== 0 ?
          <>
            <div className={s.head}>
              <PacksHead title={cards.packName} name="Learn to pack" callback={() => {
              }}/>
            </div>
            {/*<BasicModal/>*/}
            <div className={s.main}>
              <div className={s.search}>
                <SubTitle title="Search"/>
                <Search/>
              </div>
            </div>
            <div className={s.table}>
              <DataTableCards data={cards.cards}/>
            </div>
            {/*<PaginationComponent changePageCount={changePage} total={packs.cardPacksTotalCount}/>*/}
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