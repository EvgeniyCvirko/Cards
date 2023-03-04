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
  minParam ? min = minParam : min = minPage
  maxParam ? max = maxParam : max = maxPage
  const [minValue, setMinValue] = useState(min)
  const [maxValue, setMaxValue] = useState(max)

  const onChange = (value: [number, number]) => {
    setMinValue(value[0]);
    setMaxValue(value[1]);
  };
  const onAfterChange = (value: [number, number]) => {
    setMinValue(value[0]);
    setMaxValue(value[1]);
    changeSearchSize(value[0], value[1])
  };
  const changeMinInput = (value: ChangeEvent<HTMLInputElement>) => {
    setMinValue(+value.currentTarget.value)
    changeSearchSize(+value.currentTarget.value, maxValue)
  };
  const changeMaxInput = (value: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(+value.currentTarget.value)
    changeSearchSize(minValue, +value.currentTarget.value)
  };
  const changeSearchSize = (minV: number, maxV: number) => {
    const queryParams: { min?: number, max?: number } = {}
    minV === minPage ? searchParams.delete('min') : queryParams.min = minV
    maxV === maxPage ? searchParams.delete('max') : queryParams.max = maxV
    // @ts-ignore
    setSearchParams({
      ...Object.fromEntries(searchParams),
      ...queryParams,
    })
  }
  useEffect(() => {
    setMinValue(min)
    setMaxValue(max)
  }, [min, max])

  return <div className={s.slider}>
    <Input style={{width: '45px', marginRight: '5px'}}
           size="small"
           value={minValue}
           onChange={changeMinInput}
    />
    <Slider style={{flexBasis: '100%'}}
            range
            step={1}
            value={[minValue, maxValue]}
            min={minPage}
            max={maxPage}
            defaultValue={[min, max]}
            onChange={onChange}
            onAfterChange={onAfterChange}
    />
    <Input style={{width: '50px', marginLeft: '5px'}}
           size="small"
           value={maxValue}
           onChange={changeMaxInput}
    />
  </div>
}