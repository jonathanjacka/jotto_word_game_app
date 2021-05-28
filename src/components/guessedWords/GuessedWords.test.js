import React from 'react';
import { shallow } from 'enzyme'; 
import { findByTestAttr } from '../../../test/testUtils.js';

import { GuessedWords } from './GuessedWords';

const defaultProps = {
    GuessedWords: [{
        guessedWord: 'train',
        letterMatchCount: 3
    }]
};

/**
 * Factory function to create shallow wrapper for the Congrats component
 * @function setup
 * @param {object} props - component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setUp = (props = {}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps}/>);
}



test('component renders without crashing', () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, 'component-guessedWords');
    expect(component.length).toBe(1);
});