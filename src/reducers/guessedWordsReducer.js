//testing done in integration.test.js

import { actionTypes } from '../actions';

/**
 * @function guessedWordsReducer
 * @param {array} state - array of words guessed
 * @param {object} action - action be be reduced
 * @returns {array} - new guessedWords state
 */
export const guessedWordsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};
