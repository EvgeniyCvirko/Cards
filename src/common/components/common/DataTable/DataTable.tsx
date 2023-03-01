import React from 'react';
import {Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {CardPackType} from '../../../../api/DataTypes';
import {Actions} from '../../Actions/Actions';
import './DataTable.css'

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
export const DataTable = (props: DataTableType) => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'title',
      width:100,
      className: 'Name',
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
  const dataSource = props.data.map((e, i) => {
    let date = new Date(e.updated).toLocaleDateString('ru')
    return {
      key: i,
      title: e.name,
      cardPacksTotalCount: e.cardsCount,
      updated: date,
      name: e.user_name,
      action: <Actions packs={e}/>
    }
  })

  return <Table columns={columns} dataSource={dataSource} pagination={false}/>;
}