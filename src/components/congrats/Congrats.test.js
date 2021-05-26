import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapater from '@wojtekmaj/enzyme-adapter-react-17';

import { Congrats } from './Congrats.js';

Enzyme.configure({ adapter: new EnzymeAdapater() });

test('renders without crashing', () => {
    const wrapper = shallow(<Congrats />);
    expect(wrapper.length).toBe(1);
});