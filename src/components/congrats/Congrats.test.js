import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapater from '@wojtekmaj/enzyme-adapter-react-17';

import { Congrats } from './Congrats.js';
import { findByTestAttr } from '../../../test/testUtils.js';

Enzyme.configure({ adapter: new EnzymeAdapater() });


/**
 * Factory function to create shallow wrapper for the Congrats component
 * @function setup
 * @param {object} props - component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {} ) => {
    return shallow(<Congrats {...props}/>);
}

test('renders without crashing', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when "success" prop is false', () => {
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');

});

test('renders non-empty congrats message when "success" prop is true', () => {
    const wrapper = setup({success: true});
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});

//Not sure how to accurately test this - currently using PropTypes only
// test('does not throw warning with expected props', () => {
    
// });