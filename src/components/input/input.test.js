import React from 'react';
import { findByTestAttr } from '../../../test/testUtils';
import { shallow } from 'enzyme';
import { Input } from './input';

/**
 * Factory function to create shallow wrapper for the Input component
 * @function setup
 * @param {Object} props - component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (secretWord = {}) => {
    const setupProps = {...secretWord};
    return shallow(<Input {...setupProps}/>)
}

//update mocking to be able to test change to state with destructuring - see 'state updates with value of input box on change'
const mockSetCurrentGuess = jest.fn();

jest.mock('react', () => {
    return (
        {...jest.requireActual('react'), 
        useState: (initialState) => [initialState, mockSetCurrentGuess]
    })
});


test('renders without crashing', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);
});

describe('state-controlled input field', () => {

    let wrapper; 
    let originalUseState;
    
    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        wrapper = setup();
        originalUseState = React.useState;
    });
    afterEach(() => {
        React.useState = originalUseState;
    });

    test('state updates with value of input box on change', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = { target: { value: 'poopie' } };
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('poopie');
    });

    test('state updates with empty string on submit', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button');

        submitButton.simulate("click", { preventDefault() {}});
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    });
});

