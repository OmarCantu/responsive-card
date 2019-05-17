import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

const wrapper = shallow(<App />);

test('renders without crashing', () => {
  expect(wrapper).toHaveLength(1);
});

