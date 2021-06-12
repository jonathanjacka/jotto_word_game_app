import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import { findByTestAttr } from '../../test/testUtils';

/**
 * Creates wrapper with specified inital conditions,
 * then submit a guessed word of 'train'
 * @function
 *
 * @param {object} state - Initial conditions
 * @returns {Wrapper} - Enzyme wrapper of mounted App component
 */

const setup = (state = {}) => {
  //TODO: Apply state
  const wrapper = mount(<App />);

  //add value to input box
  const inputBox = findByTestAttr(wrapper, 'input-box');
  inputBox.simulate('change', { target: { value: 'train ' } });

  //simulate click on submit button
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  submitButton.simulate('click', { preventDefault() {} });
};

describe('no words have been guessed', () => {});

describe('some words have been guessed', () => {});

describe('correct word is guessed', () => {});
