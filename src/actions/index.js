import axios from 'axios';
import { getLetterMatchCount } from '../helpers/index';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
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

export const getSecretWord = () => {
  //TODO: write actual action in redux/context sections
  return axios.get('http://localhost:3030').then((response) => response.data);
};
