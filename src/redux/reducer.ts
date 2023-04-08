import { PayloadAction } from '@reduxjs/toolkit';
import constants from './contants';
import { HomeState } from './types';

const { GET_CATEGORIES, GET_QUESTIONS } = constants;

const initialState = {
  categories: {
    data: [],
    pending: false,
    error: null
  },
  questions: {
    data: [],
    pending: false,
    error: null
  }
} as HomeState;

function reducer(state = initialState, action: PayloadAction) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: {
          data: action.payload,
          pending: false,
          error: null
        }
      };
    case GET_QUESTIONS:
      return {
        ...state,
        questions: {
          data: action.payload,
          pending: false,
          error: null
        }
      };
    default:
      return state;
  }
}

export default reducer;
