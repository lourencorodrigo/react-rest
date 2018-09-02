import React from 'react';
import Test from './Test';
import { shallow, mount } from 'enzyme';
const ReactTestRenderer = require('react-test-renderer');

it('should render without throwing an error', function () {
  expect(shallow(<Test name="Rodrigo" />).contains(
    <h1>Hello, Rodrigo!</h1>
  )).toBe(true);
});

it('should mount in a full DOM', function() {
  expect(mount(<Test name="Rodrigo" />).find('h1').length).toBe(1);
});

it('should render to static HTML', () => {
  const wrapper = shallow(<Test name="Rodrigo" />);
  expect(wrapper.find('h1').text()).toEqual('Hello, Rodrigo!');
});

it('Should compare the component with a snapshot', () => {
  const component = ReactTestRenderer.create(<Test name="Rodrigo" />);
  const json = component.toJSON();
  expect(json).toMatchSnapshot();
});