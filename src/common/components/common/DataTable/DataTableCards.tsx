import React from 'react';
import {Rate, Table} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import './DataTable.css'
import {CardType} from '../../../../api/ResponceTypes';
import {ActionsCards} from '../../Actions/ActionsCards';
import {SortComponent} from '../SortCompomemt/SortComponent';
import {useSearchParams} from 'react-router-dom';
import {sortPacks} from '../../../enums/SortPacks';

interface DataType {
  key: number;
  question: string;
  answer: string;
  updated: JSX.Element;
}

type DataTableType = {
  data: CardType[]
  ownPack?: boolean
}
export const DataTableCards: React.FC<DataTableType> = ({data, ownPack}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let up

  (searchParams.get('sortCards') && searchParams.get('sortCards') === sortPacks.ASC_UPDATE) ? up = true : up = false
  const changeSort = (isUp: boolean) => {
    const queryParam: { sortCards?: string } = {}
    isUp ? queryParam.sortCards = sortPacks.ASC_UPDATE : queryParam.sortCards = sortPacks.DESC_UPDATE
    setSearchParams({
      ...Object.fromEntries(searchParams),
      ...queryParam
    })
  }

const elementForColumn = (element: string) => {
  let src
        data.forEach(el => {
          if (el.question === element){
            if (el.questionImg?.substring(0, 11) === 'data:image/') src = el.questionImg  
          }
        })
  return <div className='block'>
    {src && <div className="image">
       <img src={src} alt='image'/>
    </div>}
  <div className='question'>{element}</div>
  </div>
}

  const columns: ColumnsType<DataType> = [
    {
      title: 'Question',
      dataIndex: 'question',
      className: 'Question',
      render:(question) => {
        return elementForColumn(question)
      }

  },
    {
      title: 'Answer',
      dataIndex: 'answer',
      className: 'Answer',
      render:(question) => {
        return elementForColumn(question)
      }
    },
    {
      title: <SortComponent callback={changeSort} up={up}/>,
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
      question:e.question,
      answer: e.answer,
      updated: <div className='update'>{date}</div>,
      action:
        ownPack ? <div className='action'>
            <Rate value={e.grade}/>
            < ActionsCards data={e}/>
          </div> :
          <>
            <Rate value={e.grade}/>
          </>,
    }
  })

  return <Table columns={columns} dataSource={dataSource} pagination={false}/>;
}