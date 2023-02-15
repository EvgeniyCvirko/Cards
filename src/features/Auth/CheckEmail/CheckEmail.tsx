import React, {useEffect} from 'react'
import s from './CheckEmail.module.css'
import img from '../../../components/assets/forgot/Check.png'
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {PATH} from '../../../routing/Pages';
import {setAppStatus} from '../../../app/AppReducer';
import {Button} from '../../../components/common/Button';

export const CheckEmail = () => {
  const email = useAppSelector(state => state.forgotPassword.email)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const backLoginHandler = () => {
    navigate(PATH.LOGIN)
  };

  useEffect(() => {
    dispatch(setAppStatus({status: 'idle'}));
  }, [dispatch]);

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