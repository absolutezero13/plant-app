import { PayloadAction } from '@reduxjs/toolkit';
import constants from './contants';
import { HomeState } from './types';

const {
  GET_CATEGORIES,
  GET_QUESTIONS,
  CATEGORIES_PENDING,
  QUESTIONS_PENDING,
  QUESTIONS_ERROR,
  CATEGORIES_ERROR
} = constants;

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
    case CATEGORIES_PENDING:
      return {
        ...state,
        categories: {
          ...state.categories,
          pending: true
        }
      };
    case QUESTIONS_PENDING:
      return {
        ...state,
        questions: {
          ...state.questions,
          pending: true
        }
      };
    case QUESTIONS_ERROR:
      return {
        ...state,
        questions: {
          ...state.questions,
          error: action.payload
        }
      };
    case CATEGORIES_ERROR:
      return {
        ...state,
        categories: {
          ...state.categories,
          error: action.payload
        }
      };
    default:
      return state;
  }
}

export default reducer;
