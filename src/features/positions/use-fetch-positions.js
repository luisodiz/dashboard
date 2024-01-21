import {useEffect} from 'react';
import {addPositions} from './positions-slice';
import data from '../../mock/data.json';
import {useDispatch} from 'react-redux';

export const useFetchPositions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPositions(data))
  }, [dispatch]);
};