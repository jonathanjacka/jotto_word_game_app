//import { render, screen } from '@testing-library/react';
import App from './App';
import { mount } from 'enzyme';
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
  //need to use mount, b/c useEffect is not run on 'shallow' - https://github.com/enzymejs/enzyme/issues/2086
  //Package to solve this issue here, though I'm not going to use this rn - https://www.npmjs.com/package/jest-react-hooks-shallow
  return mount(<App />);
};

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

describe('Get secret Word', () => {
  beforeEach(() => {
    //clear the mock calls from previous tests
    mockGetSecretWord.mockClear();
  });
  test('Secret word is retrieved on app mount', () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test('Secret word is not retrieved on app update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    //using setProps b/c wrapper.update() doesn't trigger useEffect
    //http://github.com/enzymejs/enzyme/issues/2254
    wrapper.setProps();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
