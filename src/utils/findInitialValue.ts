import {CardType} from '../api/ResponceTypes';
import {title} from '../common/enums/Title';

export const findInitialValue =
  (id: string | undefined, array: Array<CardType>, property: 'Question' | 'Answer', nameBtn: string) => {

  if(nameBtn === title.editeTitleCard){
    const index = array.findIndex(el => el._id === id)
    let str
    property === 'Question' ? str = array[index].question : str = array[index].answer
    return str === '' ? property : str
  } return ''

}
