import React, {ChangeEvent, useState} from 'react';
import s from './OwnSlider.module.css'
import {Input, Slider} from 'antd';
import {useSearchParams} from 'react-router-dom';

export const OwnSlider = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(110)
  
  const onChange = (value: [number, number]) => {
    setMinValue(value[0]);
    setMaxValue(value[1]);
  };
  const onAfterChange = (value: [number, number]) => {
    setMinValue(value[0]);
    setMaxValue(value[1]);
    changeSearchSize(value[0],value[1] )
  };
  const changeMinInput = (value: ChangeEvent<HTMLInputElement>) => {
    setMinValue(+value.currentTarget.value)
    changeSearchSize(+value.currentTarget.value,maxValue)
  };
  const changeMaxInput = (value: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(+value.currentTarget.value)
    changeSearchSize(minValue,+value.currentTarget.value )
  };
 const changeSearchSize = (minV:number, maxV: number) => {
   const queryParams: { min?: number, max?: number} = {}
   minV === 0 ?  searchParams.delete('min') : queryParams.min = minV
   maxV === 110 ? searchParams.delete('max') : queryParams.max = maxV
   // @ts-ignore
   setSearchParams({
     ...Object.fromEntries(searchParams),
     ...queryParams,
   })
 }

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
            min={0}
            max={110}
            defaultValue={[0, 110]}
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