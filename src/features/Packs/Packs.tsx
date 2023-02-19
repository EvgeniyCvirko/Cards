import {Layout, Radio} from 'antd';
import React, {useState} from 'react';
import './Packs.module.css'
import {PacksHead} from '../../components/common/PacksHead/PacksHead';
import s from './Packs.module.css'
import {Search} from '../../components/common/Search/Search';

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
          <Search width='400px'/>
          <Radio.Group value={identity} onChange={(e) => setIdentity(e.target.value)}>
            <Radio.Button value="My">My</Radio.Button>
            <Radio.Button value="All">All</Radio.Button>
          </Radio.Group>
        </div>
      </Layout.Content>
    </Layout>
  )
}