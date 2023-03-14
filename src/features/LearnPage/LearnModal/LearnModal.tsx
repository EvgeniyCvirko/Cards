import s from './LearnModal.module.css';
import React, {useState} from 'react';
import {useAppDispatch} from '../../../utils/hooks';
import {CardType} from '../../../api/ResponceTypes';
import {Button} from 'antd';
import {SuperInput} from '../../../common/components/common/SuperInput/SuperInput';
import {changeGradeCard} from '../../Card/CardsReducer';

type LearnModalPropsType = {
  card: CardType
}
export const LearnModal: React.FC<LearnModalPropsType> = ({card}) => {
  const [loadings, setLoadings] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0)
  const [grade, setGrade] = useState<number>(1)
  const dispatch = useAppDispatch()
  const [isShow, setIsShow] = useState<boolean>(false)

  const changeGrade = async () => {
    setLoadings(true)
    const result = await dispatch(changeGradeCard({grade, card_id: card._id}))
    if (result.meta.requestStatus) {
      setLoadings(false)
      setIsShow(!isShow)
    }
  }
  const rateYourself = [
    {id: 1, value: 1, name: 'Did not know'},
    {id: 2, value: 2, name: 'Forgot'},
    {id: 3, value: 3, name: 'A lot of thought'},
    {id: 4, value: 4, name: 'Сonfused'},
    {id: 5, value: 5, name: 'Knew the answer'},
  ]
  return <div className={s.learnModal}>
    <div className={s.question}>
      <b>Question :</b> {card.question}
    </div>
    <div className={s.counter}>Number of attempts to answer a question: <b>{count}</b></div>
    {!isShow && <Button onClick={() => setIsShow(!isShow)}>Show answer</Button>}
    {isShow && <>
        <div className={s.answer}>
            <b>Answer :</b> {card.answer}
        </div>
        <div className={s.rateYourself}>Rate yourself:</div>
        <SuperInput options={rateYourself} callback={setGrade} grade={1}/>
        <Button type="primary" loading={loadings} onClick={changeGrade}>Next</Button>
    </>}
  </div>
}