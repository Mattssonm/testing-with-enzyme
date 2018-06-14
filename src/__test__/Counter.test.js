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
  it(' makes sure increase button render', () => {
    let wrapper = shallow(<Counter/>)
    const increaseBtn = wrapper.find('button').at(0).text();
    expect(increaseBtn).toEqual('Increase');
  });
  it(' makes sure decrease button render', () => {
    let wrapper = shallow(<Counter/>)
    const decreaseBtn = wrapper.find('button').at(1).text();
    expect(decreaseBtn).toEqual('Decrease');
  });
  it(' makes sure inputfield render ', () => {
    let wrapper = shallow(<Counter/>)
    const counterInput = wrapper.find('input').at(0).length;
    expect(counterInput).toBe(1)
  });
  it(' should update the value by 1', () => {
    const wrapper = shallow(<Counter />);
    const instance = wrapper.instance();
    expect(wrapper.state('value')).toBe(0);
    instance.handleClickIncrease();
    expect(wrapper.state('value')).toBe(1);
  });
  it(' should decrease the value by 1', () => {
    const wrapper = shallow(<Counter />);
    const instance = wrapper.instance();
    expect(wrapper.state('value')).toBe(0);
    instance.handleClickDecrease();
    expect(wrapper.state('value')).toBe(-1);
  });
  it(' works when user inputs number', () => {
    let wrapper = shallow(<Counter />);
    const input = wrapper.find('input').at(0)
    input.simulate('change', { target: { value: 3 } })
    expect(wrapper.state('value')).toBe(3)
  })
  it(' works when user inputs string and converts it to number', () => {
    let wrapper = shallow(<Counter />);
    const input = wrapper.find('input').at(0)
    input.simulate('change', { target: { value: '52' } })
    expect(wrapper.state('value')).toBe(52)
  })
  it(' works when user inputs invalid string', () => {
    let wrapper = shallow(<Counter />);
    const inputField = wrapper.find('input').at(0)
    inputField.simulate('change', { target: { value: 'Glad Sommar' } })
    expect(wrapper.state('value')).toBe(0)
  })
  it(' works when user inputs negative numbers', () => {
    let wrapper = shallow(<Counter />);
    const inputField = wrapper.find('input').at(0)
    inputField.simulate('change', { target: { value: -1 } })
    expect(wrapper.state('value')).toBe(-1)
  })
  it(' works when user inputs gets undefined', () => {
    let wrapper = shallow(<Counter />);
    const inputField = wrapper.find('input').at(0)
    inputField.simulate('change', { target: { value: undefined } })
    expect(wrapper.state('value')).toBe(0)
  })

});