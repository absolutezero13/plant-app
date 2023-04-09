import { Alert } from 'react-native';
import axios from 'axios';
import constants, { BASE_URL } from './contants';
import { ThunkActionType, ThunkDispatchType } from './types';

export const getCategories = (): ThunkActionType => {
  return async (dispatch: ThunkDispatchType) => {
    try {
      dispatch({ type: constants.CATEGORIES_PENDING });
      const res = await axios.get(`${BASE_URL}/getCategories`);
      const categories = res.data.data;

      dispatch({ type: constants.GET_CATEGORIES, payload: categories });
    } catch (error) {
      dispatch({
        type: constants.CATEGORIES_ERROR,
        payload: {
          error,
          pending: false,
          data: []
        }
      });
      Alert.alert('Error', error?.message || 'Something went wrong');
    }
  };
};

export const getQuestions = (): ThunkActionType => {
  return async (dispatch: ThunkDispatchType) => {
    try {
      dispatch({ type: constants.QUESTIONS_PENDING });
      const res = await axios.get(`${BASE_URL}/getQuestions`);
      const questions = res.data;

      return dispatch({ type: constants.GET_QUESTIONS, payload: questions });
    } catch (error) {
      dispatch({
        type: constants.QUESTIONS_ERROR,
        payload: {
          error,
          pending: false,
          data: []
        }
      });
      Alert.alert('Error', error?.message || 'Something went wrong');
    }
  };
};
