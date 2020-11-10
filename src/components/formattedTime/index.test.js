import React from 'react';
import { shallow } from 'enzyme';
import FormattedTime from '.';

describe('formattedTime', () => {
  it('should render "1 minute" when the value is "PT05M"', () => {
    const wrapper = shallow(<FormattedTime value="PT01M" />);
    const expectedValue = '1 minute';
    expect(wrapper.text()).toEqual(expectedValue);
  });
  it('should render "49 minutes" when the value is "PT49M"', () => {
    const wrapper = shallow(<FormattedTime value="PT49M" />);
    const expectedValue = '49 minutes';
    expect(wrapper.text()).toEqual(expectedValue);
  });
  it('should render "0 minute" when the value is not a valid time', () => {
    const wrapper = shallow(<FormattedTime value="PTsdffdsfM" />);
    const expectedValue = '0 minute';
    expect(wrapper.text()).toEqual(expectedValue);
  });
});
