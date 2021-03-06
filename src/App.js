import React, { Component } from 'react';
import './App.css';
import pokemonData from './utilities/pokemonData';
import TrainersSideBar from './components/trainersSideBar/TrainersSideBar';
import { PokemonContainer } from './components/pokemonContainer/PokemonContainer';
import { getTrainers, getPokemonTeams, postPokemonTeam, postTrainer, removeTrainer, removePokemonTeam } from './utilities/backendApiCalls/apiCalls';
import { Header } from './components/header/header';
import AddTrainer from './components/addTrainer/AddTrainer';
import PropTypes from 'prop-types';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: pokemonData,
      counter: 0, 
      selectedPokemon: [],
      trainersTeams: [],
      trainers: [],
      currentTrainer: {},
      addTrainer: false
    };
  }

  componentDidMount = () => {
    this.getTrainers();
    this.getTeams();
  };

  getTrainers = async () => {
    let trainers = await getTrainers();

    if (!trainers.length) trainers = []

    this.setState({
      trainers
    });
  }

  getTeams = async () => {
    let trainersTeams = await getPokemonTeams();

    if (!trainersTeams.length) trainersTeams = []
  
    this.setState({
      trainersTeams
    });
  }

  decrement = () => {
    let counter = this.state.counter;

    if (counter === 0) {
      counter = 149
    } else {
      counter -= 1
    }

    this.setState({
      counter
    });
  }

  increment = () => {
    let counter = this.state.counter;

    if (counter === 149) {
      counter = 0
    } else {
      counter++;
    }

    this.setState({
      counter
    });
  }

  addPokemonToTeam = (img) => {
    const selectedPokemon = this.state.selectedPokemon;
    if (selectedPokemon.length !== 5) {
      selectedPokemon.push(img);
      this.setState({
        selectedPokemon
      });
    } 
  };

  deleteFromTeam = (ind) => {
    const selectedPokemon = this.state.selectedPokemon;
    selectedPokemon.splice(ind, 1);

    this.setState({
      selectedPokemon
    });
  }

  getCurrentTrainer = (event) => {
    let trainerName = event.target.value;  
    let foundTrainer = this.state.trainers.find(trainer => trainer.name === trainerName);

    this.setState({
      currentTrainer: foundTrainer || {}
    }); 
  }

  postTeam = async () => {
    let selectedPokemon = this.state.selectedPokemon;
    if (selectedPokemon.length < 5 || !this.state.currentTrainer.id) return;

    let newTeam = {
      trainer_id: this.state.currentTrainer.id,
      pokemon_one: selectedPokemon[0],
      pokemon_two: selectedPokemon[1],
      pokemon_three: selectedPokemon[2],
      pokemon_four: selectedPokemon[3],
      pokemon_five: selectedPokemon[4]
    };
    await postPokemonTeam(newTeam);
    await this.getTeams();
    
    this.setState({
      selectedPokemon: []
    });
  }

  addTrainer = async (trainer) => {
    if (!trainer.name) return; 

    await postTrainer(trainer);
    this.getTrainers();
    this.toggleAddTrainer();
  }
  
  toggleAddTrainer = () => {
    let addTrainer = !this.state.addTrainer;
    this.setState({
      addTrainer
    });
  }

  deleteTrainer = async (trainerId) => {
    await removeTrainer(trainerId);
    this.getTrainers();
  }

  deletePokemonTeam = async (teamId) => {
    await removePokemonTeam(teamId);
    this.getTeams();
  }
  
  render() {
    if (this.state.addTrainer) {
      return (
        <div className='full-page'>
          <TrainersSideBar trainers={this.state.trainers} trainersTeams={this.state.trainersTeams} deleteTrainer={this.deleteTrainer} deletePokemonTeam={this.deletePokemonTeam}/>
          <div className='main-section'>
            <Header />
            <div className='trainer-input-section'>
              <AddTrainer addTrainer={this.addTrainer} toggleAddTrainer={this.toggleAddTrainer}/> 
            </div>
          </div>  
        </div>
      );
    } else {
      return (
        <div className='full-page'>
          <TrainersSideBar trainers={this.state.trainers} trainersTeams={this.state.trainersTeams} toggleAddTrainer={this.toggleAddTrainer} deleteTrainer={this.deleteTrainer} deletePokemonTeam={this.deletePokemonTeam}/>
          <div className='main-section'>
            <Header/>  
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
        </div>
      );
    }
  }
}

PokemonContainer.propTypes = {
  pokemon: PropTypes.array,
  counter: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  selectedPokemon: PropTypes.array,
  addPokemonToTeam: PropTypes.func,
  deleteFromTeam: PropTypes.func,
  trainers: PropTypes.array,
  postTeam: PropTypes.func,
  getCurrentTrainer: PropTypes.func
};

export default App;
