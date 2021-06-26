import { actionTypes } from '../actions/index';

/**
 * @function secretWordReducer
 * @param {string} state - state before reducer
 * @param {object} action - action sent to reducer
 * @returns {string} - new state (secret word payload from action)
 */
export const secretWordReducer = (state = '', action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};
