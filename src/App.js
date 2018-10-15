import React, { Component } from 'react';
import './App.css';
import pokemonData from './utilities/pokemonData'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: pokemonData
    }
  }
  render() {
    return (
      <div>
     
      </div>
    );
  }
}

export default App;
