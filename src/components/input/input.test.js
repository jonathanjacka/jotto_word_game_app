import React from 'react';
import { findByTestAttr } from '../../../test/testUtils';
import { shallow } from 'enzyme';
import { Input } from './input';

test('renders without crashing', () => {
    const wrapper = shallow(<Input />);
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length()).toBe(1);
});

