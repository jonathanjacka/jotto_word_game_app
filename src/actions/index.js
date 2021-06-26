import axios from 'axios';
import { getLetterMatchCount } from '../helpers/index';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 *    and CONDITIONALLY CORRECT_GUESS action
 * @function guessWord - guessWord
 * @param {string} guessedWord - the word the user guesses from input
 * @returns {function} - Redux Thunk function
 */
export const guessWord = (guessedWord) => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};

// /**
//  * @function correctGuess - not longer needed as this will be dispatched in guessWord() action creator above
//  * @returns {object} - action object with type 'CORRECT_GUESS'
//  */
// export const correctGuess = () => ({ type: actionTypes.CORRECT_GUESS });

/**
 * Returns Redux Thunk function that initiates an axios request
 *  and dispatches the response as a 'SET_SECRET_WORD' action
 * @returns {function} - redux thunk function
 */
export const getSecretWord = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3030').then((response) => {
      dispatch({
        type: actionTypes.SET_SECRET_WORD,
        payload: response.data,
      });
    });
  };
};
