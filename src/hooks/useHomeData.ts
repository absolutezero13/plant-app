import { useDispatch, useSelector } from 'react-redux';
import { HomeState } from '../redux/types';
import { getCategories, getQuestions } from '../redux/actions';
import { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

type TAppReducer = {
  appReducer: HomeState;
};

const useHomeData = () => {
  const { categories, questions } = useSelector<TAppReducer>(
    state => state.appReducer
  ) as HomeState;
  const dispatch = useDispatch<
    ThunkDispatch<HomeState, undefined, AnyAction>
  >();

  const fetchCategories = () => dispatch(getCategories());
  const fetchQuestions = () => dispatch(getQuestions());

  useEffect(() => {
    fetchCategories();
    fetchQuestions();
  }, []);

  return {
    categories: categories.data,
    questions: questions.data,
    categoryPending: categories.pending,
    questionsPending: questions.pending
  };
};

export default useHomeData;
