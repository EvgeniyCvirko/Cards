import React from 'react';
import {Pagination} from 'antd';
import s from './PaginationComponent.module.css'

type PaginationComponentType = {
  total: number
  changePageCount: (page: number, pageCount: number) => void

}

export const PaginationComponent = (props: PaginationComponentType) => {
  const changePageCount = (page: number, pageCount: number) => {
    props.changePageCount(page, pageCount)
  }

  return <div className={s.pagination}><Pagination
    defaultCurrent={1}
    defaultPageSize={5}
    total={props.total}
    onChange={changePageCount}
    pageSizeOptions={[5, 11, 25, 100]}
  /></div>;
}