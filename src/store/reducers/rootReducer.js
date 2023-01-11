import {combineReducers} from 'redux';
import { createReducer } from './create';
import { authReducer } from './auth';
import quizReducer from './quiz';

export default combineReducers({
  quiz: quizReducer,
  create: createReducer,
  auth: authReducer,
});