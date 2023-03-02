import React from 'react';
import {Table} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import './DataTable.css'
import {CardType} from '../../../../api/ResponceTypes';

interface DataType {
  key: number;
  question: string;
  answer: string;
  updated: string;
  grade: number;
}

type DataTableType = {
  data: CardType[]
}
export const DataTableCards = (props: DataTableType) => {

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
    },
    {
      title: 'Grade',
      dataIndex: 'grade',
    },
  ];
  const dataSource = props.data.map((e, i) => {
    let date = new Date(e.updated).toLocaleDateString('ru')
    return {
      key: i,
      question: e.question,
      answer: e.answer,
      updated: date,
      grade: e.grade,
    }
  })

  return <Table columns={columns} dataSource={dataSource} pagination={false}/>;
}