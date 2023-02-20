import {Layout, Radio, Slider} from 'antd';
import {FilterOutlined} from '@ant-design/icons'
import React, {useState} from 'react';
import './Packs.module.css'
import {PacksHead} from '../../components/common/PacksHead/PacksHead';
import s from './Packs.module.css'
import {Search} from '../../components/common/Search/Search';
import {SubTitle} from '../../components/common/SubTitle/SubTitle';
import {OwnSlider} from '../../components/common/OwnSlider/OwnSlider';

export const Packs = () => {
  const [identity, setIdentity] = useState<string>('My')
  const packsHandler = () => {
    console.log('pack Handler')
  }
  return (
    <Layout>
      <Layout.Content style={{margin: '90px 0 25px 0 '}}>
        <div className={s.head}>
          <PacksHead title="Packs list" name="Add new pack" callback={packsHandler}/>
        </div>
        <div className={s.main}>
          <div className={s.search}>
            <SubTitle title="Search"/>
            <Search/>
          </div>
          <div className={s.radioGroup}>
            <SubTitle title="Show packs cards"/>
            <Radio.Group value={identity} onChange={(e) => setIdentity(e.target.value)}>
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
      </Layout.Content>
    </Layout>
  )
}