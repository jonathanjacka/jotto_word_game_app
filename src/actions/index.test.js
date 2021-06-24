import moxios from 'moxios';
import { getSecretWord, correctGuess, actionTypes } from './index';

describe('correct guess', () => {
  test('returns an action with type "CORRECT_GUESS"', () => {
    const action = correctGuess();
    expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS });
  });
});

describe('getWordWord', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('secretWord is returned', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'party',
      });
    });

    // TODO: Update to test app in Redux / context sections
    return getSecretWord().then((secretWord) => {
      expect(secretWord).toBe('party');
    });
  });
});
