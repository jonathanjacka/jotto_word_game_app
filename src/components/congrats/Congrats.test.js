import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapater from '@wojtekmaj/enzyme-adapter-react-17';

import { Congrats } from './Congrats.js';

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
    expect(wrapper.length).toBe(1);
});

test('renders no text when "success" prop is false', () => {

});

test('renders non-empty congrats message when "success" prop is true', () => {

});