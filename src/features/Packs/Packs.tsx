import {Layout, Radio, RadioChangeEvent} from 'antd';
import {FilterOutlined} from '@ant-design/icons'
import React, {useEffect, useState} from 'react';
import './Packs.module.css'
import s from './Packs.module.css'
import {PacksHead} from '../../common/components/common/PacksHead/PacksHead';
import {DataTable} from '../../common/components/common/DataTable/DataTable';
import {OwnSlider} from '../../common/components/common/OwnSlider/OwnSlider';
import {SubTitle} from '../../common/components/common/SubTitle/SubTitle';
import {Search} from '../../common/components/common/Search/Search';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {getPacks} from './PacksReducer';
import {PaginationComponent} from '../../common/components/common/PaginationComponent/PaginationComponent';
import {setPacksParam} from './PacksParamReducer';
import {BasicModal} from '../Modal/BasicModal';
import {setOpenCardPack} from '../Modal/ModalReducer';
import {title} from '../../common/enums/Title';
import {Navigate, useSearchParams} from 'react-router-dom';
import {getActualUrlPacksParam} from '../../utils/getActualParam';

export const Packs = () => {
  const dispatch = useAppDispatch()
  const isLogin = useAppSelector(state => state.login.isLogin)
  const packs = useAppSelector(state => state.packs)
  const profile = useAppSelector(state => state.profile.user)
  const packsParam = useAppSelector(state => state.packsParam)
  let [identity, setIdentity] = useState<string>('All')
  const [searchParams, setSearchParams] = useSearchParams();
  profile._id === searchParams.get('user_id') ? identity = 'My' : identity = 'All'
  const stateParams = getActualUrlPacksParam(searchParams)

  const addPack = () => {
    dispatch(setOpenCardPack({
      state: {title: title.addTitleCardPack, open: true}
    }))
  }
  const changeRadioValue = (e: RadioChangeEvent) => {
    const queryParams: { user_id?: string } = {}
    if (e.target.value === 'My') {
      queryParams.user_id = profile._id
    } else {
      searchParams.delete('user_id')
    }
    setSearchParams({
      ...Object.fromEntries(searchParams),
      ...queryParams,
    })
    setIdentity(e.target.value)
  }

  useEffect(() => {
    dispatch(setPacksParam(stateParams))
  }, [stateParams.user_id, stateParams.page, stateParams.pageCount])

  useEffect(() => {
    dispatch(getPacks(stateParams))
  }, [packsParam.pageCount, packsParam.page, packsParam.user_id])

  if (!isLogin) {
    return <Navigate to="/login"/>
  }

  return (
    <Layout>
      <Layout.Content style={{margin: '90px 0 25px 0 '}}>
        <div className={s.head}>
          <PacksHead title="Packs list"
                     name="Add new pack"
                     callback={addPack}
          />
        </div>
        <BasicModal/>
        <div className={s.main}>
          <div className={s.search}>
            <SubTitle title="Search"/>
            <Search/>
          </div>
          <div className={s.radioGroup}>
            <SubTitle title="Show packs cards"/>
            <Radio.Group value={identity} onChange={changeRadioValue}>
              <Radio.Button style={{width: '75px'}} value="My">My</Radio.Button>
              <Radio.Button style={{width: '75px'}} value="All">All</Radio.Button>
            </Radio.Group>
          </div>
          <div className={s.slider}>
            <SubTitle title="Number of cards"/>
            <OwnSlider/>
          </div>
          <FilterOutlined className={s.filter}/>
        </div>
        <div className={s.table}>
          <DataTable data={packs.cardPacks}/>
        </div>
        <PaginationComponent total={packs.cardPacksTotalCount}/>
      </Layout.Content>
    </Layout>
  )
}