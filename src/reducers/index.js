import { combineReducers } from 'redux';
import { successReducer as success } from './successReducer';
import { guessedWordsReducer as guessedWords } from './guessedWordsReducer';

export default combineReducers({ success, guessedWords });
