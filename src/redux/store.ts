import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({ appReducer });

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});
