import React from 'react';
import { shallow } from 'enzyme'; 
import AddTrainer from './AddTrainer.js';

describe('AddTrainer', () => {
  let wrapper
 
  it('should match the snapshot', () => {
    wrapper = shallow(<AddTrainer />);
    expect(wrapper).toMatchSnapshot();
  });
});