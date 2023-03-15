import {AppRootStateType, store} from '../app/store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export const useDebounce = <T>(value: T, delay: number):T => {
  const [debounceValue, setDebounceValue] = useState<T>(value)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debounceValue

}