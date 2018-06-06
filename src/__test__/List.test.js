import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import List from '../List';

describe('List test suite', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('shallow smoke test', () => {
    let wrapper = shallow(<List />);
  });

  it('renders heading', () => {
    let wrapper = shallow(<List />);
    const header = <h3>List</h3>
    expect(wrapper.contains(header)).toBe(true);
  });

  it('initial textInput state should be an empty string', () => {
    let wrapper = shallow(<List />);
    expect(wrapper.state('textInput')).toBe("");
  });

  it('initial listedInputs state should be an empty array', () => {
    let wrapper = shallow(<List />);
    expect(wrapper.state('listedInputs').length).toBe(0);
  });

  it('adds textInput to listInputs on click', () => {
    let wrapper = shallow(<List />);
    let button = wrapper.find('button').at(0);
    wrapper.setState({ textInput: "This is an excellent test example"});
    button.simulate("click");
    expect(wrapper.state("listedInputs")).toContain("This is an excellent test example");
  });

  it('changes textInput state on input change', () => {
    let wrapper = shallow(<List />);
    wrapper.find('input').simulate('change', {target: {value: "This is test example is even better"}});
    expect(wrapper.state('textInput')).toBe("This is test example is even better")
  });

  it('renders listedInputs correctly', () => {
    let wrapper = shallow(<List />);
    wrapper.setState({ listedInputs: ["Chocolate", "Biscuits", "Strawberries"] });
    const list = (
      <ul>
        <li>Chocolate</li>
        <li>Biscuits</li>
        <li>Strawberries</li>
      </ul>
    );
    expect(wrapper.contains(list)).toBe(true);
  });
});
