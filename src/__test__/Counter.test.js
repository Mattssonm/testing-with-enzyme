import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Counter from '../counter';

describe('Counter test suite', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Counter />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should update the value by 1', () => {
    const wrapper = shallow(<Counter />);
    const instance = wrapper.instance();
    expect(wrapper.state('value')).toBe(0);
    instance.handleClickIncrease();
    expect(wrapper.state('value')).toBe(1);
  });
  it('should decrease the value by 1', () => {
    const wrapper = shallow(<Counter />);
    const instance = wrapper.instance();
    expect(wrapper.state('value')).toBe(0);
    instance.handleClickDecrease();
    expect(wrapper.state('value')).toBe(-1);
  });
  it('Triggers a new input as the user types', () => {
    const onSearchStub = jest.fn();
    const wrapper = shallow(<Counter onChange={onSearchStub}/>);
    const searchField = wrapper.find('input');
    const event1 = 5;
    const event2 = 'dog';

    searchField.simulate('change', event1);
    searchField.simulate('change', event2);
    assert.equal(onSearchStub.calledTwice, true);
  });
  it('textinput with number', () => {
    const wrapper = shallow(<Counter />);
    const event = 5;
    const instance = wrapper.instance();
    expect(wrapper.state('value')).toBe(0);
    instance.handleChange(event);
    expect(wrapper.state('value')).toBe(5);
  });
});

// förutom input test så vad mer kan jag testa?