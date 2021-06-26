import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import App from './App';
import { findByTestAttr, storeFactory } from '../../test/testUtils';

//activate global mock to make sure getSecretWord actually run network call
jest.mock('../actions');

/**
 * Creates wrapper with specified inital conditions,
 * then submit a guessed word of 'train'
 * @function
 *
 * @param {object} state - Initial conditions
 * @returns {Wrapper} - Enzyme wrapper of mounted App component
 */

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);

  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

  //add value to input box
  const inputBox = findByTestAttr(wrapper, 'input-box');
  inputBox.simulate('change', { target: { value: 'train' } });

  //simulate click on submit button
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  submitButton.simulate('click', { preventDefault() {} });

  return wrapper;
};

describe('no words have been guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [],
    });
  });

  test('Creates Guessed words table with one row', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(1);
  });
});

describe('some words have been guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'sorts', letterMatchCount: 2 },
        { guessedWord: 'yards', letterMatchCount: 3 },
      ],
    });
  });

  test('Creates Guesssed words table with four rows', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(4);
  });
});

describe('correct word is guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'sorts', letterMatchCount: 2 },
        { guessedWord: 'yards', letterMatchCount: 3 },
      ],
    });

    //add entry of secretWord
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'party' } };
    inputBox.simulate('change', mockEvent);

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });
  });

  test('Creates a guessed words table with five rows', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(5);
  });

  test('Success state updates to true', () => {});

  test('displays congrats component', () => {
    const congratsMessage = findByTestAttr(wrapper, 'congrats-message');
    expect(congratsMessage).toHaveLength(1);
  });

  test('does not display input component input box', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    expect(inputBox.exists()).toBe(false);
  });

  test('does not display input component submit button', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.exists()).toBe(false);
  });
});
