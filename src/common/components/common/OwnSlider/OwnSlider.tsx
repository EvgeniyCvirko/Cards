import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './OwnSlider.module.css'
import {Input, Slider} from 'antd';
import {useSearchParams} from 'react-router-dom';
import {useAppSelector} from '../../../../utils/hooks';

export const OwnSlider = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const minPage = useAppSelector(state => state.packs.minCardsCount)
  const maxPage = useAppSelector(state => state.packs.maxCardsCount)
  const minParam = Number(searchParams.get('min'))
  const maxParam = Number(searchParams.get('max'))
  let min: number, max: number
  const [value, setValue] = useState<Array<number>>([
    minParam ? min = minParam : min = minPage,
    maxParam ? max = maxParam : max = maxPage
  ])

  const onChange = (value: [number, number]) => {
    setValue(value)
  };
  const onAfterChange = (value: [number, number]) => {
    setValue(value)
    changeSearchSize(value[0], value[1])
  };
  const changeMinInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue([+e.currentTarget.value, value[1]])
    changeSearchSize(+e.currentTarget.value, value[1])
  };
  const changeMaxInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue([value[0], +e.currentTarget.value])
    changeSearchSize(value[0], +e.currentTarget.value)
  };
  const changeSearchSize = (minV: number, maxV: number) => {
    const queryParams: { min?: string, max?: string } = {}
    minV === minPage ? searchParams.delete('min') : queryParams.min = String(minV)
    maxV === maxPage ? searchParams.delete('max') : queryParams.max = String(maxV)
    setSearchParams({
      ...Object.fromEntries(searchParams),
      ...queryParams,
    })
  }
  useEffect(() => {
    setValue([min, max])
  }, [min, max])

  return <div className={s.slider}>
    <Input style={{width: '45px', marginRight: '5px'}}
           size="small"
           value={value[0]}
           onChange={changeMinInput}
    />
    <Slider style={{flexBasis: '100%'}}
            range
            step={1}
            value={[value[0], value[1]]}
            min={minPage}
            max={maxPage}
            defaultValue={[min, max]}
            onChange={onChange}
            onAfterChange={onAfterChange}
    />
    <Input style={{width: '50px', marginLeft: '5px'}}
           size="small"
           value={value[1]}
           onChange={changeMaxInput}
    />
  </div>
}