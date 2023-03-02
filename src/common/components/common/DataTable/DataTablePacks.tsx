import React from 'react';
import {Table} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {CardPackType} from '../../../../api/DataTypes';
import {ActionsPacks} from '../../Actions/ActionsPacks';
import './DataTable.css'
import {NavLink} from 'react-router-dom';
import {PATH} from '../../../../routing/Pages';
import {useAppSelector} from '../../../../utils/hooks';

interface DataType {
  key: number;
  title: string;
  cardPacksTotalCount: number;
  updated: string;
  name: string;
}

type DataTableType = {
  data: CardPackType[]
  own?: boolean
}
export const DataTablePacks: React.FC<DataTableType> = ({data, own}) => {
  const myId = useAppSelector(state => state.profile.user._id)

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'title',
      className: 'Name',
      render: (name) => {
        let id
        data.forEach(el => el.name === name ? id = el._id : null)
        return <NavLink to={`${PATH.CARD}?cardsPack_id=${id}`}>{name}</NavLink>
      }
    },
    {
      title: 'Cards',
      dataIndex: 'cardPacksTotalCount',
      className: 'Cards',

    },
    {
      title: 'Last Updated',
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