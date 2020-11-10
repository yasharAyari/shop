import React from 'react';
import { shallow } from 'enzyme';
import Recipe from './index';

describe('recipe component', () => {
  const data = {
    calories: '516 kcal',
    headline: 'with Sweet Potato Wedges and Minted Snap Peas',
    id: '1',
    name: 'Crispy Fish Goujons ',
    rating: 5,
    thumb:
      'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_300/hellofresh_s3/image/533143aaff604d567f8b4571.jpg',
    time: 'PT35M',
  };
  it('should render the recipe overView item based on the given data object', () => {
    const wrapper = shallow(<Recipe data={data} />);
    expect(wrapper.find('h3').text()).toEqual(data.name);
    expect(wrapper.find(`#headline-${data.id}`).text()).toEqual(data.headline);
    expect(wrapper.find(`#calories-${data.id}`).text()).toEqual(data.calories);
  });
});
