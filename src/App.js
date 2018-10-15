import React, { Component } from 'react';
import './App.css';
import pokemonData from './utilities/pokemonData'
import { PokemonContainer } from './components/PokemonContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: pokemonData
    }
  };
  

  render() {
    return (
      <div>
        <PokemonContainer pokemon={this.state.pokemon}/>
      </div>
    );
  }
}

export default App;
