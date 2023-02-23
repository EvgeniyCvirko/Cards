import React, {ChangeEvent, useState} from 'react';
import s from './OwnSlider.module.css'
import {Input, Slider} from 'antd';

type SubTitlePropsType = {}
export const OwnSlider = (props: SubTitlePropsType) => {
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(110)
  const onChange = (value: [number, number]) => {
    setMinValue(value[0]);
    setMaxValue(value[1]);
  };
  const changeMinInput = (value: ChangeEvent<HTMLInputElement>) => {
    setMinValue(+value.currentTarget.value)
  };
  const changeMaxInput = (value: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(+value.currentTarget.value)
  };


  return <div className={s.slider}>
    <Input style={{width: '45px', marginRight: '5px'}}
           size="small"
           value={minValue}
           onChange={changeMinInput}
    />
    <Slider style={{flexBasis: '100%'}}
            range
            value={[minValue, maxValue]}
            min={0}
            max={110}
            defaultValue={[0, 110]}
            onChange={onChange}
    />
    <Input style={{width: '50px', marginLeft: '5px'}}
           size="small"
           value={maxValue}
           onChange={changeMaxInput}
    />
  </div>
}