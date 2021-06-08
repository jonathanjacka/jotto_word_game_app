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

const setup = (props = {}) => {
    const setupProps = {...props};
    return shallow(<Input {...setupProps}/>)
}

test('renders without crashing', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);
});

