import React from 'react';
import { shallow } from 'enzyme'; 
import { findByTestAttr } from '../../../test/testUtils.js';

import { GuessedWords } from './GuessedWords';

test('component renders without crashing', () => {
    const wrapper = shallow(<GuessedWords />);
    const component = findByTestAttr(wrapper, 'component-guessedWords');
    expect(component.length).toBe(1);
});