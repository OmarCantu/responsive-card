import React from 'react';
import { mount } from 'enzyme';

import Card from './Card';
import { CARD_DATA } from '../../mockData';

const { tile, title } = CARD_DATA;
const wrapper = mount(<Card className='card' tile={tile} />);

test('Card has class "card"', () => {
  expect(wrapper.find('Card[className="card"]')).toHaveLength(1);
});

test('Card has only one img tag without a title prop defined', () => {
  expect(wrapper.find('img')).toHaveLength(1);
});

test('Card has no h2 tag without a title prop defined', () => {
  expect(wrapper.find('h2')).toHaveLength(0);
});

test('Card has two img tags with a title prop defined', () => {
  wrapper.setProps({ title });
  expect(wrapper.find('img')).toHaveLength(2);
});

test('Card has one h2 tag with a title prop defined', () => {
  expect(wrapper.find('h2')).toHaveLength(1);
});

test('Component matches Snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});