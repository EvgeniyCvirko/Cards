import React, {useEffect} from 'react'
import s from './CheckEmail.module.css'
import img from '../../../common/components/assets/forgot/Check.png'
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../utils/hooks';
import {PATH} from '../../../routing/Pages';
import {setAppStatus} from '../../../app/AppReducer';
import cs from '../../../routing/Pages.module.css';
import {MyButton} from '../../../common/components/common/Button/MyButton';

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
    <div className={cs.block}>
      <div className={cs.title}>Check Email</div>
      <div className={s.formCheckEmail}>
        <div>
          <img src={img} alt={'image'}/>
        </div>
        <div className={s.text}>
          We’ve sent an email with instructions to <span>{email}</span>
        </div>
        <MyButton name="Back to login" callback={backLoginHandler}/>
      </div>
    </div>
  );
}