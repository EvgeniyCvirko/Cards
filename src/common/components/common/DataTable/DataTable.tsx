import React from 'react';
import {Table} from 'antd';
import type {ColumnsType, TableProps} from 'antd/es/table';
import {CardPackType} from '../../../../api/DataTypes';

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
export const DataTable = (props:DataTableType) => {
  const sort = () => {

  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'title',
    },
    {
      title: 'Cards',
      dataIndex: 'cardPacksTotalCount',

    },
    {
      title: 'Last Updated',
      dataIndex: 'updated',
    },
    {
      title: 'Created by',
      dataIndex: 'name',
    },{
      title: 'Actions',
      dataIndex: 'action',
    },
  ];

  // const data: DataType[] = [
  //   {
  //     key: 1,
  //     title: 'John Brown',
  //     cardPacksTotalCount: 98,
  //     updated: 60,
  //     name: '70',
  //   },
  //   {
  //     key: 2,
  //     title: 'Jim Green',
  //     cardPacksTotalCount: 98,
  //     updated: 66,
  //     name: '89',
  //   },
  //   {
  //     key: 3,
  //     title: 'Joe Black',
  //     cardPacksTotalCount: 98,
  //     updated: 90,
  //     name: '70',
  //   },
  //   {
  //     key: 4,
  //     title: 'Jim Red',
  //     cardPacksTotalCount: 88,
  //     updated: 99,
  //     name: '89',
  //   },
  // ];
const dataSource = props.data.map((e,i) => {
  let date = new Date(e.updated).toLocaleDateString('ru')
  return { key: i, title: e.name, cardPacksTotalCount: e.cardsCount, updated:date, name: e.user_name}
  })

  return <Table columns={columns} dataSource={dataSource} />;
}