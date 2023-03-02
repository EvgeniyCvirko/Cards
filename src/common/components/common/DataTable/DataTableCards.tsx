import React from 'react';
import {Rate, Table} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import './DataTable.css'
import {CardType} from '../../../../api/ResponceTypes';
import {ActionsCards} from '../../Actions/ActionsCards';

interface DataType {
  key: number;
  question: string;
  answer: string;
  updated: string;
}

type DataTableType = {
  data: CardType[]
  ownPack?: boolean
}
export const DataTableCards: React.FC<DataTableType> = ({data, ownPack}) => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Question',
      dataIndex: 'question',
      className: 'Question',
    },
    {
      title: 'Answer',
      dataIndex: 'answer',
      className: 'Answer',
    },
    {
      title: 'Last Updated',
      dataIndex: 'updated',
      className: 'Updated',
    },

    {
      title: 'Grade',
      dataIndex: 'action',
      className: 'Grade',
    },
  ];
  const dataSource = data.map((e, i) => {
    let date = new Date(e.updated).toLocaleDateString('ru')
    return {
      key: i,
      question: e.question,
      answer: e.answer,
      updated: date,
      action:
        ownPack ? < >
            <Rate value={e.grade}/>
            < ActionsCards data={e}/>
          </> :
          <>
            <Rate value={e.grade}/>
          </>,
    }
  })

  return <Table columns={columns} dataSource={dataSource} pagination={false}/>;
}