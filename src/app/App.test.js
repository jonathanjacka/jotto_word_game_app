//import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils.js';
import { getSecretWord as mockGetSecretWord } from '../actions';

//activate global mock to make sure getSecretWord actually run network call
jest.mock('../actions');

/**
 * Factory function to create shallow wrapper for the Input component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App />);
};

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});
