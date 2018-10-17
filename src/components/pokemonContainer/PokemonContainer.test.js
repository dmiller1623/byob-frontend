import React from 'react';
import { shallow } from 'enzyme'; 
import { PokemonContainer } from './PokemonContainer.js';

describe('TrainerSideBar', () => {
  let wrapper
  let pokemonMock = []
  let counter
  let increment
  let decrement
  let selectedPokemonMock = []
  let addToPokemonTeam
  let deleteFromTeam
  let trainersMock = []
  let postTeam
  let getCurrentTrainer

  it('should match the snapshot', () => {
    wrapper = shallow(<PokemonContainer pokemon={pokemonMock} trainers={trainersMock} selectedPokemon={selectedPokemonMock} />);
    expect(wrapper).toMatchSnapshot();
  });
});