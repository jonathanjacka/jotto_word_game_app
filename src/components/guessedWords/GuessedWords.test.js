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

describe('if there are no words guessed', () =>{
    let wrapper;

    beforeEach(() => {
        wrapper = setUp({GuessedWords: []});
    });
    
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders instructions to guess a word', () => {
        const component = findByTestAttr(wrapper, 'component-guess-instructions');
        expect(component.text().length).not.toBe(0);
    });
});

describe('if there have been words guessed', () => {

});