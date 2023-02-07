import React from 'react'
import './CheckEmail.css'
import img from '../../../components/assets/forgot/Check.png'
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../../utils/hooks';
import {PATH} from '../../../routing/Pages';

export const CheckEmail = () => {
  const email = useAppSelector(state => state.forgotPassword.email)
  const navigate = useNavigate()
  const backLoginHandler = () => {
    navigate(PATH.LOGIN)
  };
  console.log('chek')
  return (
    <div className={s.formCheckEmail}>
      <h1>Check Email</h1>
      <div >
        <img src={img} alt={'image'}/>
      </div>
      <div className={s.text}>
        We’ve sent an email with instructions to <span>{email}</span>
      </div>
      <Button name='Back to login' callback={backLoginHandler}/>
    </div>
  );
}