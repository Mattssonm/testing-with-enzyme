import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Transformers from '../Transformers';

describe('Transformers test suite', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Transformers />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it(' makes sure inputfield render ', () => {
        let wrapper = shallow(<Transformers />)
        const counterInput = wrapper.find('input').at(0).length;
        expect(counterInput).toBe(1)
    });
    it(' works to reverse a string input', () => {
        let wrapper = shallow(<Transformers />);
        const inputField = wrapper.find('input').at(0)
        inputField.simulate('change', { target: { value: 'Hello' } })
        expect(wrapper.state('reversed')).toBe('olleH')
    });
    it(' works to capitalize a string input', () => {
        let wrapper = shallow(<Transformers />);
        const inputField = wrapper.find('input').at(0)
        inputField.simulate('change', { target: { value: 'sommarlov' } })
        expect(wrapper.state('capitalized')).toBe('SOMMARLOV')
    });
    it(' works to multiply number with itself', () => {
        let wrapper = shallow(<Transformers />);
        const inputField = wrapper.find('input').at(0)
        inputField.simulate('change', { target: { value: '4' } })
        expect(wrapper.state('raiseTo')).toBe(16)
    })
    it(' returns states to empty values', () => {
      let wrapper = shallow(<Transformers />);
      const inputField = wrapper.find('input').at(0)
      inputField.simulate('change', { target: { value: '' } })
      expect(wrapper.state('raiseTo')).toBe(0)
      expect(wrapper.state('reversed')).toBe('')
      expect(wrapper.state('capitalized')).toBe('')
  })
});
  