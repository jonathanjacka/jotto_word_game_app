import { actionTypes } from '../actions/index';
import { successReducer } from './successReducer';

//when previous state is undefined - initial state - returns false
test('When previous state is undefined, returns false', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

//unknown action type => return previous state
test('When action type is unknown, return previous state', () => {
  const newState = successReducer(false, { type: 'unknown' });
  expect(newState).toBe(false);
});

//return true when action_type is CORRECT_GUESS
test('Returns true when action type is CORRECT_GUESS', () => {
  const newState = successReducer(false, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
});
