import React from 'react';
import { shallow } from 'enzyme'; 
import { PokemonContainer } from './PokemonContainer.js';

describe('TrainerSideBar', () => {
  let wrapper;
  let pokemonMock = [];
  let selectedPokemonMock = [];
  let trainersMock = [];

  it('should match the snapshot', () => {
    wrapper = shallow(<PokemonContainer pokemon={pokemonMock} trainers={trainersMock} selectedPokemon={selectedPokemonMock} />);
    expect(wrapper).toMatchSnapshot();
  });
});