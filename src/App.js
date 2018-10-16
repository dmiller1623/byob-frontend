import React, { Component } from 'react';
import './App.css';
import pokemonData from './utilities/pokemonData'
import TrainersSideBar from './components/trainersSideBar/TrainersSideBar'
import { PokemonContainer } from './components/pokemonContainer/PokemonContainer'
import { getTrainers, getPokemonTeams, postPokemonTeam } from './utilities/backendApiCalls/apiCalls'


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: pokemonData,
      counter: 0, 
      selectedPokemon: [],
      trainersTeams: [],
      trainers: [],
      currentTrainer: {}
    }
  };

  componentDidMount = () => {
    this.getTrainers();
    this.getTeams();
  };

  getTrainers = async () => {
    const trainers = await getTrainers();
    this.setState({
      trainers
    });
  }

  getTeams = async () => {
    const trainersTeams = await getPokemonTeams();
    this.setState({
      trainersTeams
    })
  }

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

  getCurrentTrainer = (e) => {
    let trainerName = e.target.value;  
    let foundTrainer = this.state.trainers.find(trainer => trainer.name === trainerName)
    this.setState({
      currentTrainer: foundTrainer
    }) 
  }

  postTeam = async () => {
    let selectedPokemon = this.state.selectedPokemon
    if (selectedPokemon.length < 5) return

    let newTeam = {
      trainer_id: this.state.currentTrainer.id,
      pokemon_one: selectedPokemon[0],
      pokemon_two: selectedPokemon[1],
      pokemon_three: selectedPokemon[2],
      pokemon_four: selectedPokemon[3],
      pokemon_five: selectedPokemon[4]
    }
    console.log(newTeam)
    await postPokemonTeam(newTeam)
    await this.getTeams();
   
  }
  
  render() {
    return (
      <div>
        <TrainersSideBar trainers={this.state.trainers} trainersTeams={this.state.trainersTeams}/>
        <PokemonContainer
          pokemon={this.state.pokemon}
          trainers={this.state.trainers}
          selectedPokemon={this.state.selectedPokemon}
          getCurrentTrainer={this.getCurrentTrainer}
          addToPokemonTeam={this.addPokemonToTeam}
          postTeam={this.postTeam}
          deleteFromTeam={this.deleteFromTeam}
          counter={this.state.counter}
          increment={this.increment}
          decrement={this.decrement}/>
      </div>
    );
  }
}

export default App;
