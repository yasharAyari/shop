import React from 'react';
import { shallow } from 'enzyme';
import FormattedDifficulty from '.';

describe('formattedDifficulty', () => {
  it('should render "Easy" when the value is "0"', () => {
    const wrapper = shallow(<FormattedDifficulty value={0} />);
    const expectedValue = 'Easy';
    expect(wrapper.text()).toEqual(expectedValue);
  });
  it('should render "Medium" when the value is "1"', () => {
    const wrapper = shallow(<FormattedDifficulty value={1} />);
    const expectedValue = 'Medium';
    expect(wrapper.text()).toEqual(expectedValue);
  });
  it('should render "Hard" when the value is "2"', () => {
    const wrapper = shallow(<FormattedDifficulty value={2} />);
    const expectedValue = 'Hard';
    expect(wrapper.text()).toEqual(expectedValue);
  });
  it('should render "-" when the value ia not in the range of 0-2', () => {
    const wrapper = shallow(<FormattedDifficulty value={555} />);
    const expectedValue = '-';
    expect(wrapper.text()).toEqual(expectedValue);
  });
});
