import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapater from '@wojtekmaj/enzyme-adapter-react-17';

import { Congrats } from './Congrats.js';

Enzyme.configure({ adapter: new EnzymeAdapater() });

test('renders without crashing', () => {
    const wrapper = shallow(<Congrats />);
    expect(wrapper.length).toBe(1);
});

test('renders no text when "success" prop is false', () => {

});

test('renders non-empty congrats message when "success" prop is true', () => {

});