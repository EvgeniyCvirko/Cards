import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './CardModal.module.css'
import {Input, Modal, Select} from 'antd';
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {setOpenCardPack} from '../ModalReducer';
import {findInitialValue} from '../../../utils/findInitialValue';
import {title} from '../../../common/enums/Title';
import {createCard, updateCard} from '../../Card/CardsReducer';

export type AddCardHelperType = { setLoading: (loading: boolean) => void }

type PackModalPropsType = {
  open: boolean,
  titleModal: string,
}

export const CardModal: React.FC<PackModalPropsType> = ({open, titleModal}) => {
  const dispatch = useAppDispatch()
  const _id = useAppSelector(state => state.modal._id)
  const cards = useAppSelector(state => state.cards.cards)
  const cardsPack_id = useAppSelector(state => state.cardsParam.cardsPack_id)
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState(findInitialValue(_id, cards, 'Question', titleModal))
  const [answer, setAnswer] = useState(findInitialValue(_id, cards, 'Answer', titleModal))

  const addCard = async ( helper: AddCardHelperType) => {
    let result
    if (titleModal === title.addTitleCard) {
      result = await dispatch(createCard({cardsPack_id, question,answer}))
      if (result.meta.requestStatus) {
        helper.setLoading(false)
        handleCancel()
      }
    } else {
      if (_id) {
       result = await dispatch(updateCard({_id, question,answer}))
        if (result.meta.requestStatus) {
          helper.setLoading(false)
          handleCancel()
        }
      }
    }
  }
  const handleOk = () => {
    addCard( {setLoading})
    setLoading(true)
  };
  const handleChange = (value: string) => {

  };
  const changeQuestion = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.currentTarget.value)
  }

  const changeAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    setAnswer (event.currentTarget.value)
  }
  const handleCancel = () => {
    dispatch(setOpenCardPack({state: {title: '', open: false}}));
  };
  const onPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    event.code === 'Enter' && handleOk()
  }

  return <div>
    <Modal className={s.modal}
           title={titleModal}
           open={open}
           onOk={handleOk}
           confirmLoading={loading}
           onCancel={handleCancel}
           okText="Save"
    >
      <div>
        <Select
        defaultValue="Choose a question format"
        size='large'
        style={{width: '100%', marginTop:25}}
        onChange={handleChange}
        options={[
          {value: '1', label:'Text'},
          {value: '2', label:'Image'},
        ]}
      />
      </div>
      <div className={s.input}>
        <Input placeholder="Question"
               size="large"
               value={question}
               onChange={changeQuestion}
               onKeyPress={onPressHandler}
        />
      </div>
      <div className={s.input}>
        <Input placeholder="Answer"
               size="large"
               value={answer}
               onChange={changeAnswer}
               onKeyPress={onPressHandler}
        />
      </div>
    </Modal>
  </div>
}