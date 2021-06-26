import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions/index';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';
  const successfulGuess = secretWord;
  describe('No words guessed', () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test('Correctly updates state when guess word IS NOT correct', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };

      expect(newState).toEqual(expectedState);
    });
    test('Correctly updates state when guess word IS correct', () => {
      store.dispatch(guessWord(successfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: successfulGuess,
            letterMatchCount: 5,
          },
        ],
      };

      expect(newState).toEqual(expectedState);
    });
  });
  describe('Some words have already been guessed', () => {
    const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
    const initialState = { guessedWords, secretWord };
    let store;

    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test('Correctly updates state when guess word IS NOT correct', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfulGuess, letterMatchCount: 3 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test('Correctly updates state when guess word IS correct', () => {
      store.dispatch(guessWord(successfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: successfulGuess, letterMatchCount: 5 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
