import moxios from 'moxios';
import { getSecretWord } from './index';
import { storeFactory } from '../../test/testUtils';

//Removed because we're no longer using correctGuess as standalone function, now part of guessedWord()
// describe('correct guess', () => {
//   test('returns an action with type "CORRECT_GUESS"', () => {
//     const action = correctGuess();
//     expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS });
//   });
// });

describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('secretWord is returned', () => {
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'party',
      });
    });

    return store.dispatch(getSecretWord()).then(() => {
      const secretWord = store.getState().secretWord;
      expect(secretWord).toBe('party');
    });
  });
});
