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

test('renders without crashing', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);
});

describe('state-controlled input field', () => {
    test('state updates with value of input box on change', () => {
        const mockSetCurrentGuess = jest.fn();
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

        const wrapper = setup();
        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = { target: { value: 'poopie' } };
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('poopie');
    });
});

