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
import {AddCardHelperType, PackModal} from '../../common/components/common/PackModal/PackModal';
import {addCardPack} from './PackThunk/PackThunk';

export const Packs = () => {
  const dispatch = useAppDispatch()
  const packs = useAppSelector(state => state.packs)
  const profile = useAppSelector(state => state.profile.user)
  const packsParam = useAppSelector(state => state.packsParam)
  const [identity, setIdentity] = useState<string>('All')
  const [open, setOpen] = useState(false);

  const addPack = () => {
    setOpen(true)
  }
  const addCard = async (name: string, isPrivate: boolean, helper: AddCardHelperType) => {
    const result = await dispatch(addCardPack({name, private: isPrivate}))
    if (result.meta.requestStatus) {
      helper.setLoading(false)
      setOpen(false)
    }
  }
  const changeRadioValue = (e: RadioChangeEvent) => {
    if (e.target.value === 'My') {
      dispatch(setPacksParam({user_id: profile._id}))
    } else {
      dispatch(setPacksParam({user_id: undefined}))
    }
    setIdentity(e.target.value)
  }

  const changePage = (page: number, pageCount: number) => {
    dispatch(setPacksParam({pageCount, page}))
  }

  useEffect(() => {
    dispatch(getPacks(packsParam))
  }, [packsParam.pageCount, packsParam.page, packsParam.user_id])

  return (
    <Layout>
      <Layout.Content style={{margin: '90px 0 25px 0 '}}>
        <div className={s.head}>
          <PacksHead title="Packs list"
                     name="Add new pack"
                     callback={addPack}
          />
        </div>
        {open && <PackModal open
                            callback={addCard}
                            closeModal={setOpen}
                            title="Add new Pack"
                            isDoing="Save"
        />}
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
        <PaginationComponent changePageCount={changePage} total={packs.cardPacksTotalCount}/>
      </Layout.Content>
    </Layout>
  )
}