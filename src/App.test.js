//import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.length).toBe(1);

});
