import { combineReducers } from 'redux';
import { successReducer as success } from './successReducer';
import { guessedWordsReducer as guessedWords } from './guessedWordsReducer';
import { secretWordReducer as secretWord } from './secretWordReducer';

export default combineReducers({ success, guessedWords, secretWord });
