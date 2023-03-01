import React, {useState} from 'react';
import {Pagination} from 'antd';
import s from './PaginationComponent.module.css'
import {startPageCount} from '../../../constants/projectConstant';
import {useSearchParams} from 'react-router-dom';

type PaginationComponentType = {
  total: number
}

export const PaginationComponent = (props: PaginationComponentType) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageCount, setPageCount] = useState<number>(Number(searchParams.get('pageCount')) || startPageCount)
  const [page, setPage] = useState<number>(Number(searchParams.get('page')))

  const changePageCount = (page: number, pageCount: number) => {
  setPage(page)
    setPageCount(pageCount)
    const queryParams: { pageCount?: string, page?: string } = {}
    queryParams.pageCount = String(pageCount)
    queryParams.page = String(page)
    setSearchParams({
      ...Object.fromEntries(searchParams),
      ...queryParams,
    })
  }

  return <div className={s.pagination}><Pagination
    defaultCurrent={page}
    defaultPageSize={pageCount}
    total={props.total}
    onChange={changePageCount}
    pageSizeOptions={[5, 11, 25, 100]}
  /></div>;
}