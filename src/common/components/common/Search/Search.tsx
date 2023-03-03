import React, {ChangeEvent, useEffect, useState} from 'react';
import {Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {useDebounce} from '../../../../utils/hooks';
import {useSearchParams} from 'react-router-dom';

type SearchPropsType = {
  search: 'packName' | 'userName' | 'cardQuestion'
}
export const Search: React.FC<SearchPropsType> = ({search}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState('')
  const debounceValue = useDebounce(value, 700)
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    (setValue(e.currentTarget.value))
  }
  useEffect(() => {
    const queryParams: { packName?: string; cardQuestion?: string; userName?: string } = {}
    if (debounceValue === '') {
      searchParams.delete(search)
    } else {
     if (search === 'packName') queryParams.packName = debounceValue
     if (search === 'userName') queryParams.userName = debounceValue
     if (search === 'cardQuestion') queryParams.cardQuestion = debounceValue
    }
        setSearchParams({
          ...Object.fromEntries(searchParams),
          ...queryParams,
        })
  }, [debounceValue])

  return <Input placeholder="Provide your text"
                prefix={<SearchOutlined/>}
                onChange={changeHandler}
                allowClear
                value={value}
  />

}