import React from 'react';
import { shallow } from 'enzyme'; 
import PokemonCard from './PokemonCard.js';

describe('PokemonCard', () => {
  let wrapper;
 
  it('should match the snapshot', () => {
    wrapper = shallow(<PokemonCard />);
    expect(wrapper).toMatchSnapshot();
  });
});