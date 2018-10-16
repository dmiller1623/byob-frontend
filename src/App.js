import React, { Component } from 'react';
import './App.css';
import pokemonData from './utilities/pokemonData'
import TrainersSideBar from './components/trainersSideBar/TrainersSideBar'
import { PokemonContainer } from './components/pokemonContainer/PokemonContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: pokemonData,
      counter: 0, 
      selectedPokemon: []
    }
  };

  decrement = () => {
    let counter = this.state.counter

    if(counter !== 0) counter -= 1

    this.setState({
      counter
    })
  }


  increment = () => {
    let counter = this.state.counter

    if(counter !== 9) counter++

    this.setState({
      counter
    })
  }

  addPokemonToTeam = (img) => {
    const selectedPokemon = this.state.selectedPokemon;
    if (selectedPokemon.length !== 5) {
      selectedPokemon.push(img);
      this.setState({
        selectedPokemon
      })
    }; 
  };

  deleteFromTeam = (i) => {
    const selectedPokemon = this.state.selectedPokemon;
    selectedPokemon.splice(i, 1)

    this.setState({
      selectedPokemon
    })
  }
  

  render() {
    return (
      <div>
        <TrainersSideBar />
        <PokemonContainer
          pokemon={this.state.pokemon}
          selectedPokemon={this.state.selectedPokemon}
          addToPokemonTeam={this.addPokemonToTeam}
          deleteFromTeam={this.deleteFromTeam}
          counter={this.state.counter}
          increment={this.increment}
          decrement={this.decrement}/>
      </div>
    );
  }
}

export default App;
