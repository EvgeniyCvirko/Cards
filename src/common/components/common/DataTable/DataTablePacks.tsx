import React from 'react';
import {Table} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {CardPackType} from '../../../../api/DataTypes';
import {ActionsPacks} from '../../Actions/ActionsPacks';
import './DataTable.css'
import {NavLink, useSearchParams} from 'react-router-dom';
import {PATH} from '../../../../routing/Pages';
import {useAppSelector} from '../../../../utils/hooks';
import {SortComponent} from '../SortCompomemt/SortComponent';
import {sortPacks} from '../../../enums/SortPacks';

interface DataType {
  key: number;
  title: string;
  cardPacksTotalCount: number;
  updated: string;
  name: string;
}

type DataTableType = {
  data: CardPackType[]
}
export const DataTablePacks: React.FC<DataTableType> = ({data}) => {
  const myId = useAppSelector(state => state.profile.user._id)
  const [searchParams, setSearchParams] = useSearchParams();
  let up
  (searchParams.get('sortPacks') && searchParams.get('sortPacks') === sortPacks.ASC_UPDATE) ? up = true : up = false
  const changeSort = (isUp: boolean) => {
    const queryParam: { sortPacks?: string } = {}
    isUp ? queryParam.sortPacks = sortPacks.ASC_UPDATE : queryParam.sortPacks = sortPacks.DESC_UPDATE
    setSearchParams({
      ...Object.fromEntries(searchParams),
      ...queryParam
    })
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'title',
      className: 'Name',
      render: (name) => {
        let id
        let src: string[] = []
        data.forEach(el => {
          if (el.name === name) {
            id = el._id
            src.push(el.deckCover)
          }
        })
        console.log(id)
        return <div>
          {src.length && <img src={src[0]} alt=""/>}
          <NavLink to={`${PATH.CARD}?cardsPack_id=${id}`}>{name}</NavLink>
        </div>
      }
    },
    {
      title: 'Cards',
      dataIndex: 'cardPacksTotalCount',
      className: 'Cards',

    },
    {
      title: <SortComponent callback={changeSort} up={up}/>,
      dataIndex: 'updated',
    },
    {
      title: 'Created by',
      dataIndex: 'name',
    }, {
      title: 'Actions',
      dataIndex: 'action',
    },
  ];
  const dataSource = data.map((e, i) => {
    let date = new Date(e.updated).toLocaleDateString('ru')
    const ownPack = myId === e.user_id
    return {
      key: i,
      title: e.name,
      cardPacksTotalCount: e.cardsCount,
      updated: date,
      name: e.user_name,
      action: <ActionsPacks own={ownPack} data={e}/>
    }
  })

  return <Table columns={columns} dataSource={dataSource} pagination={false}/>;
}