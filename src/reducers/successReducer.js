import { actionTypes } from '../actions/index';

/**
 * @function successReducer
 * @param {array} state - list of guessed words
 * @param {object} action - action to be reduced
 * @returns {boolean} - new success state
 */
export const successReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
